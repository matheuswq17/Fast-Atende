"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type MascotVideoProps = {
  src: string;
  poster: string;
  className?: string;
  priority?: boolean;
  playWhenInView?: boolean;
};

export function MascotVideo({
  src,
  poster,
  className,
  priority = false,
  playWhenInView = true,
}: MascotVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isInView, setIsInView] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);
  // Priority videos mount the <video> element immediately
  const [shouldRenderVideo, setShouldRenderVideo] = useState(priority);

  // IntersectionObserver — only for non-priority (below-fold) videos
  useEffect(() => {
    if (priority || !containerRef.current || !playWhenInView) return;

    const el = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShouldRenderVideo(true);
        setIsInView(entry.isIntersecting || entry.intersectionRatio > 0.05);
      },
      { threshold: [0, 0.05, 0.2], rootMargin: "200px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [priority, playWhenInView]);

  // Play/pause and Ping-Pong logic based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Fast-track load state if video is already ready (e.g. cached)
    if (video.readyState >= 3) {
      setIsLoaded(true);
    }

    if (!playWhenInView) return;

    if (isInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView, playWhenInView]);

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full w-full bg-[#060b19]", className)}
    >
      {/* Poster fallback — visible until video loads */}
      <div 
        className={cn(
          "absolute inset-0 transition-opacity duration-700 pointer-events-none z-10", 
          isLoaded ? "opacity-0" : "opacity-100"
        )}
      >
        <Image
          src={poster}
          alt="Mascote FastAtende"
          fill
          className="object-cover"
          priority={priority}
          sizes="(max-width: 768px) 80vw, 400px"
        />
      </div>

      {/* Video element — mounted immediately for priority, lazily for others */}
      {shouldRenderVideo && (
        <video
          ref={videoRef}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500 z-0",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          autoPlay={priority}
          muted
          playsInline
          loop
          preload={priority ? "auto" : "none"}
          onCanPlay={() => setIsLoaded(true)}
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

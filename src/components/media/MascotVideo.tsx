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
    if (!video || !playWhenInView) return;

    let isReversing = false;
    let lastTime = window.performance.now();
    let rAFId: number = 0;

    const tickReverse = (now: number) => {
      if (!isReversing) return;

      const dt = (now - lastTime) / 1000;
      lastTime = now;

      // Ensure a reasonable dt so huge frames (tab switch) don't jump massively
      const clampedDt = Math.min(dt, 0.1);
      
      const newTime = video.currentTime - clampedDt;

      if (newTime <= 0) {
        video.currentTime = 0;
        isReversing = false;
        video.play().catch(() => {});
      } else {
        video.currentTime = newTime;
        rAFId = requestAnimationFrame(tickReverse);
      }
    };

    const handleEnded = () => {
      isReversing = true;
      video.pause();
      lastTime = window.performance.now();
      rAFId = requestAnimationFrame(tickReverse);
    };

    video.addEventListener("ended", handleEnded);

    if (isInView) {
      if (!isReversing) {
        video.play().catch(() => {});
      } else {
        lastTime = window.performance.now();
        rAFId = requestAnimationFrame(tickReverse);
      }
    } else {
      video.pause();
      if (rAFId) cancelAnimationFrame(rAFId);
    }

    return () => {
      video.removeEventListener("ended", handleEnded);
      if (rAFId) cancelAnimationFrame(rAFId);
    };
  }, [isInView, playWhenInView]);

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full w-full", className)}
    >
      {/* Poster fallback — visible until video loads */}
      {!isLoaded && (
        <Image
          src={poster}
          alt="Mascote FastAtende"
          fill
          className="object-cover pointer-events-none"
          priority={priority}
          sizes="(max-width: 768px) 80vw, 400px"
        />
      )}

      {/* Video element — mounted immediately for priority, lazily for others */}
      {shouldRenderVideo && (
        <video
          ref={videoRef}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          autoPlay={priority}
          muted
          playsInline
          preload={priority ? "auto" : "none"}
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

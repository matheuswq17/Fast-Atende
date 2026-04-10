export type FieldType =
  | "text"
  | "email"
  | "tel"
  | "url"
  | "textarea"
  | "select"
  | "radio"
  | "checkbox-group"
  | "checkbox";

export interface FieldOption {
  value: string;
  label: string;
}

export interface BriefingField {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  options?: FieldOption[];
  hint?: string;
}

export interface BriefingStep {
  id: string;
  title: string;
  icon: string;
  description: string;
  fields: BriefingField[];
}

export const BRIEFING_STEPS: BriefingStep[] = [
  {
    id: "empresa",
    title: "Dados da empresa",
    icon: "🏢",
    description: "Informações básicas sobre a empresa que será atendida pela FastAtende.",
    fields: [
      { id: "nome_empresa", label: "Nome da empresa", type: "text", placeholder: "Razão social da empresa", required: true },
      { id: "nome_fantasia", label: "Nome fantasia", type: "text", placeholder: "Como a empresa é conhecida pelo mercado", required: true },
      { id: "como_marca_conhecida", label: "Como a marca é conhecida", type: "text", placeholder: "Ex: apelido, sigla, variações do nome" },
      { id: "cnpj", label: "CNPJ", type: "text", placeholder: "00.000.000/0001-00" },
      { id: "site", label: "Site", type: "url", placeholder: "https://seusite.com.br" },
      { id: "segmento", label: "Segmento", type: "select", required: true, options: [
        { value: "saude", label: "Saúde / Clínica / Consultório" },
        { value: "comercial", label: "Equipe Comercial / Vendas" },
        { value: "suporte", label: "Central de Suporte / Atendimento" },
        { value: "educacao", label: "Educação" },
        { value: "logistica", label: "Logística / Entregas" },
        { value: "juridico", label: "Jurídico / Escritório" },
        { value: "financeiro", label: "Financeiro / Crédito" },
        { value: "imobiliaria", label: "Imobiliária / Construção" },
        { value: "varejo", label: "Varejo / E-commerce" },
        { value: "outro", label: "Outro" },
      ]},
      { id: "porte", label: "Porte da empresa", type: "select", options: [
        { value: "mei", label: "MEI / Autônomo" },
        { value: "micro", label: "Microempresa (até 9 funcionários)" },
        { value: "pequena", label: "Pequena (10–49 funcionários)" },
        { value: "media", label: "Média (50–249 funcionários)" },
        { value: "grande", label: "Grande (250+ funcionários)" },
      ]},
      { id: "cidade_estado", label: "Cidade / Estado", type: "text", placeholder: "Ex: São Paulo / SP" },
      { id: "unidades", label: "Quantas unidades ou filiais?", type: "text", placeholder: "Ex: 1, 3, 10+" },
    ],
  },
  {
    id: "responsavel",
    title: "Responsável pelo projeto",
    icon: "👤",
    description: "Quem será nossa referência de contato durante o diagnóstico e proposta.",
    fields: [
      { id: "resp_nome", label: "Nome do responsável", type: "text", required: true, placeholder: "Nome completo" },
      { id: "resp_cargo", label: "Cargo", type: "text", placeholder: "Ex: Gerente de Operações, CEO, Coordenador de TI" },
      { id: "resp_email", label: "E-mail", type: "email", required: true, placeholder: "email@empresa.com.br" },
      { id: "resp_whatsapp", label: "WhatsApp / Telefone", type: "tel", required: true, placeholder: "(11) 9 9999-9999" },
    ],
  },
  {
    id: "whatsapp_meta",
    title: "WhatsApp / Meta",
    icon: "💬",
    description: "Levantamento do status atual dos ativos Meta e WhatsApp da empresa.",
    fields: [
      { id: "numero_comercial", label: "Já possuem número comercial dedicado para o atendimento pelo WhatsApp?", type: "radio", options: [
        { value: "sim", label: "Sim" }, { value: "nao", label: "Não" }, { value: "em_processo", label: "Em processo de obter" },
      ]},
      { id: "tipo_whatsapp", label: "Esse número já usa WhatsApp Business ou API?", type: "radio", options: [
        { value: "business_app", label: "WhatsApp Business (App)" }, { value: "api", label: "WhatsApp Business API (BSP/Cloud)" }, { value: "pessoal", label: "Número pessoal comum" }, { value: "nenhum", label: "Nenhum ainda" },
      ]},
      { id: "numero_sms_ligacao", label: "O número pode receber SMS ou ligação para verificação?", type: "radio", options: [
        { value: "sim", label: "Sim" }, { value: "nao", label: "Não" }, { value: "nao_sei", label: "Não sei" },
      ]},
      { id: "meta_business_manager", label: "Já possuem Meta Business Manager?", type: "radio", options: [
        { value: "sim", label: "Sim" }, { value: "nao", label: "Não" },
      ]},
      { id: "meta_for_developers", label: "Já possuem conta no Meta for Developers?", type: "radio", options: [
        { value: "sim", label: "Sim" }, { value: "nao", label: "Não" },
      ]},
      { id: "waba", label: "Já possuem conta do WhatsApp Business (WABA)?", type: "radio", options: [
        { value: "sim", label: "Sim" }, { value: "nao", label: "Não" },
      ]},
      { id: "resp_acessos", label: "Quem será o responsável por liberar acessos e verificações?", type: "text", placeholder: "Nome e cargo do responsável técnico" },
    ],
  },
  {
    id: "atendimento_atual",
    title: "Atendimento atual",
    icon: "📊",
    description: "Como a empresa lida com atendimento hoje, antes da FastAtende.",
    fields: [
      { id: "canais_atuais", label: "Canais usados hoje", type: "checkbox-group", options: [
        { value: "whatsapp", label: "WhatsApp" }, { value: "email", label: "E-mail" }, { value: "telefone", label: "Telefone" }, { value: "chat_site", label: "Chat no site" }, { value: "instagram", label: "Instagram / DMs" }, { value: "presencial", label: "Presencial" }, { value: "outro", label: "Outro" },
      ]},
      { id: "volume_mensal", label: "Volume mensal de atendimentos (estimativa)", type: "select", options: [
        { value: "ate_100", label: "Até 100 atendimentos/mês" },
        { value: "100_500", label: "100 a 500 atendimentos/mês" },
        { value: "500_2000", label: "500 a 2.000 atendimentos/mês" },
        { value: "2000_10000", label: "2.000 a 10.000 atendimentos/mês" },
        { value: "acima_10000", label: "Acima de 10.000 atendimentos/mês" },
      ]},
      { id: "tamanho_equipe", label: "Tamanho da equipe atual de atendimento", type: "text", placeholder: "Ex: 3 atendentes + 1 supervisor" },
      { id: "horario_atendimento", label: "Horário de atendimento", type: "text", placeholder: "Ex: Seg–Sex 8h–18h, Sáb 9h–13h" },
      { id: "horarios_pico", label: "Horários de pico", type: "text", placeholder: "Ex: Seg e Qua das 9h às 11h" },
      { id: "principais_demandas", label: "Principais demandas recebidas", type: "textarea", placeholder: "Descreva os tipos de mensagem mais frequentes (agendamentos, dúvidas, reclamações, orçamentos...)" },
      { id: "ferramentas_atuais", label: "Ferramentas usadas hoje no atendimento", type: "text", placeholder: "Ex: CRM Zendesk, Google Agenda, Excel, nenhuma..." },
    ],
  },
  {
    id: "escopo",
    title: "Escopo e automação",
    icon: "⚙️",
    description: "O que você espera que o atendimento automatizado faça no WhatsApp.",
    fields: [
      { id: "objetivos_projeto", label: "Objetivos do projeto", type: "textarea", required: true, placeholder: "Ex: Reduzir tempo de resposta, triagem de leads, evitar perda de mensagens..." },
      { id: "uso_atendimento", label: "O atendimento será usado para", type: "checkbox-group", options: [
        { value: "triagem", label: "Triagem e roteamento" }, { value: "suporte", label: "Suporte ao cliente" }, { value: "vendas", label: "Pré-venda / Qualificação de leads" }, { value: "agendamento", label: "Agendamento" }, { value: "cobranca", label: "Cobrança / Financeiro" }, { value: "pos_venda", label: "Pós-venda / Retenção" }, { value: "outro", label: "Outro" },
      ]},
      { id: "foco_fluxo", label: "O fluxo deve focar apenas em respostas ou também em executar ações?", type: "radio", options: [
        { value: "apenas_respostas", label: "Apenas respostas e informações" }, { value: "acoes", label: "Respostas + executar ações (ex: salvar dados, criar registros)" }, { value: "ambos", label: "Ambos, depende do fluxo" },
      ]},
      { id: "acoes_a_executar", label: "Quais ações ele deve executar?", type: "textarea", placeholder: "Ex: salvar lead no CRM, criar agendamento, atualizar status, enviar confirmação..." },
      { id: "casos_de_uso", label: "Casos de uso esperados", type: "textarea", placeholder: "Descreva os fluxos que você imagina que o bot vai gerenciar" },
      { id: "idiomas", label: "Idiomas necessários", type: "text", placeholder: "Ex: Português, Inglês, Espanhol" },
      { id: "tom_de_voz", label: "Tom de voz do atendimento", type: "select", options: [
        { value: "formal", label: "Formal e institucional" }, { value: "profissional", label: "Profissional e direto" }, { value: "amigavel", label: "Amigável e próximo" }, { value: "descontraido", label: "Descontraído e informal" },
      ]},
    ],
  },
  {
    id: "regras_negocio",
    title: "Regras do negócio",
    icon: "📋",
    description: "Regras específicas da operação que a automação precisa respeitar.",
    fields: [
      { id: "dados_obrigatorios", label: "Quais informações a automação precisa obrigatoriamente coletar?", type: "textarea", placeholder: "Ex: nome, CPF, data de nascimento, número do pedido..." },
      { id: "cliente_novo_recorrente", label: "Existe fluxo diferente para cliente novo e cliente recorrente?", type: "radio", options: [
        { value: "sim", label: "Sim" }, { value: "nao", label: "Não" }, { value: "talvez", label: "Talvez, precisa ser definido" },
      ]},
      { id: "prioridade_cliente", label: "Existe prioridade por tipo de cliente?", type: "text", placeholder: "Ex: clientes VIP, assinantes premium, urgência por plano..." },
      { id: "regioes_atendidas", label: "Há bairros, regiões ou áreas atendidas?", type: "textarea", placeholder: "Descreva limitações geográficas, se existirem" },
      { id: "regras_sla", label: "Há regras de horário, fila, limite ou SLA?", type: "textarea", placeholder: "Ex: resposta em até 2h, limite de 3 tentativas, fila máxima de 50 tickets..." },
      { id: "bloqueios_redirecionamentos", label: "Existem situações em que o atendimento deve ser bloqueado ou redirecionado?", type: "textarea", placeholder: "Ex: clientes inadimplentes, regiões não atendidas, horário fechado..." },
    ],
  },
  {
    id: "handoff_humano",
    title: "Handoff para humano",
    icon: "🤝",
    description: "Como e quando o atendimento automatizado transfere para um atendente humano.",
    fields: [
      { id: "quando_transferir", label: "Quando deve transferir para humano?", type: "textarea", placeholder: "Ex: quando o cliente pedir, em casos de reclamação, quando não souber responder..." },
      { id: "para_quem_transferir", label: "Para quem a triagem deve transferir?", type: "text", placeholder: "Ex: equipe de vendas, suporte nível 2, gerente de contas..." },
      { id: "como_transferir", label: "Como a transferência deve acontecer?", type: "select", options: [
        { value: "mesmo_whatsapp", label: "Mesmo WhatsApp, muda o atendente" }, { value: "outro_canal", label: "Redireciona para outro canal" }, { value: "abre_ticket", label: "Abre ticket no sistema" }, { value: "outro", label: "Outro" },
      ]},
      { id: "horarios_humano", label: "Em quais horários há humano disponível?", type: "text", placeholder: "Ex: Seg–Sex 8h–18h" },
      { id: "informar_cliente_transferencia", label: "O cliente deve ser informado de que foi transferido?", type: "radio", options: [
        { value: "sim", label: "Sim, sempre" }, { value: "opcional", label: "Depende do caso" }, { value: "nao", label: "Não é necessário" },
      ]},
      { id: "atendente_mesmo_canal", label: "O atendente humano continuará no mesmo WhatsApp ou em outro canal?", type: "radio", options: [
        { value: "mesmo_whatsapp", label: "Mesmo WhatsApp" }, { value: "outro_canal", label: "Outro canal (email, CRM, etc.)" }, { value: "ambos", label: "Depende do caso" },
      ]},
    ],
  },
  {
    id: "base_conhecimento",
    title: "Base de conhecimento",
    icon: "📚",
    description: "Conteúdo e materiais que serão usados para treinar e informar o assistente.",
    fields: [
      { id: "base_disponivel", label: "Base de conhecimento disponível", type: "checkbox-group", options: [
        { value: "faq", label: "FAQ / Perguntas frequentes" }, { value: "manual", label: "Manual de atendimento" }, { value: "scripts", label: "Scripts de atendimento" }, { value: "planilhas", label: "Planilhas com informações" }, { value: "documentos", label: "Documentos / PDFs" }, { value: "nenhuma", label: "Não temos base ainda" },
      ]},
      { id: "base_atualizada", label: "A base de conhecimento está atualizada?", type: "radio", options: [
        { value: "sim", label: "Sim, está atualizada" }, { value: "parcialmente", label: "Parcialmente" }, { value: "nao", label: "Não, precisa de revisão" },
      ]},
      { id: "resp_materiais", label: "Quem será responsável por enviar e revisar os materiais?", type: "text", placeholder: "Nome e cargo" },
      { id: "pode_treinar", label: "Os materiais podem ser usados para treinar um assistente?", type: "radio", options: [
        { value: "sim", label: "Sim, totalmente" }, { value: "parcialmente", label: "Parcialmente (alguns são confidenciais)" }, { value: "nao", label: "Não, precisamos discutir antes" },
      ]},
      { id: "respostas_padrao", label: "Há respostas padrão já aprovadas pela empresa?", type: "textarea", placeholder: "Descreva ou liste as respostas padrão, se existirem" },
      { id: "info_sensiveis", label: "Há informações sensíveis ou que não devem ser usadas no atendimento?", type: "textarea", placeholder: "Ex: dados de clientes específicos, informações comerciais confidenciais, processos internos..." },
    ],
  },
  {
    id: "dashboard",
    title: "Dashboard e operação",
    icon: "📈",
    description: "Necessidades de visibilidade, relatórios e gestão da operação.",
    fields: [
      { id: "precisa_dashboard", label: "Precisa de dashboard?", type: "radio", required: true, options: [
        { value: "sim_essencial", label: "Sim, é essencial" }, { value: "sim_desejavel", label: "Sim, mas é desejável" }, { value: "nao", label: "Não é prioridade agora" },
      ]},
      { id: "qtd_acessos", label: "Quantas pessoas precisam acessar o painel?", type: "text", placeholder: "Ex: 2 gestores, 5 atendentes" },
      { id: "perfis_uso", label: "O painel será usado por", type: "checkbox-group", options: [
        { value: "gestores", label: "Gestores / Diretoria" }, { value: "supervisores", label: "Supervisores" }, { value: "atendentes", label: "Atendentes" }, { value: "ti", label: "TI / Técnico" }, { value: "marketing", label: "Marketing" },
      ]},
      { id: "o_que_ver", label: "O que cada perfil precisa ver?", type: "textarea", placeholder: "Ex: gestores querem KPIs, atendentes precisam ver fila em tempo real..." },
      { id: "indicadores", label: "Indicadores desejados", type: "checkbox-group", options: [
        { value: "volume", label: "Volume de atendimentos" }, { value: "tempo_resposta", label: "Tempo médio de resposta" }, { value: "taxa_resolucao", label: "Taxa de resolução automática" }, { value: "satisfacao", label: "Satisfação (CSAT/NPS)" }, { value: "fila", label: "Fila em tempo real" }, { value: "conversao", label: "Conversão de leads" },
      ]},
      { id: "freq_acompanhamento", label: "Frequência de acompanhamento", type: "radio", options: [
        { value: "tempo_real", label: "Tempo real" }, { value: "diario", label: "Diário" }, { value: "semanal", label: "Semanal" }, { value: "mensal", label: "Mensal" },
      ]},
      { id: "historico_conversas", label: "Precisam de histórico de conversas?", type: "radio", options: [
        { value: "sim", label: "Sim" }, { value: "nao", label: "Não" },
      ]},
      { id: "exportacao_dados", label: "Precisam de exportação de dados?", type: "radio", options: [
        { value: "sim", label: "Sim" }, { value: "nao", label: "Não" },
      ]},
      { id: "filtros_painel", label: "Precisam de filtros no painel?", type: "radio", options: [
        { value: "sim", label: "Sim" }, { value: "nao", label: "Não" }, { value: "talvez", label: "Talvez" },
      ]},
      { id: "alertas_notificacoes", label: "Precisam de alertas ou notificações?", type: "textarea", placeholder: "Ex: alerta quando a fila ultrapassar X tickets, notificação de cliente prioritário..." },
    ],
  },
  {
    id: "integracoes",
    title: "Integrações",
    icon: "🔗",
    description: "Sistemas e APIs que precisarão se conectar ao atendimento.",
    fields: [
      { id: "integracoes_desejadas", label: "Integrações desejadas", type: "checkbox-group", options: [
        { value: "crm", label: "CRM (HubSpot, Salesforce, RD, Pipedrive...)" }, { value: "erp", label: "ERP (Omie, Totvs, SAP, Bling...)" }, { value: "agenda", label: "Agendamento (Google Calendar, Doctoralia...)" }, { value: "pagamento", label: "Pagamento (Stripe, Mercado Pago, PagSeguro...)" }, { value: "ecommerce", label: "E-commerce (Shopify, VTEX, WooCommerce...)" }, { value: "helpdesk", label: "Helpdesk (Zendesk, Freshdesk, Movidesk...)" }, { value: "outro", label: "Outro" }, { value: "nenhuma", label: "Nenhuma por enquanto" },
      ]},
      { id: "api_disponivel", label: "Existe API disponível?", type: "radio", options: [
        { value: "sim", label: "Sim" }, { value: "nao", label: "Não" }, { value: "nao_sei", label: "Não sei" },
      ]},
      { id: "documentacao_api", label: "Existe documentação da API?", type: "radio", options: [
        { value: "sim", label: "Sim, disponível" }, { value: "parcial", label: "Parcialmente documentada" }, { value: "nao", label: "Não" },
      ]},
      { id: "sandbox_api", label: "Existe acesso sandbox ou teste?", type: "radio", options: [
        { value: "sim", label: "Sim" }, { value: "nao", label: "Não" }, { value: "nao_sei", label: "Não sei" },
      ]},
      { id: "fonte_verdade", label: "Qual sistema será a fonte principal da verdade?", type: "text", placeholder: "Ex: CRM HubSpot, ERP Omie, banco de dados interno..." },
      { id: "alternativa_api", label: "Se não houver API, aceitam integração por", type: "checkbox-group", options: [
        { value: "planilha", label: "Planilha compartilhada (Google Sheets)" }, { value: "email", label: "E-mail automático" }, { value: "webhook", label: "Webhook" }, { value: "outro", label: "Outro" },
      ]},
    ],
  },
  {
    id: "seguranca_lgpd",
    title: "Segurança e LGPD",
    icon: "🔒",
    description: "Requisitos de conformidade, segurança de dados e governança de privacidade.",
    fields: [
      { id: "exigencia_lgpd", label: "Há exigência de LGPD / compliance?", type: "radio", required: true, options: [
        { value: "sim", label: "Sim, somos rigorosos" }, { value: "basico", label: "Seguimos o básico" }, { value: "nao_sei", label: "Não sei ao certo" },
      ]},
      { id: "trata_dados_pessoais", label: "Sua operação no WhatsApp tratará dados pessoais?", type: "radio", options: [
        { value: "sim", label: "Sim" }, { value: "nao", label: "Não" },
      ]},
      { id: "dados_sensiveis", label: "Sua operação processará dados sensíveis?", type: "checkbox-group", options: [
        { value: "saude", label: "Dados de saúde" }, { value: "financeiros", label: "Dados financeiros / bancários" }, { value: "criancas", label: "Dados de menores de idade" }, { value: "nenhum", label: "Nenhum dado sensível" },
      ]},
      { id: "retencao_dados", label: "Existe política de retenção de dados?", type: "radio", options: [
        { value: "sim", label: "Sim" }, { value: "nao", label: "Não" }, { value: "em_definicao", label: "Em definição" },
      ]},
      { id: "restricoes_armazenamento", label: "Há restrições sobre onde os dados podem ser armazenados?", type: "textarea", placeholder: "Ex: somente Brasil, somente AWS, somente servidores próprios..." },
      { id: "termo_confidencialidade", label: "É necessário termo de confidencialidade ou DPA?", type: "radio", options: [
        { value: "sim", label: "Sim, é obrigatório" }, { value: "preferivel", label: "Sim, é preferível" }, { value: "nao", label: "Não é necessário" },
      ]},
      { id: "mensagens_aprovacao_juridica", label: "Há mensagens que exigem aprovação jurídica/compliance?", type: "radio", options: [
        { value: "sim", label: "Sim" }, { value: "nao", label: "Não" }, { value: "talvez", label: "Talvez" },
      ]},
    ],
  },
  {
    id: "governanca",
    title: "Governança e aprovações",
    icon: "✅",
    description: "Quem tem poder de decisão e aprovação nas diferentes etapas do projeto.",
    fields: [
      { id: "aprova_escopo", label: "Quem aprova escopo?", type: "text", placeholder: "Nome e cargo" },
      { id: "aprova_conteudo", label: "Quem aprova conteúdo e mensagens?", type: "text", placeholder: "Nome e cargo" },
      { id: "aprova_acessos", label: "Quem aprova acessos técnicos?", type: "text", placeholder: "Nome e cargo" },
      { id: "aprova_proposta", label: "Quem aprova proposta comercial?", type: "text", placeholder: "Nome e cargo" },
      { id: "equipe_ti", label: "Existe equipe de TI envolvida?", type: "radio", options: [
        { value: "sim_interna", label: "Sim, interna" }, { value: "sim_terceirizada", label: "Sim, terceirizada" }, { value: "nao", label: "Não" },
      ]},
      { id: "equipe_marketing_juridico", label: "Existe equipe de marketing ou jurídico envolvida?", type: "radio", options: [
        { value: "marketing", label: "Marketing" }, { value: "juridico", label: "Jurídico" }, { value: "ambos", label: "Ambos" }, { value: "nenhum", label: "Nenhum" },
      ]},
      { id: "processo_aprovacao", label: "Como é o processo de aprovação interna?", type: "textarea", placeholder: "Descreva brevemente como decisões são tomadas na empresa (rápido / burocrático / em comitê...)" },
    ],
  },
  {
    id: "implantacao_metas",
    title: "Implantação e metas",
    icon: "🎯",
    description: "Expectativas de prazo, investimento e critérios de sucesso do projeto.",
    fields: [
      { id: "prazo_desejado", label: "Prazo desejado para entrar em operação", type: "select", options: [
        { value: "imediato", label: "O quanto antes (urgente)" }, { value: "30_dias", label: "Em até 30 dias" }, { value: "60_dias", label: "Em até 60 dias" }, { value: "90_dias", label: "Em até 90 dias" }, { value: "sem_prazo", label: "Sem prazo definido" },
      ]},
      { id: "investimento", label: "Faixa de investimento prevista", type: "select", options: [
        { value: "ate_500", label: "Até R$ 500/mês" }, { value: "500_1500", label: "R$ 500 a R$ 1.500/mês" }, { value: "1500_5000", label: "R$ 1.500 a R$ 5.000/mês" }, { value: "5000_mais", label: "Acima de R$ 5.000/mês" }, { value: "nao_sei", label: "Ainda não sei" },
      ]},
      { id: "como_medir_sucesso", label: "Como vocês vão medir sucesso nesse projeto?", type: "textarea", required: true, placeholder: "Descreva o que seria um projeto bem-sucedido para sua empresa" },
      { id: "meta_tempo_resposta", label: "Meta de tempo de resposta", type: "text", placeholder: "Ex: Responder em até 1 minuto" },
      { id: "meta_automacao", label: "Meta de automação", type: "text", placeholder: "Ex: Automatizar 70% dos atendimentos" },
      { id: "meta_reducao_fila", label: "Meta de redução de fila", type: "text", placeholder: "Ex: Reduzir fila de espera em 50%" },
      { id: "meta_conversao", label: "Meta de conversão", type: "text", placeholder: "Ex: Converter 30% dos leads qualificados" },
      { id: "meta_satisfacao", label: "Meta de satisfação", type: "text", placeholder: "Ex: NPS acima de 80, CSAT ≥ 4,5" },
      { id: "meta_economia", label: "Meta de economia operacional", type: "text", placeholder: "Ex: Reduzir custo de atendimento em 40%" },
      { id: "informacoes_adicionais", label: "Informações adicionais", type: "textarea", placeholder: "Alguma coisa importante que não foi coberta pelas perguntas acima?" },
      { id: "autoriza_contato", label: "Autorizo a FastAtende a entrar em contato com base neste briefing para apresentar proposta e tirar dúvidas.", type: "checkbox", required: true },
    ],
  },
];

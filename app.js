/**
 * ==========================================================================
 * PORTFOLIO DATA & CONFIGURATION (Felipe dos Santos Silva)
 * ==========================================================================
 */
const PORTFOLIO_DATA = {
  personal: {
    name: "Felipe dos Santos Silva",
    role: "Python Developer | Automation (RPA) | Linux & Cloud Specialist",
    typingRoles: [
      "Python Developer & RPA",
      "Especialista Linux (NixOS/Arch)",
      "Cloud Infrastructure & DevOps",
      "Graduando em Ciência da Computação (UERR)"
    ],
    status: "Disponível para novos projetos e contratação",
    location: "Boa Vista, Roraima, Brasil",
    email: "felpssilvam@gmail.com",
    whatsapp: "+55 95 99999-9999",
    githubUrl: "https://github.com/Felpnoo",
    linkedinUrl: "https://www.linkedin.com/in/felipess-dev",
    cvDownloadUrl: "assets/cv/FELIPE-DOS-SANTOS-SILVA-CV.pdf",
    bioIntro: "Graduando em Ciência da Computação (7º Semestre) na UERR e Desenvolvedor focado em Automação de Processos (RPA), Infraestrutura Cloud e Linux.",
    bioDescription: "Possuo sólido background em administração Linux (NixOS / Arch), Shell Scripting e fundamentos de DevOps. Experiência prática combinando desenvolvimento de software com resolução de incidentes de infraestrutura para otimização de fluxos de trabalho. Certificado em Arquitetura Cloud, Python Development e Java pela FIAP. Apaixonado por criar ambientes reproduzíveis e solucionar desafios complexos por meio de código.",
    stats: [
      { number: "7º Sem.", label: "Ciência da Computação (UERR)" },
      { number: "15+", label: "Certificações Oficiais (FIAP/Udemy)" },
      { number: "4+", label: "Anos de Trajetória Técnica" },
      { number: "100%", label: "Ambientes Reproduzíveis" }
    ]
  },

  skills: [
    // Linguagens
    { name: "Python (Pandas, Selenium, OpenCV)", category: "languages", level: "Avançado", icon: "python" },
    { name: "Django, FastAPI & APIs REST", category: "languages", level: "Avançado", icon: "server" },
    { name: "Shell Scripting (Bash)", category: "languages", level: "Avançado", icon: "code" },
    { name: "Java (POO & Development)", category: "languages", level: "Intermediário", icon: "code" },
    { name: "JavaScript / TypeScript", category: "languages", level: "Intermediário", icon: "ts" },
    { name: "SQL & Bancos Relacionais", category: "languages", level: "Avançado", icon: "database" },

    // Infraestrutura & OS
    { name: "Linux Avançado (NixOS, Arch)", category: "infra", level: "Especialista", icon: "server" },
    { name: "Docker & Containers", category: "infra", level: "Intermediário", icon: "docker" },
    { name: "AWS (Cloud Practitioner)", category: "infra", level: "Intermediário", icon: "cloud" },
    { name: "Windows Server & SLA Management", category: "infra", level: "Avançado", icon: "server" },
    { name: "TrueNAS & Storage", category: "infra", level: "Intermediário", icon: "database" },

    // Áreas de Foco & DevOps
    { name: "RPA (Robotic Process Automation)", category: "focus", level: "Avançado", icon: "tool" },
    { name: "Web Scraping & Data Extraction", category: "focus", level: "Avançado", icon: "code" },
    { name: "System Hardening & Segurança", category: "focus", level: "Avançado", icon: "tool" },
    { name: "CI/CD Pipelines & GitHub Actions", category: "focus", level: "Intermediário", icon: "git" },
    { name: "Metodologias Ágeis & Scrum", category: "focus", level: "Avançado", icon: "tool" }
  ],

  projects: [
    {
      id: "humanitarian-reporting",
      title: "Automated Humanitarian Reporting & ETL",
      category: "rpa",
      categoryLabel: "Automação & ETL",
      shortDesc: "Pipeline automatizado de ETL transformando dados brutos de campo em relatórios padronizados em PDF para operações humanitárias com Python e NixOS.",
      fullDesc: "Sistema de engenharia de dados e automação de relatórios para operações em campo. Processa grandes volumes de dados brutos com Pandas e gera relatórios analíticos formatados em PDF de forma 100% reproduzível utilizando NixOS.",
      features: [
        "Pipeline automatizado de ETL com processamento e validação de dados em Pandas",
        "Geração de relatórios executivos padronizados em PDF",
        "Ambiente declarativo e reproduzível construído com NixOS",
        "Execução resiliente com tratamento robusto de inconsistências de dados"
      ],
      tags: ["Python", "Pandas", "ETL", "NixOS", "Data Processing", "PDF Generation"],
      image: "assets/images/project-ecommerce.jpg",
      demoUrl: "https://github.com/Felpnoo/automated-humanitarian-reporting",
      githubUrl: "https://github.com/Felpnoo/automated-humanitarian-reporting"
    },
    {
      id: "nixos-config",
      title: "Reproducible Linux & NixOS Infrastructure",
      category: "infra",
      categoryLabel: "Linux & DevOps",
      shortDesc: "Infraestrutura como código (IaC) e configurações declarativas para ambientes Linux (NixOS / Arch), dotfiles, automação de rotinas e hardening.",
      fullDesc: "Repositório completo de automação e configuração declarativa para sistemas operacionais Linux. Utiliza Nix Flakes, automação de rotinas em Shell Scripting (Bash) e parametrização de segurança para ambientes de desenvolvimento e servidores.",
      features: [
        "Configuração declarativa e imutável de ambientes através do NixOS Flakes",
        "Scripts Shell para auditoria de segurança, backups e automação de manutenção",
        "Isolamento de dependências e ambientes de desenvolvimento herméticos",
        "Gerenciamento de pacotes, dotfiles e customização de sistema"
      ],
      tags: ["NixOS", "Arch Linux", "Shell Scripting", "Bash", "DevOps", "IaC"],
      image: "assets/images/project-taskflow.jpg",
      demoUrl: "https://github.com/Felpnoo/nixos-config",
      githubUrl: "https://github.com/Felpnoo/nixos-config"
    },
    {
      id: "rpa-invoice-auditor",
      title: "Corporate RPA & Invoice Auditor Bot",
      category: "rpa",
      categoryLabel: "Automação & RPA",
      shortDesc: "Robô em Python para automação de processos corporativos, auditoria e validação de notas fiscais com Selenium e tratamento de dados.",
      fullDesc: "Solução de RPA desenhada para automatizar a leitura, conferência e auditoria de documentos e notas fiscais em portais corporativos. Reduz drasticamente erros humanos e tempo gasto em tarefas burocráticas repetitivas.",
      features: [
        "Automação de navegação e extração de dados com Selenium WebDriver",
        "Auditoria de campos obrigatórios, valores e regras de negócio",
        "Exportação de logs detalhados e relatórios consolidados",
        "Estrutura modular para integração com múltiplos portais fiscais"
      ],
      tags: ["Python", "Selenium", "RPA", "Web Scraping", "Automation", "Pandas"],
      image: "assets/images/project-fintech.jpg",
      demoUrl: "https://github.com/Felpnoo/rpa-invoice-auditor",
      githubUrl: "https://github.com/Felpnoo/rpa-invoice-auditor"
    },
    {
      id: "proplens-platform",
      title: "PropLens - Plataforma Fullstack Imobiliária",
      category: "backend",
      categoryLabel: "Fullstack & Backend",
      shortDesc: "Plataforma de gestão e apresentação de imóveis com CRM Kanban de leads, construída com FastAPI, React, TypeScript e Docker.",
      fullDesc: "Sistema completo integrando backend assíncrono de alta performance em Python (FastAPI) com frontend dinâmico e responsivo em React e TypeScript, além de esteira de conteinerização com Docker.",
      features: [
        "Backend RESTful assíncrono com FastAPI e modelagem relacional de dados",
        "Painel Kanban interativo para gerenciamento do fluxo de leads",
        "Frontend responsivo e performático em React e TypeScript",
        "Ambiente totalmente dockerizado com Docker Compose"
      ],
      tags: ["FastAPI", "Python", "React", "TypeScript", "Docker", "Kanban CRM"],
      image: "assets/images/project-aistudio.jpg",
      demoUrl: "https://github.com/Felpnoo/proplens",
      githubUrl: "https://github.com/Felpnoo/proplens"
    }
  ],

  certificates: [
    {
      id: "cert-python-fiap",
      title: "Python Development",
      institution: "FIAP",
      institutionCategory: "fiap",
      hours: "80 Horas",
      year: "2026",
      image: "assets/certificates/PythonDevelopment.png",
      badge: "FIAP Certified"
    },
    {
      id: "cert-cloud-fiap",
      title: "Cloud Fundamentals, Administration & Solution Architect",
      institution: "FIAP",
      institutionCategory: "fiap",
      hours: "80 Horas",
      year: "2026",
      image: "assets/certificates/CloudFundamentals_AdministrationandSolutionArchitect.png",
      badge: "FIAP Certified"
    },
    {
      id: "cert-devops-fiap",
      title: "DevOps & Agile Culture",
      institution: "FIAP",
      institutionCategory: "fiap",
      hours: "60 Horas",
      year: "2026",
      image: "assets/certificates/DevOps_AgileCulture.png",
      badge: "FIAP Certified"
    },
    {
      id: "cert-linux-fiap",
      title: "Linux Fundamentos & Infraestrutura",
      institution: "FIAP",
      institutionCategory: "fiap",
      hours: "60 Horas",
      year: "2026",
      image: "assets/certificates/LinuxFundamentos.png",
      badge: "FIAP Certified"
    },
    {
      id: "cert-ai-fiap",
      title: "Inteligência Artificial Responsável",
      institution: "FIAP",
      institutionCategory: "fiap",
      hours: "80 Horas",
      year: "2026",
      image: "assets/certificates/InteligenciaArtificialResponsavel.png",
      badge: "FIAP Certified"
    },
    {
      id: "cert-engsoft-fiap",
      title: "Engenharia de Software",
      institution: "FIAP",
      institutionCategory: "fiap",
      hours: "FIAP",
      year: "2026",
      image: "assets/certificates/Engenharia_de_Software.png",
      badge: "FIAP Certified"
    },
    {
      id: "cert-infra-fiap",
      title: "Gestão de Infraestrutura de TI",
      institution: "FIAP",
      institutionCategory: "fiap",
      hours: "FIAP",
      year: "2026",
      image: "assets/certificates/GestaodeInfraestruturadeTI.png",
      badge: "FIAP Certified"
    },
    {
      id: "cert-cyber-fiap",
      title: "Boas Práticas de Cibersegurança",
      institution: "FIAP",
      institutionCategory: "fiap",
      hours: "FIAP",
      year: "2026",
      image: "assets/certificates/BoasPraticasdeCiberseguranca_CybersecurityAwareness_.png",
      badge: "FIAP Certified"
    },
    {
      id: "cert-bi-fiap",
      title: "Business Intelligence (BI)",
      institution: "FIAP",
      institutionCategory: "fiap",
      hours: "FIAP",
      year: "2026",
      image: "assets/certificates/BusinessItelligence_BI_.png",
      badge: "FIAP Certified"
    },
    {
      id: "cert-java-fiap",
      title: "Java Development",
      institution: "FIAP",
      institutionCategory: "fiap",
      hours: "60 Horas",
      year: "2026",
      image: "assets/certificates/JavaDevelopment.png",
      badge: "FIAP Certified"
    },
    {
      id: "cert-python-udemy",
      title: "Complete Python Bootcamp: Do Básico ao Avançado",
      institution: "Udemy",
      institutionCategory: "udemy",
      hours: "141 Horas",
      year: "2026",
      image: "assets/certificates/CursodePython3oBasicoaoAvancado.png",
      badge: "Udemy"
    },
    {
      id: "cert-jsts-udemy",
      title: "JavaScript e TypeScript do Básico ao Avançado (JS + TS)",
      institution: "Udemy",
      institutionCategory: "udemy",
      hours: "Udemy",
      year: "2026",
      image: "assets/certificates/JavaScripteTypeScriptdoBasicoaoAvancado-JS_TS.png",
      badge: "Udemy"
    },
    {
      id: "cert-react-udemy",
      title: "React - The Complete Guide (incl. Next.js, Redux)",
      institution: "Udemy",
      institutionCategory: "udemy",
      hours: "Udemy",
      year: "2026",
      image: "assets/certificates/React-TheCompleteGuide_incl.Next.js_Redux_.png",
      badge: "Udemy"
    },
    {
      id: "cert-java-udemy",
      title: "Java COMPLETO Programação Orientada a Objetos",
      institution: "Udemy",
      institutionCategory: "udemy",
      hours: "Udemy",
      year: "2026",
      image: "assets/certificates/JavaCOMPLETOProgramacaoOrientadaaObjeto.png",
      badge: "Udemy"
    }
  ],

  experience: [
    {
      role: "IT Field Service Analyst",
      company: "SONDA",
      period: "Dez 2025 – Presente",
      points: [
        "Gestão de operações críticas de infraestrutura de TI para clientes do Fórum Cível, garantindo alta disponibilidade de sistemas.",
        "Diagnóstico e resolução de falhas de hardware e software sob ambientes de alta criticidade com estrito cumprimento de SLA.",
        "Atuação como ponto focal de suporte Nível 2 para questões complexas de infraestrutura que exigem troubleshooting avançado."
      ]
    },
    {
      role: "Instrutor de Ciência da Computação",
      company: "MEGA CURSOS",
      period: "Set 2025 – Dez 2025",
      points: [
        "Ensino de Lógica de Programação, Algoritmos e Computação Básica para turmas de diferentes faixas etárias (8 a 25 anos).",
        "Desenvolvimento de material didático próprio e exercícios práticos de programação em laboratório.",
        "Manutenção de hardware e software dos laboratórios, assegurando 100% de disponibilidade para as aulas."
      ]
    },
    {
      role: "Instrutor de Python (Projeto de Extensão)",
      company: "Universidade Estadual de Roraima (UERR)",
      period: "Set 2024 – Out 2024",
      points: [
        "Liderança do bootcamp 'Python for Beginners' voltado para a comunidade acadêmica.",
        "Elaboração do plano de ensino abordando sintaxe Python, estruturas de dados e introdução a scripts de automação.",
        "Mentoria de estudantes no desenvolvimento de seus primeiros projetos práticos de software."
      ]
    },
    {
      role: "Desenvolvedor Junior & Suporte Técnico",
      company: "SH EMPRESAS",
      period: "Abr 2023 – Set 2024",
      points: [
        "Co-desenvolvimento de ferramentas internas para equipe comercial, integrando Front-end com Back-end em Python (Django).",
        "Gerenciamento de servidores Linux e automação de rotinas de manutenção preventiva utilizando Shell Scripting (Bash).",
        "Interface técnica entre fornecedores de hardware e a equipe interna de desenvolvimento para otimização de infraestrutura."
      ]
    }
  ]
};

// ==========================================================================
// SVG ICONS
// ==========================================================================
const SVG_ICONS = {
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  python: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3l.1 1.4h3v.4H6.2S4 4.8 4 8c0 3.2 1.9 3.1 1.9 3.1h1.1V9.5c0-1.8 1.6-1.7 1.6-1.7h5.1c1.5 0 1.5-1.4 1.5-1.4V4.2c0-1.8-3.3-2.2-3.3-2.2zm-1.8 1.2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm1.9 18.8c3.1 0 2.9-1.3 2.9-1.3l-.1-1.4h-3v-.4h5.9s2.2.3 2.2-2.9c0-3.2-1.9-3.1-1.9-3.1h-1.1v1.6c0 1.8-1.6 1.7-1.6 1.7H10.2c-1.5 0-1.5 1.4-1.5 1.4v2.2c0 1.8 3.3 2.2 3.3 2.2zm1.8-1.2c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z"/></svg>`,
  ts: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3zm11.5 8h-3v7.5h-2.5V11H6V9h8.5v2zm4.5 5.5c-.5.3-1.1.5-1.8.5-1.2 0-2-.6-2-1.7 0-1.2.9-1.6 2.1-2 .9-.3 1.2-.5 1.2-.9 0-.4-.3-.6-.8-.6-.6 0-1.1.3-1.6.7L13.8 11c.8-.8 1.8-1.1 2.8-1.1 1.7 0 2.8.9 2.8 2.3 0 1-.7 1.5-1.9 1.9-.9.3-1.3.5-1.3 1 0 .4.4.7.9.7.5 0 1-.2 1.4-.5l.5 1.2z"/></svg>`,
  server: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
  database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
  cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
  git: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="6" y1="9" x2="6" y2="15"></line><path d="M9 18h3a3 3 0 0 0 3-3V9"></path></svg>`,
  docker: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.9 8.2h2.2v2.2h-2.2V8.2zm-2.8 0h2.2v2.2h-2.2V8.2zm-2.8 0h2.2v2.2H8.3V8.2zm5.6-2.8h2.2v2.2h-2.2V5.4zm-2.8 0h2.2v2.2h-2.2V5.4zm-2.8 0h2.2v2.2H8.3V5.4zm8.4 2.8h2.2v2.2h-2.2V8.2zM23.5 12c-.4-.3-1.5-.4-2.3.2-.2-1.3-1.2-2.1-2.2-2.1-.2 0-.4 0-.6.1V8.2c0-.5-.4-.9-.9-.9H5.5c-.5 0-.9.4-.9.9v2.8c-1.6.4-2.8 1.9-2.8 3.7 0 2.6 2.1 4.7 4.7 4.7h12c4 0 5-3.3 5-4.4 0-1.2-.6-2.3-1.5-2.9z"/></svg>`,
  tool: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`
};

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderProfileData();
  renderSkills("all");
  renderProjects("all", "");
  renderCertificates("all");
  renderExperience();
  initTypewriter();
  initEventListeners();
  initScrollSpy();
});

// ==========================================================================
// THEME MANAGEMENT
// ==========================================================================
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const storedTheme = localStorage.getItem("site-theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = storedTheme || (systemPrefersDark ? "dark" : "light");

  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      showToast(`Modo ${newTheme === 'dark' ? 'Escuro' : 'Claro'} ativado!`);
    });
  }

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("site-theme")) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("site-theme", theme);
  
  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
  if (metaColorScheme) metaColorScheme.content = theme;

  const iconSun = document.getElementById("theme-icon-sun");
  const iconMoon = document.getElementById("theme-icon-moon");

  if (iconSun && iconMoon) {
    if (theme === "dark") {
      iconSun.style.display = "block";
      iconMoon.style.display = "none";
    } else {
      iconSun.style.display = "none";
      iconMoon.style.display = "block";
    }
  }
}

// ==========================================================================
// RENDER PROFILE DATA
// ==========================================================================
function renderProfileData() {
  const p = PORTFOLIO_DATA.personal;

  document.querySelectorAll(".dyn-name").forEach(el => el.textContent = p.name);
  
  const heroBioEl = document.getElementById("hero-bio");
  if (heroBioEl) heroBioEl.textContent = p.bioIntro;

  const aboutDescEl = document.getElementById("about-description");
  if (aboutDescEl) aboutDescEl.textContent = p.bioDescription;

  // CV Download Links
  document.querySelectorAll(".dyn-cv-link").forEach(el => {
    el.href = p.cvDownloadUrl;
    el.setAttribute("target", "_blank");
  });

  // Social URLs
  const ghLink = document.getElementById("hero-github-link");
  if (ghLink) ghLink.href = p.githubUrl;

  const inLink = document.getElementById("hero-linkedin-link");
  if (inLink) inLink.href = p.linkedinUrl;

  // Stats
  const statsContainer = document.getElementById("hero-stats-container");
  if (statsContainer) {
    statsContainer.innerHTML = p.stats.map(s => `
      <div class="stat-item">
        <span class="stat-number">${s.number}</span>
        <span class="stat-label">${s.label}</span>
      </div>
    `).join("");
  }
}

// ==========================================================================
// TYPEWRITER EFFECT
// ==========================================================================
function initTypewriter() {
  const textEl = document.getElementById("typewriter-text");
  if (!textEl) return;

  const roles = PORTFOLIO_DATA.personal.typingRoles;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      textEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 40;
    } else {
      textEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingDelay = 1800;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingDelay = 400;
    }

    setTimeout(type, typingDelay);
  }

  type();
}

// ==========================================================================
// RENDER SKILLS
// ==========================================================================
function renderSkills(selectedCategory = "all") {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  const filtered = selectedCategory === "all"
    ? PORTFOLIO_DATA.skills
    : PORTFOLIO_DATA.skills.filter(s => s.category === selectedCategory);

  container.innerHTML = filtered.map(skill => `
    <div class="skill-card">
      <div class="skill-icon-wrapper">
        ${SVG_ICONS[skill.icon] || SVG_ICONS.code}
      </div>
      <h3 class="skill-name">${skill.name}</h3>
      <span class="skill-category">${skill.level}</span>
    </div>
  `).join("");
}

// ==========================================================================
// RENDER PROJECTS & SEARCH/FILTER
// ==========================================================================
let currentProjectCategory = "all";
let currentSearchQuery = "";

function renderProjects(category = currentProjectCategory, query = currentSearchQuery) {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  currentProjectCategory = category;
  currentSearchQuery = query.toLowerCase().trim();

  let filtered = PORTFOLIO_DATA.projects;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (currentSearchQuery) {
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(currentSearchQuery) ||
      p.shortDesc.toLowerCase().includes(currentSearchQuery) ||
      p.tags.some(t => t.toLowerCase().includes(currentSearchQuery))
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <p style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">Nenhum projeto encontrado</p>
        <p style="font-size: 0.95rem;">Tente ajustar sua busca ou selecionar outra categoria.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(proj => `
    <article class="project-card" data-id="${proj.id}">
      <div class="project-image-container">
        <img src="${proj.image}" alt="Mockup de ${proj.title}" loading="lazy">
        <span class="project-badge">${proj.categoryLabel}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.shortDesc}</p>
        <div class="project-tags">
          ${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
        </div>
        <div class="project-actions">
          <button class="btn btn-primary btn-sm open-project-modal-btn" data-id="${proj.id}">
            Ver Detalhes
          </button>
          <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="Abrir repositório de ${proj.title}">
            GitHub
          </a>
        </div>
      </div>
    </article>
  `).join("");

  container.querySelectorAll(".open-project-modal-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const projId = btn.getAttribute("data-id");
      openProjectModal(projId);
    });
  });
}

// ==========================================================================
// RENDER CERTIFICATES
// ==========================================================================
function renderCertificates(selectedInstitution = "all") {
  const container = document.getElementById("certificates-grid");
  if (!container) return;

  const filtered = selectedInstitution === "all"
    ? PORTFOLIO_DATA.certificates
    : PORTFOLIO_DATA.certificates.filter(c => c.institutionCategory === selectedInstitution);

  container.innerHTML = filtered.map(cert => `
    <div class="certificate-card" data-id="${cert.id}">
      <div class="cert-image-preview">
        <img src="${cert.image}" alt="${cert.title}" loading="lazy">
        <div class="cert-overlay">
          <button class="btn btn-primary btn-sm view-cert-btn" data-img="${cert.image}" data-title="${cert.title}" data-inst="${cert.institution}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Visualizar Certificado
          </button>
        </div>
      </div>
      <div class="cert-info">
        <div class="cert-meta">
          <span class="cert-badge">${cert.institution}</span>
          <span class="cert-hours">${cert.hours}</span>
        </div>
        <h3 class="cert-title">${cert.title}</h3>
      </div>
    </div>
  `).join("");

  container.querySelectorAll(".certificate-card").forEach(card => {
    card.addEventListener("click", () => {
      const btn = card.querySelector(".view-cert-btn");
      if (btn) {
        const img = btn.getAttribute("data-img");
        const title = btn.getAttribute("data-title");
        const inst = btn.getAttribute("data-inst");
        openCertModal(img, title, inst);
      }
    });
  });
}

function openCertModal(imgSrc, title, inst) {
  const modal = document.getElementById("cert-modal");
  const modalImg = document.getElementById("cert-modal-img");
  const modalTitle = document.getElementById("cert-modal-title");
  const modalInst = document.getElementById("cert-modal-inst");

  if (!modal) return;
  if (modalImg) modalImg.src = imgSrc;
  if (modalTitle) modalTitle.textContent = title;
  if (modalInst) modalInst.textContent = inst;

  modal.showModal();
}

// ==========================================================================
// PROJECT DETAILS MODAL (<dialog>)
// ==========================================================================
function openProjectModal(projectId) {
  const modal = document.getElementById("project-modal");
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!modal || !project) return;

  const modalTitle = document.getElementById("modal-project-title");
  const modalBadge = document.getElementById("modal-project-badge");
  const modalImg = document.getElementById("modal-project-img");
  const modalDesc = document.getElementById("modal-project-desc");
  const modalFeatures = document.getElementById("modal-project-features");
  const modalTags = document.getElementById("modal-project-tags");
  const modalGithubLink = document.getElementById("modal-github-link");

  if (modalTitle) modalTitle.textContent = project.title;
  if (modalBadge) modalBadge.textContent = project.categoryLabel;
  if (modalImg) {
    modalImg.src = project.image;
    modalImg.alt = project.title;
  }
  if (modalDesc) modalDesc.textContent = project.fullDesc;
  
  if (modalFeatures) {
    modalFeatures.innerHTML = project.features.map(f => `<li>${f}</li>`).join("");
  }

  if (modalTags) {
    modalTags.innerHTML = project.tags.map(t => `<span class="project-tag">${t}</span>`).join("");
  }

  if (modalGithubLink) modalGithubLink.href = project.githubUrl;

  modal.showModal();
}

// ==========================================================================
// RENDER EXPERIENCE TIMELINE
// ==========================================================================
function renderExperience() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-role">${exp.role}</h3>
            <span class="timeline-company">${exp.company}</span>
          </div>
          <span class="timeline-period">${exp.period}</span>
        </div>
        <ul class="timeline-points">
          ${exp.points.map(pt => `<li>${pt}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}

// ==========================================================================
// EVENT LISTENERS & INTERACTIONS
// ==========================================================================
function initEventListeners() {
  // Skills filter buttons
  document.querySelectorAll(".skill-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".skill-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderSkills(btn.getAttribute("data-category"));
    });
  });

  // Projects filter buttons
  document.querySelectorAll(".project-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".project-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.getAttribute("data-category"), currentSearchQuery);
    });
  });

  // Certificates filter buttons
  document.querySelectorAll(".cert-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cert-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCertificates(btn.getAttribute("data-institution"));
    });
  });

  // Projects search input
  const searchInput = document.getElementById("projects-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderProjects(currentProjectCategory, e.target.value);
    });
  }

  // Project Modal close
  const modal = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  if (modal && modalCloseBtn) {
    modalCloseBtn.addEventListener("click", () => modal.close());
    modal.addEventListener("click", (e) => {
      const dim = modal.getBoundingClientRect();
      if (
        e.clientX < dim.left || e.clientX > dim.right ||
        e.clientY < dim.top || e.clientY > dim.bottom
      ) {
        modal.close();
      }
    });
  }

  // Certificate Modal close
  const certModal = document.getElementById("cert-modal");
  const certModalCloseBtn = document.getElementById("cert-modal-close-btn");
  if (certModal && certModalCloseBtn) {
    certModalCloseBtn.addEventListener("click", () => certModal.close());
    certModal.addEventListener("click", (e) => {
      const dim = certModal.getBoundingClientRect();
      if (
        e.clientX < dim.left || e.clientX > dim.right ||
        e.clientY < dim.top || e.clientY > dim.bottom
      ) {
        certModal.close();
      }
    });
  }

  // Mobile menu toggle
  const mobileNavToggle = document.getElementById("mobile-nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => navMenu.classList.remove("open"));
    });
  }

  // Copy Email
  document.querySelectorAll(".copy-email-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email)
        .then(() => showToast("E-mail copiado para a área de transferência!"))
        .catch(() => showToast("Erro ao copiar e-mail."));
    });
  });

  // Contact Form
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Enviando...</span>`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        showToast("Mensagem enviada com sucesso! Entrarei em contato em breve.", "success");
      }, 1000);
    });
  }

  // Header scroll
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".site-header");
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });

  // Year
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// ==========================================================================
// SCROLL SPY
// ==========================================================================
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, {
    rootMargin: "-20% 0px -70% 0px"
  });

  sections.forEach(sec => observer.observe(sec));
}

// ==========================================================================
// TOAST NOTIFICATIONS
// ==========================================================================
function showToast(message, type = "info") {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type === 'success' ? 'toast-success' : ''}`;
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

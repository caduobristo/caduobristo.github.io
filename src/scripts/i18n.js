export const translations = {
  pt: {
    navAbout: "Sobre mim",
    navProjects: "Projetos",
    navContact: "Contato",
    heroGreeting: "Olá, meu nome é",
    heroRole: "Desenvolvedor de Software & Cientista de Dados.",
    heroCta: "Saiba mais",
    aboutTitle: "Sobre mim",
    aboutP1:
      "Sou desenvolvedor de software com forte atuação em Data Science e Engenharia de Dados. Trabalho na interseção entre Inteligência Artificial, processamento de dados complexos e a construção de produtos digitais. No mercado corporativo, desenvolvo agentes de IA e utilitários integrados ao ecossistema Linux, traduzindo modelos avançados e pipelines técnicos em soluções escaláveis e acessíveis para o usuário final. Minha base tecnológica é estruturada em Python, PyTorch, SQL e ferramentas de orquestração de dados (como Airflow), unindo o rigor analítico e a modelagem de dados às melhores práticas de engenharia de software para resolver problemas reais de negócio.",
    aboutP2:
      "Busco impulsionar produtos e negócios através da Ciência e Engenharia de Dados, sempre explorando novas tecnologias. Fora do código, minhas paixões se dividem entre jogos, boa música e um bom livro.",
    projectsTitle: "Projetos",
    p1Title: "Transformers de áudio para classificação de efeitos de guitarra",
    p1Subtitle: "Trabalho de Conclusão de Curso",
    p1Desc:
      "Pesquisa acadêmica focada na classificação de sinais de áudio complexos utilizando arquiteturas modernas de Deep Learning. O projeto estabelece baselines rigorosos com redes convolucionais e avalia o desempenho e a eficiência computacional de Transformers de Áudio na extração de características de espectrogramas.",
    p2Title: "Análise de acessibilidade urbana com visão computacional",
    p2Subtitle: "Projeto de Extensão em parceria com o IPPUC",
    p2Desc:
      "Pipeline de visão computacional desenvolvido para avaliar a qualidade e a tipologia da infraestrutura de calçadas. O sistema processa recortes de panoramas de rua e utiliza modelos de visão fine-tunados para identificar defeitos de pavimentação, apoiando o planejamento urbano orientado a dados.",
    p3Title: "Music Charts Platform",
    p3Subtitle: "Projeto Pessoal",
    p3Desc:
      "Plataforma ponta a ponta de engenharia de dados para ingestão, processamento e análise de tendências musicais. O fluxo automatiza o web scraping, enriquece as faixas com features de áudio de APIs externas e orquestra as transformações diárias para um banco de dados analítico de forma escalável.",
    stackTitle: "Stack & Tecnologias:",
    audioTransformers: "Áudio Transformers",
    signalProcessing: "Processamento de Sinais",
    imageProcessing: "Tratamento de Imagens",
    mappingApis: "Integração de APIs de Mapeamento",
    dataModeling: "Modelagem de Dados",
    viewDetails: "Ver Detalhes",
    contactTitle: "Contato",
    contactText: "Gostaria de entrar em contato comigo?",
    contactCta: "Enviar E-mail",
    footerCredit: "Template desenvolvido por",
    metaTitle: "Carlos Eduardo Obristo | Desenvolvedor",
    metaDesc: "Portfólio pessoal de Carlos Eduardo Obristo | Desenvolvedor",
    profileAlt: "Foto de Perfil",
    projectAlt: "Imagem do Projeto",
  },
  en: {
    navAbout: "About me",
    navProjects: "Projects",
    navContact: "Contact",
    heroGreeting: "Hi, my name is",
    heroRole: "Software Developer & Data Scientist.",
    heroCta: "Learn more",
    aboutTitle: "About me",
    aboutP1:
      "I am a software developer with a strong focus on Data Science and Data Engineering. I work at the intersection of Artificial Intelligence, complex data processing, and digital product engineering. In the corporate landscape, I develop AI agents and tools integrated into the Linux ecosystem, translating advanced models and technical pipelines into scalable, accessible end-user solutions. My tech foundation is built on Python, PyTorch, SQL, and data orchestration tools (such as Airflow), blending analytical rigor and data modeling with software engineering best practices to solve real business challenges.",
    aboutP2:
      "I aim to empower products and businesses through Data Science and Engineering, always exploring emerging technologies. Outside of code, my passions are split between gaming, good music, and a good book.",
    projectsTitle: "Projects",
    p1Title: "Audio Transformers for Guitar Effect Classification",
    p1Subtitle: "Bachelor's Thesis",
    p1Desc:
      "Academic research focused on classifying complex audio signals using modern Deep Learning architectures. The project establishes rigorous baselines with convolutional networks and evaluates the performance and computational efficiency of Audio Transformers in spectrogram feature extraction.",
    p2Title: "Urban Accessibility Analysis with Computer Vision",
    p2Subtitle: "Extension Project in partnership with IPPUC",
    p2Desc:
      "Computer vision pipeline developed to evaluate the quality and typology of sidewalk infrastructure. The system processes street-view panorama cutouts and uses fine-tuned vision models to detect pavement distress, empowering data-driven urban planning.",
    p3Title: "Music Charts Platform",
    p3Subtitle: "Personal Project",
    p3Desc:
      "End-to-end data engineering platform for ingesting, processing, and analyzing music trends. The pipeline automates web scraping, enriches tracks with audio features from external APIs, and orchestrates daily transformations into an analytical database at scale.",
    stackTitle: "Stack & Technologies:",
    audioTransformers: "Audio Transformers",
    signalProcessing: "Signal Processing",
    imageProcessing: "Image Processing",
    mappingApis: "Mapping APIs Integration",
    dataModeling: "Data Modeling",
    viewDetails: "View Details",
    contactTitle: "Contact",
    contactText: "Would you like to get in touch with me?",
    contactCta: "Send Email",
    footerCredit: "Template developed by",
    metaTitle: "Carlos Eduardo Obristo | Developer",
    metaDesc: "Carlos Eduardo Obristo's personal portfolio | Developer",
    profileAlt: "Profile Photo",
    projectAlt: "Project Preview",
  },
};

export function setLanguage(lang) {
  if (!translations[lang]) return;

  const dict = translations[lang];

  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  if (dict.metaTitle) {
    document.title = dict.metaTitle;
  }

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict.metaDesc) {
    metaDesc.setAttribute("content", dict.metaDesc);
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key]) {
      el.setAttribute("alt", dict[key]);
    }
  });

  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    const btnLang = btn.getAttribute("data-lang");
    if (btnLang === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  try {
    localStorage.setItem("preferred_lang", lang);
  } catch (e) {
    // ignore storage restrictions
  }
}

export default function initI18n() {
  let savedLang = null;
  try {
    savedLang = localStorage.getItem("preferred_lang");
  } catch (e) {
    // ignore storage restrictions
  }

  const initialLang =
    savedLang && translations[savedLang]
      ? savedLang
      : navigator.language && navigator.language.startsWith("pt")
      ? "pt"
      : "en";

  setLanguage(initialLang);

  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      if (selectedLang) {
        setLanguage(selectedLang);
      }
    });
  });
}

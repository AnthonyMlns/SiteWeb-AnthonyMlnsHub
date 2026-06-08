export type Lang = "fr" | "en";

type LinkItem = {
  title: string;
  desc: string;
};

export type LinkGroup = {
  label: string;
  items: LinkItem[];
};

export type ProjectItem = {
  title: string;
  desc: string;
};

export type Translations = {
  header: {
    title: string;
    subtitle: string;
    location: string;
    email: string;
  };
  skills: {
    label: string;
    items: string[];
  };
  getInTouch: string;
  projects: {
    label: string;
    items: ProjectItem[];
  };
  linkGroups: LinkGroup[];
  newsletter: {
    label: string;
    placeholder: string;
    button: string;
  };
  footer: string;
};

const translations: Record<Lang, Translations> = {
  fr: {
    header: {
      title: "Anthony Milans",
      subtitle: "Chef de Projet Digital | IA & Automatisation · Project Ops & Delivery",
      location: "Montpellier, FR",
      email: "milans.antony@gmail.com",
    },
    skills: {
      label: "Compétences",
      items: ["Claude Code", "n8n", "Next.js", "Sanity CMS", "GitHub CI/CD", "Python", "FastAPI", "SEO"],
    },
    getInTouch: "Me contacter",
    projects: {
      label: "Projets",
      items: [
        { title: "SEO Writer", desc: "Pipeline agentisé de création de contenus web avec opencode" },
        { title: "Website Builder", desc: "Pipeline agentisé de création de sites web avec opencode" },
      ],
    },
    linkGroups: [
      {
        label: "Perso",
        items: [
          { title: "AH Milans Gallery", desc: "Galerie d'art contemporain en ligne" },
          { title: "Kairos Digital", desc: "Conseil IA pour TPE/PME et indépendants" },
        ],
      },
      {
        label: "Pro",
        items: [
          { title: "LinkedIn", desc: "Mon profil professionnel" },
          { title: "CV - Télécharger", desc: "Mon CV complet au format PDF" },
          { title: "GitHub", desc: "Mes projets et repos" },
        ],
      },
    ],
    newsletter: {
      label: "Newsletter",
      placeholder: "email@nom.com",
      button: "S'inscrire",
    },
    footer: "© {year} Anthony Milans",
  },
  en: {
    header: {
      title: "Anthony Milans",
      subtitle: "Digital Project Manager | AI & Automation · Project Ops & Delivery",
      location: "Montpellier, FR",
      email: "milans.antony@gmail.com",
    },
    skills: {
      label: "Skills",
      items: ["Claude Code", "n8n", "Next.js", "Sanity CMS", "GitHub CI/CD", "Python", "FastAPI", "SEO"],
    },
    getInTouch: "Get in touch",
    projects: {
      label: "Projects",
      items: [
        { title: "SEO Writer", desc: "Agentic pipeline for web content creation with opencode" },
        { title: "Website Builder", desc: "Agentic pipeline for website creation with opencode" },
      ],
    },
    linkGroups: [
      {
        label: "Personal",
        items: [
          { title: "AH Milans Gallery", desc: "Contemporary art gallery online" },
          { title: "Kairos Digital", desc: "AI consulting for SMBs and freelancers" },
        ],
      },
      {
        label: "Professional",
        items: [
          { title: "LinkedIn", desc: "My professional profile" },
          { title: "CV - Download", desc: "My full CV as PDF" },
          { title: "GitHub", desc: "My projects and repos" },
        ],
      },
    ],
    newsletter: {
      label: "Newsletter",
      placeholder: "email@name.com",
      button: "Sign Up",
    },
    footer: "© {year} Anthony Milans",
  },
};

export function getTranslations(lang: Lang): Translations {
  return translations[lang];
}

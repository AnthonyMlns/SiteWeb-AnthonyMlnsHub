export type TextEntry = {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  desc: string;
  year: string;
};

export const texts: TextEntry[] = [
  {
    slug: "avignon",
    title: "Avignon",
    subtitle: "Carnets Classiques",
    author: "Anthony Milans",
    desc: "Carnets Classiques — Avignon",
    year: "2025",
  },
  {
    slug: "un-auteur-classique",
    title: "Un Auteur Classique",
    subtitle: "Carnets Classiques",
    author: "Anthony Milans",
    desc: "Carnets Classiques — Un Auteur Classique",
    year: "2025",
  },
  {
    slug: "nocturnes",
    title: "Nocturnes",
    subtitle: "Carnets Classiques",
    author: "Anthony Milans",
    desc: "Carnets Classiques — Nocturnes",
    year: "2025",
  },
];

export function getTextBySlug(slug: string): TextEntry | undefined {
  return texts.find((t) => t.slug === slug);
}

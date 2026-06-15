export type TextEntry = {
  slug: string;
  title: string;
  desc: string;
  year: string;
};

export const texts: TextEntry[] = [
  {
    slug: "avignon",
    title: "Carnets Classiques — Avignon",
    desc: "Carnets Classiques — Avignon",
    year: "2025",
  },
  {
    slug: "un-auteur-classique",
    title: "Carnets Classiques — Un Auteur Classique",
    desc: "Carnets Classiques — Un Auteur Classique",
    year: "2025",
  },
];

export function getTextBySlug(slug: string): TextEntry | undefined {
  return texts.find((t) => t.slug === slug);
}

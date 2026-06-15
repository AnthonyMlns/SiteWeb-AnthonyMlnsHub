"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { getTextBySlug } from "@/lib/texts";
import Markdown from "react-markdown";

export default function TextPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { t } = useLanguage();
  const text = getTextBySlug(slug);
  const [md, setMd] = useState("");

  useEffect(() => {
    fetch(`/textes/${slug}.md`)
      .then((res) => res.text())
      .then(setMd)
      .catch(() => setMd("*Texte non trouvé*"));
  }, [slug]);

  if (!text) {
    return (
      <main data-page="faceab" style={{ padding: "var(--page-pad-y) var(--page-pad-x)", maxWidth: 620, margin: "0 auto" }}>
        <p className="ab-empty">Texte introuvable</p>
        <Link href="/facea-faceb" className="ab-nav__link">← Retour</Link>
      </main>
    );
  }

  return (
    <main
      data-page="faceab"
      data-page-view="text"
      style={{
        padding: "var(--page-pad-y) var(--page-pad-x)",
        maxWidth: 620,
        margin: "0 auto",
      }}
    >
      <nav className="ab-nav">
        <Link href="/facea-faceb" className="ab-nav__link">← {t.faceab.directory}</Link>
      </nav>

      <header className="ab-header">
        <h1 className="ab-text-title">{text.title}</h1>
        <div className="ab-text-meta">
          <span>{text.year}</span>
          <a href={`/textes/${slug}.pdf`} download className="ab-text-dl">
            ↓ PDF
          </a>
        </div>
      </header>

      <hr className="ab-rule" />

      <div className="ab-md-body">
        <Markdown>{md}</Markdown>
      </div>
    </main>
  );
}

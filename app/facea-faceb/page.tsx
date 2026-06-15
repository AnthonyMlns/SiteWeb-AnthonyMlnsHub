"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import { texts } from "@/lib/texts";

export default function FaceAB() {
  const { t } = useLanguage();

  return (
    <main
      data-page="faceab"
      style={{
        padding: "var(--page-pad-y) var(--page-pad-x)",
        maxWidth: 520,
        margin: "0 auto",
      }}
    >
      <nav className="ab-nav">
        <Link href="/" className="ab-nav__link">← {t.header.title}</Link>
      </nav>

      <div className="ab-lang">
        <LanguageToggle />
      </div>

      <header className="ab-header">
        <h1 className="ab-title">
          <span>FaceA</span>
          <span className="ab-title__sep">/</span>
          <span>FaceB</span>
        </h1>
        <p className="ab-subtitle">{t.faceab.subtitle}</p>
      </header>

      <hr className="ab-rule" />

      <section className="ab-directory">
        <h2 className="ab-directory__label">{t.faceab.directory}</h2>
        {texts.map((text) => (
          <Link key={text.slug} href={`/facea-faceb/${text.slug}`} className="ab-entry">
            <span className="ab-entry__title">{text.title}</span>
            <span className="ab-entry__year">{text.year}</span>
            <span className="ab-entry__arrow">→</span>
          </Link>
        ))}
      </section>

      <hr className="ab-rule" />

      <footer className="ab-footer">
        <span>© {new Date().getFullYear()} Anthony Milans</span>
      </footer>
    </main>
  );
}

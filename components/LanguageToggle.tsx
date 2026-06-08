"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: "var(--sp-8)" }}>
      <div style={{ display: "inline-flex", gap: 2 }}>
        <button
          onClick={() => setLang("fr")}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-xs)",
            fontWeight: lang === "fr" ? 600 : 400,
            padding: 0,
            border: "none",
            cursor: "pointer",
            background: "transparent",
            color: lang === "fr" ? "var(--ink)" : "var(--whisper)",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          fr
        </button>
        <span style={{ color: "var(--border)", fontSize: "var(--text-xs)" }}>/</span>
        <button
          onClick={() => setLang("en")}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-xs)",
            fontWeight: lang === "en" ? 600 : 400,
            padding: 0,
            border: "none",
            cursor: "pointer",
            background: "transparent",
            color: lang === "en" ? "var(--ink)" : "var(--whisper)",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          en
        </button>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import Tags from "@/components/Tags";
import LanguageToggle from "@/components/LanguageToggle";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const linkHrefs: Record<string, string> = {
  "FaceA/FaceB": "/facea-faceb",
  "Portfolio": "/portfolio",
  "AH Milans Gallery": "https://ahmilans.gallery",
  "Kairos Digital": "https://kairos-digital.com",
  "LinkedIn": "https://linkedin.com/in/anthonymlns",
  "CV - Télécharger": "/CV_Anthony_Milans_2026.pdf",
  "CV - Download": "/CV_Anthony_Milans_2026.pdf",
  "GitHub": "https://github.com/AnthonyMlns",
  "SEO Writer": "https://github.com/AnthonyMlns/AgentIA-SEOWriter",
  "Website Builder": "https://github.com/AnthonyMlns/AgentIA-WebsiteBuilder",
};

export default function Home() {
  const { t } = useLanguage();

  return (
    <main
      style={{
        padding: "var(--page-pad-y) var(--page-pad-x)",
        maxWidth: 430,
        margin: "0 auto",
      }}
    >
      <LanguageToggle />

      {/* Header */}
      <div className="c-header">
        <h1 className="c-header__title">
          <span className="c-header__first">Anthony</span>{" "}
          <span className="c-header__last">Milans</span>
        </h1>
        <div className="c-header__sub">{t.header.subtitle}</div>
        <div className="c-header__tagline">{t.header.tagline}</div>
        <div className="c-header__ethos">
          {t.header.ethos.map((tag) => (
            <span key={tag} className="c-tag">{tag}</span>
          ))}
        </div>
        <div className="c-header__contact">
          <span>{t.header.location}</span>
        </div>
      </div>

      {/* Get in touch */}
      <div className="c-cta">
        <div className="c-cta__title">{t.getInTouch}</div>
        <div className="c-social">
          <a href="https://www.instagram.com/anthonymlns/" target="_blank" rel="noopener noreferrer" className="c-social__link" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/in/anthonymlns/" target="_blank" rel="noopener noreferrer" className="c-social__link" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/AnthonyMlns" target="_blank" rel="noopener noreferrer" className="c-social__link" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href="mailto:milans.antony@gmail.com" className="c-social__link" aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </div>

      {/* Links — Perso */}
      <div className="c-card">
        <div className="c-section-label c-section-label--blue">{t.linkGroups[0].label}</div>
        {t.linkGroups[0].items.map((link) => {
          const href = linkHrefs[link.title] || "#";
          const isInternal = href.startsWith("/");
          return isInternal ? (
            <Link key={link.title} href={href} className="c-link-item">
              <div>
                <div className="c-link-item__title">{link.title}</div>
                <div className="c-link-item__desc">{link.desc}</div>
              </div>
              <span className="c-link-item__arrow">→</span>
            </Link>
          ) : (
            <a
              key={link.title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="c-link-item"
            >
              <div>
                <div className="c-link-item__title">{link.title}</div>
                <div className="c-link-item__desc">{link.desc}</div>
              </div>
              <span className="c-link-item__arrow">→</span>
            </a>
          );
        })}
      </div>

      {/* FaceA/FaceB — Textes à l'affiche */}
      <div className="c-card c-card--accent-blue">
        <div className="c-section-label">{t.faceabFeatured.label}</div>
        {t.faceabFeatured.items.map((item) => (
          <Link key={item.title} href="/facea-faceb" className="c-link-item">
            <div>
              <div className="c-link-item__title">{item.title}</div>
              <div className="c-link-item__desc">{item.desc}</div>
            </div>
            <span className="c-link-item__arrow">→</span>
          </Link>
        ))}
      </div>

      <hr className="c-sep" />

      {/* Links — Pro */}
      <div className="c-card">
        <div className="c-section-label c-section-label--red">{t.linkGroups[1].label}</div>
        {t.linkGroups[1].items.map((link) => (
          <a
            key={link.title}
            href={linkHrefs[link.title] || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="c-link-item"
          >
            <div>
              <div className="c-link-item__title">{link.title}</div>
              <div className="c-link-item__desc">{link.desc}</div>
            </div>
            <span className="c-link-item__arrow">→</span>
          </a>
        ))}
        <div style={{ height: "var(--sp-5)" }} />
        <div className="c-section-label">{t.skills.label}</div>
        <Tags items={t.skills.items} variant="tech" />
      </div>

      {/* Projects */}
      <div className="c-card c-card--accent">
        <div className="c-section-label">{t.projects.label}</div>
        {t.projects.items.map((project) => (
          <a
            key={project.title}
            href={linkHrefs[project.title] || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="c-link-item c-link-item--accent"
          >
            <div>
              <div className="c-link-item__title">{project.title}</div>
              <div className="c-link-item__desc">{project.desc}</div>
            </div>
            <span className="c-link-item__arrow">→</span>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="c-footer">
        <span>{t.footer.replace("{year}", String(new Date().getFullYear()))}</span>
        <span className="c-footer__sub">Built with Next.js</span>
      </div>
    </main>
  );
}

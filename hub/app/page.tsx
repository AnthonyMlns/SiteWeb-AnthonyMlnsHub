const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-4">
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p className="text-white font-semibold text-sm mb-3">{children}</p>
      <div className="border-t border-[#2a2a2a] mb-4" />
    </>
  );
}

function CategoryLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#555] text-[10px] uppercase tracking-widest mb-2 mt-4 first:mt-0">
      {children}
    </p>
  );
}

type LinkItemProps = {
  href: string;
  icon: string;
  title: string;
  description: string;
  iconBg?: string;
};

function LinkItem({ href, icon, title, description, iconBg = "#2d2d2d" }: LinkItemProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-[#252525] rounded-xl p-3 mb-2 last:mb-0 hover:bg-[#2e2e2e] transition-colors cursor-pointer"
    >
      <div
        className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-xl"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[#a78bfa] font-medium text-sm leading-tight">{title}</p>
        <p className="text-[#6b7280] text-xs mt-0.5 leading-tight">{description}</p>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141414] flex justify-center">
      <div className="w-full max-w-[430px] px-4 py-6 flex flex-col gap-3">

        {/* Profile */}
        <Card>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-[#2d2d2d] flex-shrink-0" />
            <div>
              <h1 className="text-white font-bold text-xl leading-tight">Anthony Milans</h1>
              <p className="text-[#a78bfa] text-sm mt-0.5">Creator of some cool things</p>
              <p className="text-[#555] text-sm mt-0.5">Montpellier, FR</p>
            </div>
          </div>
          <div className="bg-[#141414] rounded-xl px-4 py-2.5 text-center text-[#666] text-sm">
            milans.antony@gmail.com
          </div>
        </Card>

        {/* Get in touch */}
        <Card>
          <SectionTitle>Get in touch</SectionTitle>
          <div className="flex gap-3">
            <a
              href="https://github.com/milans-antony"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#252525] flex items-center justify-center text-[#888] hover:text-white hover:bg-[#2e2e2e] transition-colors"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#252525] flex items-center justify-center text-[#888] hover:text-white hover:bg-[#2e2e2e] transition-colors"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://linkedin.com/in/anthony-milans"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#252525] flex items-center justify-center text-[#888] hover:text-white hover:bg-[#2e2e2e] transition-colors"
            >
              <LinkedInIcon />
            </a>
          </div>
        </Card>

        {/* Links */}
        <Card>
          <SectionTitle>Links</SectionTitle>

          <CategoryLabel>Site principal</CategoryLabel>
          <LinkItem
            href="#"
            icon="🌐"
            iconBg="#1a2a1a"
            title="Mon site principal"
            description="Retrouvez l'ensemble de mon univers et de mes projets."
          />

          <CategoryLabel>CV & Documents</CategoryLabel>
          <LinkItem
            href="#"
            icon="📄"
            iconBg="#1a1a2a"
            title="CV — Version PDF"
            description="Télécharger mon CV complet au format PDF."
          />
          <LinkItem
            href="#"
            icon="🖥️"
            iconBg="#1a1a2a"
            title="CV — Version en ligne"
            description="Consulter mon CV directement dans le navigateur."
          />

          <CategoryLabel>Écrits</CategoryLabel>
          <LinkItem
            href="#"
            icon="📝"
            iconBg="#2a1a1a"
            title="Textes — Version PDF"
            description="Télécharger mes textes et articles au format PDF."
          />
          <LinkItem
            href="#"
            icon="📖"
            iconBg="#2a1a1a"
            title="Textes — Version en ligne"
            description="Lire mes écrits directement sur mobile."
          />

          <CategoryLabel>Projets GitHub</CategoryLabel>
          <LinkItem
            href="#"
            icon="⚡"
            iconBg="#2a2a1a"
            title="Projet 1"
            description="Description courte du projet GitHub."
          />
          <LinkItem
            href="#"
            icon="🔧"
            iconBg="#2a2a1a"
            title="Projet 2"
            description="Description courte du projet GitHub."
          />
        </Card>

        {/* Footer */}
        <p className="text-center text-[#333] text-xs py-2">
          © {new Date().getFullYear()} Anthony Milans
        </p>

      </div>
    </main>
  );
}

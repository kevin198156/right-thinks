import { useState } from 'react';
import { ExternalLink, Menu, X } from 'lucide-react';
import logoMain from '@/assets/logo-main.png';

const navLinks = [
  { label: '關於睿思', href: '#about' },
  { label: '服務項目', href: '#services' },
  { label: '企業 ESG', href: '#service-flows' },
  { label: '合作機構', href: '#partners' },
  { label: '聯絡我們', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="section-container h-20 flex items-center justify-between">
        <a href="#" className="shrink-0">
          <img src={logoMain} alt="睿思健康服務中心" className="h-12 w-auto" />
        </a>

        <div className="hidden lg:flex items-center gap-8 text-muted-foreground font-medium text-base">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/rightthinks1122/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
          >
            睿思 FB (最新活動) <ExternalLink size={14} />
          </a>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-card border-t border-border px-6 pb-6 space-y-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2 text-foreground font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.facebook.com/rightthinks1122/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold sm:hidden"
          >
            睿思 FB (最新活動) <ExternalLink size={14} />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { Heart, Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/crud-engr", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/olamilekan-a-b63b3315a/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/crud_engr", label: "Twitter" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border overflow-hidden">
      {/* CRUD watermark with blur */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[8rem] sm:text-[12rem] lg:text-[16rem] font-heading font-bold text-foreground/[0.03] blur-[1px] tracking-widest">
          CRUD
        </span>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 text-center sm:text-left">
          <p className="text-sm text-muted-foreground order-2 sm:order-1">
            © {currentYear} CRUD. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-4 order-1 sm:order-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground flex items-center justify-center sm:justify-end gap-1.5 order-3">
            Built by CRUD with <Heart size={14} className="text-primary shrink-0" /> and code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

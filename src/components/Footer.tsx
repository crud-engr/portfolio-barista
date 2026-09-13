import { Heart, Instagram, Facebook, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Mail, href: 'mailto:Olamilekankushimo1@gmail.com', label: 'Email' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative py-12 border-t border-border overflow-hidden'>
      {/* Watermark */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none select-none'>
        <span className='text-[6rem] sm:text-[9rem] lg:text-[12rem] font-heading font-bold text-foreground/[0.03] blur-[1px] tracking-widest'>
          BARISTA
        </span>
      </div>

      <div className='section-container relative z-10'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 text-center sm:text-left'>
          <p className='text-sm text-muted-foreground order-2 sm:order-1'>
            © {currentYear} Kushimo Olamilekan. All rights reserved.
          </p>
          <div className='flex items-center justify-center gap-4 order-1 sm:order-2'>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={label}
                className='text-muted-foreground hover:text-primary transition-colors'
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <p className='text-sm text-muted-foreground flex items-center justify-center sm:justify-end gap-1.5 order-3'>
            Made with <Heart size={14} className='text-primary shrink-0' /> and coffee by{' '}
            <a
              href='https://crudengr.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary transition-colors underline underline-offset-2'
            >
              CRUD
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

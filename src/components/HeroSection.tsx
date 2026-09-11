import { motion } from 'framer-motion';
import { ArrowDown, Instagram, Facebook, Mail, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20'
    >
      {/* Background gradient */}
      <div className='absolute inset-0' style={{ background: 'var(--gradient-hero)' }} />

      {/* Floating shapes */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <motion.div
          animate={{ x: [0, 24, 0], y: [0, -30, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute top-1/4 left-[8%] w-64 h-64 rounded-full bg-primary/10 blur-3xl'
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 26, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute bottom-1/4 right-[8%] w-80 h-80 rounded-full bg-accent/10 blur-3xl'
        />
      </div>

      <div className='section-container relative z-10'>
        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className='flex-1 text-center lg:text-left'
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className='inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6'
            >
              Professional Barista
            </motion.span>

            <h1 className='text-3xl min-[480px]:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight'>
              Hi, I'm <span className='gradient-text'>Kushimo</span>
              <br />
              <span className='gradient-text'>Olamilekan</span>
            </h1>

            <p className='mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed px-1'>
              I craft specialty coffee experiences — precision espresso, silky latte art, and warm
              hospitality — turning every cup into a small ritual worth savoring.
            </p>

            <div className='mt-6 sm:mt-8 flex flex-wrap items-center gap-3 justify-center lg:justify-start'>
              <a
                href='#contact'
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className='inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-xl font-medium text-sm text-primary-foreground transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/25 active:scale-[0.98]'
                style={{ background: 'var(--gradient-primary)' }}
              >
                Get In Touch
              </a>
              <a
                href='#creations'
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#creations')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className='inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-xl font-medium text-sm border border-border text-foreground hover:bg-secondary transition-all active:scale-[0.98]'
              >
                View Creations
              </a>
              <a
                href='#'
                className='inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-xl font-medium text-sm bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all active:scale-[0.98]'
                title='Placeholder — link to a résumé/CV file'
              >
                <ArrowDown size={16} />
                Resume
              </a>
            </div>

            <div className='mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4 justify-center lg:justify-start'>
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: MessageCircle, href: '#', label: 'WhatsApp' },
                { icon: Mail, href: 'mailto:Olamilekankushimo1@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={label}
                  className='p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all'
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Coffee cup illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className='relative flex-shrink-0 w-full max-w-[16rem] min-[480px]:max-w-[18rem] sm:max-w-[20rem] lg:max-w-[24rem] mx-auto lg:mx-0'
          >
            <div className='relative w-full aspect-square max-w-[16rem] min-[480px]:max-w-[18rem] sm:max-w-[20rem] lg:max-w-[24rem]'>
              {/* Rotating badge text ring */}
              <svg
                className='absolute inset-0 w-full h-full animate-spin-slow'
                viewBox='0 0 200 200'
              >
                <defs>
                  <path
                    id='badgeCircle'
                    d='M 100,100 m -84,0 a 84,84 0 1,1 168,0 a 84,84 0 1,1 -168,0'
                  />
                </defs>
                <text
                  fontSize='8.5'
                  letterSpacing='2.5'
                  fill='hsl(var(--primary) / 0.75)'
                  className='font-heading font-medium'
                >
                  <textPath href='#badgeCircle'>
                    SPECIALTY COFFEE • LATTE ART • HAND CRAFTED • SPECIALTY COFFEE • LATTE ART •
                    HAND CRAFTED •
                  </textPath>
                </text>
              </svg>

              {/* Dashed accent ring, opposite direction */}
              <svg
                className='absolute inset-0 w-full h-full animate-spin-slow-reverse'
                viewBox='0 0 200 200'
              >
                <circle
                  cx='100'
                  cy='100'
                  r='70'
                  fill='none'
                  stroke='hsl(var(--accent) / 0.25)'
                  strokeWidth='1.5'
                  strokeDasharray='4 8'
                  strokeLinecap='round'
                />
              </svg>

              {/* Steam wisps */}
              <div className='absolute left-1/2 -translate-x-1/2 top-[16%] flex gap-3'>
                {[0, 0.5, 1].map((delay, i) => (
                  <span
                    key={i}
                    className='block h-6 w-2 rounded-full animate-steam'
                    style={{
                      background: 'hsl(var(--muted-foreground) / 0.5)',
                      animationDelay: `${delay}s`,
                      marginTop: i === 1 ? '-6px' : 0,
                    }}
                  />
                ))}
              </div>

              {/* Cup */}
              <svg className='absolute inset-0 w-full h-full' viewBox='0 0 200 200'>
                <defs>
                  <linearGradient id='cupGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                    <stop offset='0%' stopColor='hsl(24 72% 45%)' />
                    <stop offset='100%' stopColor='hsl(38 90% 55%)' />
                  </linearGradient>
                </defs>
                <ellipse cx='100' cy='158' rx='52' ry='9' fill='hsl(var(--secondary))' />
                <path
                  d='M62 84 h76 l-7 58 a9 9 0 0 1 -9 8 H78 a9 9 0 0 1 -9 -8 Z'
                  fill='hsl(var(--card))'
                  stroke='url(#cupGradient)'
                  strokeWidth='3'
                />
                <path
                  d='M136 94 q26 4 22 26 q-4 20 -24 18'
                  fill='none'
                  stroke='url(#cupGradient)'
                  strokeWidth='7'
                  strokeLinecap='round'
                />
                <ellipse cx='100' cy='86' rx='37' ry='6.5' fill='url(#cupGradient)' />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className='absolute left-1/2 -translate-x-1/2'
          style={{ bottom: 'max(2rem, env(safe-area-inset-bottom))' }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='flex flex-col items-center gap-2 text-muted-foreground'
          >
            <span className='text-xs tracking-wider uppercase'>Scroll</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

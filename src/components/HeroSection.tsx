import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import profilePhoto from '@/assets/portfolio-img.png';

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
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl'
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full bg-primary/5 blur-3xl'
        />
      </div>

      <div className='section-container relative z-10'>
        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='flex-1 text-center lg:text-left'
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6'
            >
              Senior Software Developer
            </motion.span>

            <h1 className='text-3xl min-[480px]:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight'>
              Hi, I'm <span className='gradient-text'>Abeeb</span>
              <br />
              <span className='gradient-text'>Ayinla</span>
            </h1>

            <p className='mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed px-1'>
              I craft scalable, performant web applications with clean architecture, solid system
              design, and pixel-perfect interfaces. Security-conscious and turning complex problems
              into elegant solutions.
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
                href='#projects'
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className='inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-xl font-medium text-sm border border-border text-foreground hover:bg-secondary transition-all active:scale-[0.98]'
              >
                View Work
              </a>
              <a
                href='https://docs.google.com/document/d/1zsOgBbSK0Q6Gm1VoTKT7dyuaUz6k5G8S6j9xzWYmzgY/edit?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-xl font-medium text-sm bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all active:scale-[0.98]'
              >
                <ArrowDown size={16} />
                Resume
              </a>
            </div>

            <div className='mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4 justify-center lg:justify-start'>
              {[
                { icon: Github, href: 'https://github.com/crud-engr', label: 'GitHub' },
                {
                  icon: Linkedin,
                  href: 'https://www.linkedin.com/in/olamilekan-a-b63b3315a/',
                  label: 'LinkedIn',
                },
                { icon: Twitter, href: 'https://x.com/crud_engr', label: 'Twitter' },
                { icon: Mail, href: 'mailto:abeebayinla@gmail.com', label: 'Email' },
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

          {/* Profile photo with animated ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='relative flex-shrink-0 w-full max-w-[16rem] min-[480px]:max-w-[18rem] sm:max-w-[20rem] lg:max-w-[24rem] mx-auto lg:mx-0'
          >
            {/* Animated ring */}
            <div className='relative w-full aspect-square max-w-[16rem] min-[480px]:max-w-[18rem] sm:max-w-[20rem] lg:max-w-[24rem]'>
              <svg
                className='absolute inset-0 w-full h-full animate-ring-spin'
                viewBox='0 0 200 200'
              >
                <defs>
                  <linearGradient id='ringGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                    <stop offset='0%' stopColor='hsl(174 62% 50%)' />
                    <stop offset='50%' stopColor='hsl(190 70% 55%)' />
                    <stop offset='100%' stopColor='hsl(174 62% 40%)' />
                  </linearGradient>
                </defs>
                <circle
                  cx='100'
                  cy='100'
                  r='96'
                  fill='none'
                  stroke='url(#ringGradient)'
                  strokeWidth='2'
                  strokeDasharray='120 40 60 40'
                  strokeLinecap='round'
                />
              </svg>

              {/* Second ring spinning opposite */}
              <svg
                className='absolute inset-0 w-full h-full'
                viewBox='0 0 200 200'
                style={{ animation: 'ring-spin 6s linear infinite reverse' }}
              >
                <circle
                  cx='100'
                  cy='100'
                  r='90'
                  fill='none'
                  stroke='hsl(var(--primary) / 0.15)'
                  strokeWidth='1'
                  strokeDasharray='30 70'
                  strokeLinecap='round'
                />
              </svg>

              {/* Glowing dots on ring */}
              <svg
                className='absolute inset-0 w-full h-full animate-ring-spin'
                viewBox='0 0 200 200'
              >
                <circle cx='100' cy='4' r='3' fill='hsl(174 62% 50%)' opacity='0.8' />
                <circle cx='196' cy='100' r='2' fill='hsl(190 70% 55%)' opacity='0.6' />
              </svg>

              {/* Photo */}
              <div className='absolute inset-[15%] sm:inset-5 lg:inset-6 rounded-full overflow-hidden'>
                <img
                  src={profilePhoto}
                  alt='Abeeb Ayinla — Senior Software Developer'
                  className='w-full h-full object-cover'
                  loading='eager'
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
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

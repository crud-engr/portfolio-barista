import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

const experiences: Job[] = [
  {
    role: 'Senior Barista',
    company: '1 of 1 coffee shop',
    location: 'Muscat, Oman',
    period: '2025 – Present',
    points: [
      'Delivered consistent, high-volume specialty coffee service during peak hours.',
      'Mentored junior baristas on espresso extraction and milk texturing fundamentals.',
      'Built regular-customer relationships that grew repeat visits.',
    ],
  },
  {
    role: 'Senior chef',
    company: 'Aldom restaurant',
    location: 'Ajman, United Arab Emirates ',
    period: '2022 – 2024',
    points: [
      'Lead a team of baristas, overseeing daily espresso bar operations and quality control.',
      'Curate seasonal drink menus and train staff on latte art and brewing techniques.',
      'Maintain equipment calibration and inventory to ensure a consistently great cup.',
    ],
  },
  // {
  //   role: 'Barista',
  //   company: '[Café Name]',
  //   location: '[City, Country]',
  //   period: '2019 – 2021',
  //   points: [
  //     'Prepared espresso-based and filter coffee beverages to specialty standards.',
  //     'Kept a clean, organized station and followed food-safety guidelines.',
  //     'Assisted with stock counts, opening/closing procedures, and POS operations.',
  //   ],
  // },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id='experience' className='py-24 sm:py-32 relative'>
      <div className='section-container' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <span className='text-xs tracking-[0.3em] uppercase text-primary font-medium'>
            Career
          </span>
          <h2 className='mt-3 text-3xl sm:text-4xl font-heading font-bold'>
            Behind the <span className='gradient-text'>Bar</span>
          </h2>
        </motion.div>

        {/* Zigzag timeline */}
        <div className='relative max-w-4xl mx-auto'>
          {/* Center line (desktop) / left line (mobile) */}
          <div className='absolute left-5 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-border' />

          <div className='space-y-10 sm:space-y-14'>
            {experiences.map((exp, i) => {
              const fromRight = i % 2 === 1;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: fromRight ? 30 : -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.15 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative pl-14 sm:pl-0 sm:w-1/2 ${
                    fromRight ? 'sm:ml-auto sm:pl-10' : 'sm:pr-10 sm:text-right'
                  }`}
                >
                  {/* Dot on timeline */}
                  <div
                    className={`absolute top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-primary bg-background z-10 left-[13px] sm:left-auto ${
                      fromRight ? 'sm:-left-2' : 'sm:-right-2'
                    }`}
                  />

                  <motion.div
                    whileHover={{ y: -4 }}
                    className='glass rounded-2xl p-5 sm:p-6 hover:shadow-lg hover:shadow-primary/5 transition-shadow'
                  >
                    <div
                      className={`flex flex-col gap-1 mb-2 ${
                        fromRight ? 'sm:items-start' : 'sm:items-end'
                      }`}
                    >
                      <h3 className='font-heading font-semibold text-base flex items-center gap-2'>
                        <Briefcase size={16} className='text-primary shrink-0' />
                        {exp.role}
                      </h3>
                      <span className='text-xs text-muted-foreground flex items-center gap-1'>
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                    </div>
                    <p
                      className={`text-sm font-medium text-primary/80 mb-3 flex flex-col gap-1 ${
                        fromRight ? '' : 'sm:items-end'
                      }`}
                    >
                      {exp.company}
                      <span className='flex items-center gap-1.5 text-muted-foreground font-normal'>
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </p>
                    <ul
                      className={`text-sm text-muted-foreground leading-relaxed space-y-2 ${
                        fromRight ? '' : 'sm:text-right'
                      }`}
                    >
                      {exp.points.map((point, k) => (
                        <li
                          key={k}
                          className={`flex gap-2 min-w-0 ${fromRight ? '' : 'sm:flex-row-reverse'}`}
                        >
                          <span className='text-primary shrink-0'>○</span>
                          <span className='break-words'>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

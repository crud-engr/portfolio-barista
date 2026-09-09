import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ExternalLink, MapPin } from 'lucide-react';
import type { Experience } from '@/types';

const experiences: Experience[] = [
  {
    role: 'Backend Developer',
    company: 'Lunix POS',
    website: 'https://lunixpos.com',
    location: 'New York, United States',
    period: '2025 – 2026',
    descriptionList: [
      {
        title: 'Subscription and Billing System',
        points: [
          'Engineered a flexible, tiered subscription platform with Stripe integration for payment processing and lifecycle management.',
          'Implemented three distinct plans (Monthly and Annual billing cycles) with database seeding for plan synchronization.',
          'Developed custom webhook handlers to manage critical subscription states, including grace periods, plan renewals, and account locks.',
          'Introduced promotional logic to automatically apply a 1-month coupon for new users within a specific onboarding window.',
        ],
      },
      {
        title: 'PWA Push Notification Service',
        points: [
          'Designed and implemented a dedicated push notification API using Web-Push to support PWA real-time alerts upon specific product actions.',
          'Resolved a critical issue concerning expiring user subscriptions by establishing a robust protocol, allowing the client to resubscribe users, ensuring continuous and reliable notification delivery.',
        ],
      },
      {
        title: 'Dynamic Tax Profile Engine',
        points: [
          'Architected a scalable tax profile system allowing for granular tax imposition at the individual product level.',
          'Developed an automated calculation service that intercepts the cart lifecycle to apply tax values based on product-specific profiles before checkout initialization.',
          'Ensured financial data integrity by synchronizing calculated tax totals with the backend billing logic, providing accurate line-item breakdowns for both the user interface and final invoice generation.',
        ],
      },
      {
        title: 'Multi-Tenant Workspace & CRM',
        points: [
          'Architected a location-based multi-tenant workspace with fully isolated task and CRM data per tenant.',
          'Used Node.js and Agenda to handle recurring task lifecycles, subtask integrity, and real-time state persistence across concurrent sessions.',
          'Built scalable timeline tracking and nested comment threads to support high-concurrency lead pipelines.',
        ],
      },
    ],
  },
  {
    role: 'Software Developer',
    company: 'Earnipay Limited',
    website: 'https://earnipay.com',
    location: 'Lagos, Nigeria',
    period: '2023 – 2025',
    descriptionList: [
      {
        title: 'Financial Systems & Product Development',
        points: [
          'Developed and launched a comprehensive business banking platform featuring sub-accounts, payroll, approval workflows, and payment requests.',
          "Architected the backend system for the company's personal banking app, powering core features such as bill payments, peer-to-peer transfers, Earned Wage Access (EWA), and AI-driven spending insights.",
          'Led the frontend development and endpoint integration for critical business operations, including onboarding flows, credit assessment modules, and multi-level approval systems.',
        ],
      },
      {
        title: 'Architecture & Backend Optimization',
        points: [
          'Orchestrated the migration of legacy services from Express/Vanilla JavaScript to NestJS, significantly enhancing code maintainability and system scalability.',
          'Sustained a consistent system uptime of over 90% through proactive monitoring and infrastructure stabilization.',
          'Designed and optimized database schemas, ensuring high data integrity and performance through optimized query execution and indexing strategies.',
        ],
      },
      {
        title: 'Leadership & Operational Impact',
        points: [
          'Led the development of core banking and operational control systems, resulting in a 70% increase in internal team productivity.',
          'Actively shaped the engineering culture through rigorous code reviews and by providing technical guidance to junior developers to ensure the delivery of high-quality, bug-free code.',
          'Maintained the production API ecosystem and provided high-level technical support to the customer experience team to resolve critical user-facing issues.',
        ],
      },
    ],
  },
  {
    role: 'Software Developer',
    company: 'The Alternative Bank',
    website: 'https://altbank.ng',
    location: 'Lagos, Nigeria',
    period: '2022 – 2023',
    descriptionList: [
      {
        title: 'Investment & Community Platforms',
        points: [
          'Architected and built the core API system for Altinvest, a specialized investment platform focused on directing capital into real-sector opportunities.',
          'Developed and launched AltConnect, an all-in-one community management web solution designed for multi-unit residential and commercial properties.',
          'Developed and maintained reusable code libraries to streamline internal development cycles and ensure consistency across multiple product lines.',
        ],
      },
      {
        title: 'Performance & UX Optimization',
        points: [
          'Implemented cross-platform responsive designs using BrowserStack for multi-device validation, contributing to a documented 80% increase in positive user experience metrics.',
          'Led performance optimization initiatives to enhance web application speed and responsiveness, focusing on critical page-load metrics and interaction readiness.',
          'Established application monitoring systems to track exceptions and generate automated error reports, significantly reducing time-to-resolution for production issues.',
        ],
      },
      {
        title: 'Technical Strategy & Documentation',
        points: [
          'Authored comprehensive technical documentation for all projects prior to development; this strategic planning ensured all features were delivered predictably within project timelines.',
          'Implemented performance metric tracking to measure and maintain page load responsiveness, ensuring high-speed access for end-users across varying network conditions.',
        ],
      },
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setExpanded((prev) => ({ ...prev, [key]: !(prev[key] ?? true) }));

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
            Work <span className='gradient-text'>Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className='relative max-w-3xl mx-auto'>
          {/* Vertical line */}
          <div className='absolute left-5 sm:left-8 top-0 bottom-0 w-px bg-border' />

          <div className='space-y-6 sm:space-y-10'>
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className='relative pl-14 sm:pl-20'
              >
                {/* Dot on timeline */}
                <div className='absolute left-[22px] sm:left-[26px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-primary bg-background z-10' />

                <div className='glass rounded-2xl p-5 sm:p-6 hover:shadow-lg hover:shadow-primary/5 transition-all'>
                  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2'>
                    <h3 className='font-heading font-semibold text-base flex items-center gap-2'>
                      <Briefcase size={16} className='text-primary' />
                      {exp.role}
                    </h3>
                    <span className='text-xs text-muted-foreground flex items-center gap-1'>
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                  </div>
                  <p className='text-sm font-medium text-primary/80 mb-2'>
                    {exp.website ? (
                      <a
                        href={exp.website}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-1.5 hover:underline'
                      >
                        {exp.company}
                        <ExternalLink size={12} className='shrink-0' />
                      </a>
                    ) : (
                      exp.company
                    )}
                    {exp.location && (
                      <span className='flex items-center gap-1.5 mt-1 text-muted-foreground font-normal'>
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    )}
                  </p>
                  {exp.descriptionList ? (
                    <ul className='text-sm text-muted-foreground leading-relaxed space-y-3'>
                      {exp.descriptionList.map((item, j) => {
                        const key = `${i}-${j}`;
                        const isOpen = expanded[key] ?? true;
                        return (
                          <li
                            key={j}
                            className='rounded-lg border border-border/50 overflow-hidden'
                          >
                            <button
                              type='button'
                              onClick={() => toggle(key)}
                              className='flex w-full items-center gap-2 py-2.5 px-3 text-left font-medium text-foreground/90 hover:bg-muted/50 transition-colors'
                            >
                              <ChevronDown
                                size={18}
                                className={`text-primary shrink-0 transition-transform duration-200 ${
                                  isOpen ? '' : '-rotate-90'
                                }`}
                              />
                              {item.title}
                            </button>
                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.ul
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className='pl-4 pr-3 pb-3 space-y-1 overflow-hidden'
                                >
                                  {item.points.map((point, k) => (
                                    <li key={k} className='flex gap-2 pt-0.5 min-w-0'>
                                      <span className='text-primary shrink-0'>○</span>
                                      <span className='break-words'>{point}</span>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className='text-sm text-muted-foreground leading-relaxed'>
                      {exp.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

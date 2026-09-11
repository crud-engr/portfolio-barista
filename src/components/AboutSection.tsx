import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Coffee, Milk, Users, Award } from 'lucide-react';

const highlights = [
  { icon: Coffee, label: 'Espresso Craft', desc: 'Dialing in the perfect shot, every time' },
  { icon: Milk, label: 'Latte Art', desc: 'Pouring hearts, rosettas & swans' },
  { icon: Users, label: 'Hospitality', desc: 'Warm, attentive customer experience' },
  { icon: Award, label: 'SCA Trained', desc: 'Certified in specialty coffee standards' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id='about' className='py-24 sm:py-32 relative'>
      <div className='section-container' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <span className='text-xs tracking-[0.3em] uppercase text-primary font-medium'>
            About Me
          </span>
          <h2 className='mt-3 text-3xl sm:text-4xl font-heading font-bold'>
            Brewed With <span className='gradient-text'>Passion</span>
          </h2>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-8 sm:gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='space-y-4 sm:space-y-5'
          >
            <p className='text-muted-foreground leading-relaxed text-base sm:text-lg break-words'>
              With <strong className='text-foreground'>2 years</strong> behind the espresso bar, I
              specialize in crafting specialty coffee that turns a routine order into a memorable
              moment.
            </p>
            <p className='text-muted-foreground leading-relaxed break-words'>
              I'm passionate about precise extraction, silky microfoam, and latte art that makes a
              cup feel personal. My craft spans espresso-based drinks, manual brewing methods, and
              reading a bean's story from roast to cup.
            </p>
            <p className='text-muted-foreground leading-relaxed break-words'>
              When I'm not behind the bar, I'm experimenting with new pour patterns, exploring
              single-origin beans, and sharing what I learn with the next generation of baristas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'
          >
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -3 : 3 }}
                animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className='glass rounded-2xl p-4 sm:p-5 hover:shadow-lg hover:shadow-primary/5 transition-shadow group'
              >
                <div className='w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10 text-primary mb-3 group-hover:scale-110 transition-transform'>
                  <Icon size={20} />
                </div>
                <h3 className='font-heading font-semibold text-sm'>{label}</h3>
                <p className='text-xs text-muted-foreground mt-1'>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

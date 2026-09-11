import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Instagram, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

// Placeholder — replace with your own Formspree (or other) form endpoint.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setStatus('idle');
      toast.error('Something went wrong', {
        description: 'Please try again or reach out directly via email.',
        duration: 5000,
      });
    }
  };

  return (
    <section id='contact' className='py-24 sm:py-32 bg-secondary/30'>
      <div className='section-container' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <span className='text-xs tracking-[0.3em] uppercase text-primary font-medium'>
            Contact
          </span>
          <h2 className='mt-3 text-3xl sm:text-4xl font-heading font-bold'>
            Let's <span className='gradient-text'>Connect</span>
          </h2>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto'>
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className='space-y-4 sm:space-y-6'
          >
            <p className='text-muted-foreground leading-relaxed text-base sm:text-lg break-words'>
              Open to café roles, pop-ups, private events, and coffee collaborations — reach out and
              let's talk coffee.
            </p>

            {[
              {
                icon: Mail,
                label: 'Olamilekankushimo1@gmail.com',
                href: 'mailto:Olamilekankushimo1@gmail.com',
              },
              { icon: MapPin, label: 'Muscat, Oman — Available for Bookings' },
              { icon: Instagram, label: 'Latte art & brews on Instagram', href: '#' },
            ].map(({ icon: Icon, label, href }) => {
              const content = (
                <>
                  <div className='w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10 text-primary'>
                    <Icon size={18} />
                  </div>
                  <span className='text-sm text-muted-foreground break-words min-w-0'>{label}</span>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 sm:gap-4 min-w-0 hover:opacity-80 transition-opacity'
                >
                  {content}
                </a>
              ) : (
                <div key={label} className='flex items-center gap-3 sm:gap-4 min-w-0'>
                  {content}
                </div>
              );
            })}
          </motion.div>

          {/* Form / Success State */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className='relative min-h-[280px] sm:min-h-[320px]'
          >
            <AnimatePresence mode='wait'>
              {status === 'success' ? (
                <motion.div
                  key='success'
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: 'spring', damping: 22, stiffness: 260 }}
                  className='flex flex-col items-center justify-center py-16 px-8 rounded-2xl border border-border bg-card/80 backdrop-blur-sm text-center'
                  style={{
                    boxShadow:
                      '0 0 40px -10px hsl(24 72% 45% / 0.25), inset 0 1px 0 0 hsl(0 0% 100% / 0.05)',
                  }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', damping: 14, stiffness: 380, delay: 0.1 }}
                    className='w-20 h-20 rounded-full flex items-center justify-center mb-6'
                    style={{
                      background: 'var(--gradient-primary)',
                      boxShadow: '0 8px 32px -8px hsl(24 72% 45% / 0.5)',
                    }}
                  >
                    <CheckCircle2 className='w-10 h-10 text-primary-foreground' strokeWidth={2.5} />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className='text-2xl font-heading font-bold text-foreground mb-2'
                  >
                    Message sent!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className='text-muted-foreground text-sm max-w-xs mb-6'
                  >
                    Thanks for reaching out. I'll get back to you as soon as I can.
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    type='button'
                    onClick={() => setStatus('idle')}
                    className='text-sm font-medium text-primary hover:underline underline-offset-4'
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key='form'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className='space-y-4'
                >
                  <input
                    type='text'
                    name='name'
                    placeholder='Your Name'
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className='w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all'
                  />
                  <input
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className='w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all'
                  />
                  <textarea
                    name='message'
                    placeholder='Your Message'
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className='w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none'
                  />
                  <button
                    type='submit'
                    disabled={status === 'loading'}
                    className='inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-primary-foreground hover:scale-105 hover:shadow-xl hover:shadow-primary/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100'
                    style={{ background: 'var(--gradient-primary)' }}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className='animate-spin' /> Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

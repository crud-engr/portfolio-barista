import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe, Server, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Writing maintainable, scalable code" },
  { icon: Globe, label: "Full-Stack", desc: "End-to-end application development" },
  { icon: Server, label: "Architecture", desc: "Designing robust system architecture" },
  { icon: Lightbulb, label: "Innovation", desc: "Exploring cutting-edge technologies" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">About Me</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold">
            Passionate About <span className="gradient-text">Building</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg break-words">
              With over <strong className="text-foreground">6 years</strong> of experience in software development, I specialize in building high-performance web applications that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed break-words">
              I'm passionate about writing clean, efficient code and creating seamless user experiences. My expertise spans across modern JavaScript frameworks, cloud infrastructure, and agile methodologies.
            </p>
            <p className="text-muted-foreground leading-relaxed break-words">
              When I'm not coding, I contribute to open-source projects, mentor aspiring developers, and stay on top of the latest industry trends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
          >
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="glass rounded-2xl p-4 sm:p-5 hover:shadow-lg hover:shadow-primary/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10 text-primary mb-3 group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </div>
                <h3 className="font-heading font-semibold text-sm">{label}</h3>
                <p className="text-xs text-muted-foreground mt-1">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

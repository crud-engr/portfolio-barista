import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Espresso Extraction", level: 96 },
  { name: "Latte Art", level: 92 },
  { name: "Milk Steaming & Texturing", level: 94 },
  { name: "Coffee Cupping & Tasting", level: 85 },
  { name: "Manual Brewing (V60/Chemex)", level: 88 },
  { name: "Customer Service", level: 97 },
  { name: "POS & Inventory Management", level: 82 },
  { name: "Coffee Roasting Knowledge", level: 75 },
];

const tools = [
  "La Marzocco", "Mazzer Grinders", "V60", "Chemex", "Aeropress",
  "French Press", "Cold Brew Rig", "POS Systems", "Milk Frother",
  "Refractometer", "Cupping Spoons", "Latte Art Pens",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary/30 overflow-hidden">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">Expertise</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold">
            Skills & <span className="gradient-text">Craft</span>
          </h2>
        </motion.div>

        {/* Skill bars */}
        <div className="max-w-3xl mx-auto space-y-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
            >
              <div className="flex justify-between gap-2 mb-1.5 min-w-0">
                <span className="text-sm font-medium truncate">{skill.name}</span>
                <span className="text-xs text-muted-foreground shrink-0">{skill.level}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: 0.4 + i * 0.08, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & equipment marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16"
        >
          <p className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Tools &amp; Equipment
          </p>
          <div className="relative pause-on-hover">
            <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />
            <div className="flex overflow-hidden">
              <div className="flex gap-3 shrink-0 animate-marquee">
                {[...tools, ...tools].map((tool, i) => (
                  <span
                    key={`${tool}-${i}`}
                    className="px-4 py-2 rounded-xl text-sm font-medium glass hover:bg-primary/10 hover:text-primary transition-colors cursor-default whitespace-nowrap"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

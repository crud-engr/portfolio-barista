import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "Node.js", level: 90 },
  { name: "Python", level: 82 },
  { name: "PostgreSQL / MongoDB", level: 87 },
  { name: "AWS / Cloud", level: 85 },
  { name: "Docker / CI/CD", level: 83 },
  { name: "GraphQL / REST", level: 90 },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS",
  "GraphQL", "Tailwind CSS", "Git", "CI/CD",
  "Fastify", "Agenda", "BullMQ", "Typegoose", "Prisma", "Swagger", "Postman", "GCP"
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">Expertise</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
          {/* Skill bars */}
          <div className="space-y-5">
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
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: 0.4 + i * 0.08, duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: "var(--gradient-primary)" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap gap-3 content-start"
          >
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.04, duration: 0.4 }}
                className="px-4 py-2 rounded-xl text-sm font-medium glass hover:bg-primary/10 hover:text-primary transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

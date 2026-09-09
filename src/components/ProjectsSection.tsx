import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  // {
  //   title: "E-Commerce Platform",
  //   description: "A full-stack e-commerce platform with real-time inventory, payment processing, and an admin dashboard.",
  //   tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
  //   // github: "#",
  //   live: "#",
  // },
  {
    title: "Task Manager",
    description: "Collaborative project management tool with drag-and-drop boards, real-time updates, and team analytics.",
    tech: ["React", "Node.js", "MongoDB"],
    // github: "#",
    live: "https://kanban-board-crud.vercel.app",
  },
  {
    title: "Pepcode",
    description:
      "Accounting software that allows customers to record sales and purchase transactions, plus invoices, goods, and orders. I engineered the backend system.",
    tech: ["Node", "NestJS", "MongoDB", "Mongoose"],
    // github: "#",
    live: "https://pepcodeinc.com/",
  },
  {
    title: "Linqx",
    description:
      "A marketplace that connects customers to vendors to satisfy their job needs. Vendors showcase their talent to win jobs from customers. I built the full-stack application.",
    tech: ["Node", "React", "MongoDB", "Mongoose", "Paystack"],
    // github: "#",
    live: "https://www.linqx.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">Portfolio</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 sm:p-8 group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-2 mb-4 min-w-0">
                <h3 className="text-lg sm:text-xl font-heading font-semibold group-hover:text-primary transition-colors break-words min-w-0">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  <a href={project.live} aria-label="Live demo" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-primary/10 text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

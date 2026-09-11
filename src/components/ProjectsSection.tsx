import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Coffee } from "lucide-react";

const creations = [
  {
    title: "Caramel Rosetta Latte",
    description:
      "A balanced double-shot espresso layered with steamed milk and house caramel, finished with a hand-poured rosetta.",
    tags: ["Espresso", "Latte Art", "Signature"],
  },
  {
    title: "Cascara Cold Brew",
    description:
      "Slow cold-steeped single-origin beans infused with cascara (coffee cherry tea) for a fruit-forward, low-acid sipper.",
    tags: ["Cold Brew", "Single Origin", "Seasonal"],
  },
  {
    title: "Affogato Reserve",
    description:
      "A scoop of vanilla gelato drowned in a hot single-origin espresso shot — simple, bold, and unforgettable.",
    tags: ["Espresso", "Dessert", "Classic"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="creations" className="py-24 sm:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">Portfolio</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold">
            Signature <span className="gradient-text">Creations</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">Hover a card to see the tasting notes</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {creations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
              className="group [perspective:1200px] h-64"
            >
              <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-center text-center backface-hidden glass"
                  style={{ boxShadow: "inset 0 1px 0 0 hsl(0 0% 100% / 0.06)" }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <Coffee size={26} color="hsl(var(--primary-foreground))" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-semibold">{item.title}</h3>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {item.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-primary/10 text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-2xl p-6 sm:p-7 flex flex-col justify-center backface-hidden [transform:rotateY(180deg)]"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <h3 className="text-base sm:text-lg font-heading font-semibold mb-2" style={{ color: "hsl(var(--primary-foreground))" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--primary-foreground) / 0.9)" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

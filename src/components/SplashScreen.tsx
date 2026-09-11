import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee } from "lucide-react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 700);
    }, 2400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          style={{
            backgroundColor: "hsl(var(--splash-bg))",
            paddingLeft: "max(1.5rem, env(safe-area-inset-left))",
            paddingRight: "max(1.5rem, env(safe-area-inset-right))",
          }}
          initial={{ clipPath: "circle(150% at 50% 100%)" }}
          exit={{ clipPath: "circle(0% at 50% 100%)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="text-center w-full max-w-sm">
            <div className="relative mb-6 mx-auto w-20 h-20">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center relative overflow-hidden"
                style={{ background: "var(--gradient-primary)" }}
              >
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: 0.3, duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
                  className="absolute inset-0"
                  style={{ background: "hsl(var(--splash-bg) / 0.25)" }}
                />
                <Coffee
                  className="relative z-10"
                  size={34}
                  strokeWidth={2.25}
                  color="hsl(var(--primary-foreground))"
                />
              </motion.div>

              {[0, 0.35, 0.7].map((delay, i) => (
                <span
                  key={i}
                  className="absolute -top-3 h-4 w-1.5 rounded-full animate-steam"
                  style={{
                    left: `${34 + i * 12}%`,
                    background: "hsl(var(--splash-text) / 0.7)",
                    animationDelay: `${delay}s`,
                  }}
                />
              ))}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-2xl sm:text-3xl font-heading font-semibold"
              style={{ color: "hsl(var(--splash-text))" }}
            >
              Kushimo Quadri Olamilekan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-2 text-sm tracking-[0.3em] uppercase"
              style={{ color: "hsl(var(--splash-text) / 0.6)" }}
            >
              Professional Barista
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 1.0, ease: "easeInOut" }}
              className="mt-8 h-0.5 w-32 mx-auto rounded-full origin-left"
              style={{ background: "var(--gradient-primary)" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;

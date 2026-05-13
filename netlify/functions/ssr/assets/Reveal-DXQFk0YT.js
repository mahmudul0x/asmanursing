import { jsx } from "react/jsx-runtime";
import { motion } from "motion/react";
function Reveal({ children, delay = 0, ...rest }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
      ...rest,
      children
    }
  );
}
export {
  Reveal as R
};

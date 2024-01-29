import { motion, Variants } from "framer-motion";
import { useMode } from "../../context/mode-context";

const redPill: Variants = {
  hidden: { width: 0, opacity: 0 },
  visible: { width: 48, opacity: 1 },
};

function RedPill() {
  const { mode } = useMode();

  return (
    <motion.div
      key="red_pill"
      initial="hidden"
      animate={mode === "silent" ? "visible" : "hidden"}
      exit="hidden"
      variants={redPill}
      className="absolute h-full bg-red-500 rounded-[28px] top-0 left-0"
    ></motion.div>
  );
}

export default RedPill;

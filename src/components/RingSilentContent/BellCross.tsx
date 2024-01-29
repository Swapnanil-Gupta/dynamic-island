import { motion, Variants } from "framer-motion";
import { useMode } from "../../context/mode-context";

const bellCross: Variants = {
  hidden: { width: 0, transformOrigin: "1px 3px" },
  visible: { width: 24, transition: { delay: 0.2 } },
};

function BellCross() {
  const { mode } = useMode();

  return (
    <motion.div
      key="bell_cross"
      initial="hidden"
      animate={mode === "silent" ? "visible" : "hidden"}
      exit="hidden"
      variants={bellCross}
      className="absolute h-[3px] py-[0.5px] transform rotate-45 bg-red-500"
    >
      <div className="w-full h-full bg-neutral-100"></div>
    </motion.div>
  );
}

export default BellCross;

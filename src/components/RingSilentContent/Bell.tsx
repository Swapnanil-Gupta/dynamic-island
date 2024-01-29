import { motion, Variants } from "framer-motion";
import { useMode } from "../../context/mode-context";
import { Bell as BellIcon } from "lucide-react";
import BellCross from "./BellCross";

const bell: Variants = {
  hidden: { opacity: 0, rotate: 0 },
  visible: {
    opacity: 1,
    rotate: [20, 0],
    transition: {
      duration: 2,
      type: "spring",
      bounce: 0.9,
      opacity: {
        duration: 0.25,
        bounce: 0,
      },
    },
  },
  visibleSilent: {
    opacity: 1,
    x: 12,
    rotate: 0,
  },
};

function Bell() {
  const { mode } = useMode();

  return (
    <motion.div
      key="bell"
      className="relative z-10"
      initial="hidden"
      animate={mode === "ring" ? "visible" : "visibleSilent"}
      exit="hidden"
      variants={bell}
    >
      <BellCross />
      <BellIcon className="w-5 h-5 fill-neutral-100" />
    </motion.div>
  );
}

export default Bell;

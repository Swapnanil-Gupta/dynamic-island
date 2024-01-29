import { TimerProvider } from "../../context/timer-context";
import { motion, Variants } from "framer-motion";

import Timer from "./Timer";
import TimerControls from "./TimerControls";

const timerContainer: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.25 },
  },
};

function TimerContent() {
  return (
    <motion.div
      key="timerContainer"
      className="flex items-center justify-between w-full h-full p-1.5"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={timerContainer}
    >
      <TimerProvider resetAt={60}>
        <TimerControls />
        <Timer />
      </TimerProvider>
    </motion.div>
  );
}

export default TimerContent;

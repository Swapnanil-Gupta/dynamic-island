import { motion, Variants } from "framer-motion";
import { Pause, Play, X } from "lucide-react";
import { useTimer } from "../../context/timer-context";
import { useMode } from "../../context/mode-context";

const timerControlsContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const playPause: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

function TimerControls() {
  const { handleModeChange } = useMode();
  const { playing, toggle } = useTimer();

  return (
    <motion.div
      key="timerControlsContainer"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={timerControlsContainer}
      className="flex items-center justify-center gap-2"
    >
      <button
        className="flex items-center justify-center w-12 h-12 overflow-hidden rounded-full bg-orange-500/30"
        onClick={toggle}
      >
        {playing && (
          <motion.span
            key="timer_pause"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={playPause}
          >
            <Pause className="w-6 h-6 m-3 fill-orange-400 stroke-orange-400" />
          </motion.span>
        )}
        {!playing && (
          <motion.span
            key="timer_play"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={playPause}
          >
            <Play className="w-6 h-6 m-3 fill-orange-400 stroke-orange-400" />
          </motion.span>
        )}
      </button>
      <button
        className="flex items-center justify-center rounded-full bg-gray-500/30"
        onClick={() => handleModeChange("idle")}
      >
        <X className="m-2.5 fill-current w-7 h-7" />
      </button>
    </motion.div>
  );
}

export default TimerControls;

import type { Mode } from "../types";
import { motion, Variant, AnimatePresence } from "framer-motion";
import { useMode } from "../context/mode-context";
import RingSilentContent from "./RingSilentContent";
import TimerContent from "./TimerContent";
import MusicContent from "./MusicContent";

const container: { [key in Mode]: Variant } = {
  idle: { width: 112, height: 44 },
  ring: { width: 164, height: 44 },
  silent: { width: 180, height: 44 },
  timer: { width: 328, height: 76 },
  music: { width: 384, height: 180 },
};

function DynamicIsland() {
  const { mode } = useMode();

  return (
    <motion.div
      className="mx-auto mt-4 bg-black rounded-[28px] overflow-hidden p-2 text-neutral-100"
      initial="idle"
      animate={mode}
      variants={container}
      transition={{
        type: "spring",
        duration: 1,
        bounce: 0.5,
      }}
    >
      <AnimatePresence>
        {(mode === "ring" || mode === "silent") && <RingSilentContent />}
        {mode === "timer" && <TimerContent />}
        {mode === "music" && <MusicContent />}
      </AnimatePresence>
    </motion.div>
  );
}

export default DynamicIsland;

import { motion, Variants } from "framer-motion";
import { FastForward, Pause, Play, Rewind } from "lucide-react";
import { useTimer } from "../../context/timer-context";

const playPause: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

function MusicControls() {
  const { playing, toggle } = useTimer();

  return (
    <div className="flex gap-4 mx-auto">
      <button>
        <Rewind className="fill-current w-7 h-7" />
      </button>
      <button className="overflow-hidden" onClick={toggle}>
        {playing && (
          <motion.span
            key="music_pause"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={playPause}
          >
            <Pause className="fill-current w-7 h-7" />
          </motion.span>
        )}
        {!playing && (
          <motion.span
            key="music_play"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={playPause}
          >
            <Play className="fill-current w-7 h-7" />
          </motion.span>
        )}
      </button>
      <button>
        <FastForward className="fill-current w-7 h-7" />
      </button>
    </div>
  );
}

export default MusicControls;

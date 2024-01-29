import { motion, Variants } from "framer-motion";
import SongMeta from "./SongMeta";
import Visualizer from "./Visualizer";
import { TimerProvider } from "../../context/timer-context";
import Seeker from "./Seeker";
import MusicControls from "./MusicControls";

const musicContainer: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.25 } },
};

function MusicContent() {
  return (
    <motion.div
      key="musicContainer"
      className="flex flex-col gap-3 p-3"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={musicContainer}
    >
      <TimerProvider resetAt={187}>
        <div className="flex items-center justify-between">
          <SongMeta />
          <Visualizer />
        </div>
        <Seeker />
        <MusicControls />
      </TimerProvider>
    </motion.div>
  );
}

export default MusicContent;

import { motion, Variants } from "framer-motion";
import { useTimer } from "../../context/timer-context";

function getRandomScales() {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(Math.random());
  }
  return arr;
}

const visualizer: Variants = {
  initial: { scaleY: 0.1 },
  animate: () => ({
    scaleY: getRandomScales(),
    transition: { repeat: Infinity, duration: 1.2, repeatType: "reverse" },
  }),
};

function Visualizer() {
  const { playing } = useTimer();

  return (
    <div className="flex items-center justify-center gap-0.5">
      {Array.from({ length: 8 }).map(() => (
        <motion.div
          initial="initial"
          animate={playing ? "animate" : "initial"}
          variants={visualizer}
          className="w-0.5 h-8 bg-yellow-200/50 rounded-lg"
        ></motion.div>
      ))}
    </div>
  );
}

export default Visualizer;

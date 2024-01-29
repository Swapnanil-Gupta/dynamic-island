import { motion, AnimatePresence, Variants } from "framer-motion";
import { useTimer } from "../../context/timer-context";

const timerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const digits: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
};

function Timer() {
  const { time } = useTimer();
  const firstDigit = Math.floor(time / 10);
  const secondDigit = time % 10;

  return (
    <motion.div
      key="timerContainer"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={timerContainer}
      className="flex items-baseline gap-2 text-orange-400 justify-bottom"
    >
      <p>Timer</p>
      <div className="flex overflow-hidden">
        <p className="text-[44px] leading-[44px] tracking-wide">0:</p>
        <div className="relative w-12">
          <AnimatePresence>
            <motion.p
              key={`first_digit_${firstDigit}`}
              className="text-[44px] leading-[44px] tracking-wide absolute left-0 tabular-nums"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={digits}
            >
              {firstDigit}
            </motion.p>
            <motion.p
              key={`second_digit_${secondDigit}`}
              className="text-[44px] leading-[44px] tracking-wide absolute right-0 tabular-nums"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={digits}
            >
              {secondDigit}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default Timer;

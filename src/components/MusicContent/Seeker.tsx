import { motion, useMotionValue } from "framer-motion";
import { useTimer } from "../../context/timer-context";
import { useEffect } from "react";

function Seeker() {
  const scaleX = useMotionValue(0);
  const { playing, time } = useTimer();
  const seconds = time % 60;
  const minutes = Math.floor(time / 60);
  const leadingZeroSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  useEffect(() => {
    if (playing) {
      scaleX.set(time / 187);
    }
  }, [playing, time, scaleX]);

  return (
    <div className="flex items-center gap-2">
      <p>
        {minutes}:{leadingZeroSeconds}
      </p>
      <div className="relative flex-1">
        <div className="absolute w-full h-1 bg-neutral-800"></div>
        <motion.div
          style={{ scaleX, transformOrigin: "left" }}
          className="absolute w-full h-1 bg-yellow-200/40"
        ></motion.div>
      </div>
      <p>3:07</p>
    </div>
  );
}

export default Seeker;

import { useEffect, useRef, useState } from "react";

function useResetTimer(resetAt: number) {
  const [playing, setPlaying] = useState(true);
  const toggle = () => setPlaying((p) => !p);
  const intervalRef = useRef<number | null>(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setTime((t) => (t === resetAt - 1 ? 0 : t + 1));
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [playing, resetAt]);

  return { playing, toggle, time };
}

export default useResetTimer;

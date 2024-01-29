import { ReactNode, createContext, useContext } from "react";
import useResetTimer from "../hooks/useResetTimer";

const timerContext = createContext<ReturnType<typeof useResetTimer> | null>(
  null
);

function TimerProvider({
  children,
  resetAt,
}: {
  children: ReactNode;
  resetAt: number;
}) {
  const value = useResetTimer(resetAt);

  return (
    <timerContext.Provider value={value}>{children}</timerContext.Provider>
  );
}

function useTimer() {
  const timerContextVal = useContext(timerContext);
  if (!timerContextVal) {
    throw new Error("useTimer must be used inside TimerProvider");
  }
  return timerContextVal;
}

export { timerContext, TimerProvider, useTimer };

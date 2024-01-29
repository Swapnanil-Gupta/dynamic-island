import type { Mode } from "../types";
import {
  createContext,
  type ReactNode,
  useState,
  useRef,
  useContext,
} from "react";

const modeContext = createContext<{
  mode: Mode;
  handleModeChange: (mode: Mode) => void;
} | null>(null);

function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("idle");
  const timeoutRef = useRef<number | null>(null);

  const handleModeChange = (mode: Mode) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setMode(mode);
    if (mode === "ring" || mode === "silent") {
      timeoutRef.current = setTimeout(() => setMode("idle"), 2000);
    }
  };

  return (
    <modeContext.Provider value={{ mode, handleModeChange }}>
      {children}
    </modeContext.Provider>
  );
}

function useMode() {
  const modeContextVal = useContext(modeContext);
  if (!modeContextVal) {
    throw new Error("useMode must be used inside ModeContextProvider");
  }
  return modeContextVal;
}

export { modeContext, ModeProvider, useMode };

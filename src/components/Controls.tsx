import Button from "./Button";
import { useMode } from "../context/mode-context";
import { Bell, BellOff, Timer, Music2 } from "lucide-react";

function Controls() {
  const { handleModeChange } = useMode();

  return (
    <div className="flex items-center justify-center h-full gap-2">
      <Button onClick={() => handleModeChange("idle")}>Idle</Button>
      <Button onClick={() => handleModeChange("ring")}>
        <span className="flex items-center gap-2">
          <Bell className="w-4 h-4" />
          Ring
        </span>
      </Button>
      <Button onClick={() => handleModeChange("silent")}>
        <span className="flex items-center gap-2">
          <BellOff className="w-4 h-4" />
          Silent
        </span>
      </Button>
      <Button onClick={() => handleModeChange("timer")}>
        <span className="flex items-center gap-2">
          <Timer className="w-4 h-4" />
          Timer
        </span>
      </Button>
      <Button onClick={() => handleModeChange("music")}>
        <span className="flex items-center gap-2">
          <Music2 className="w-4 h-4" />
          Music
        </span>
      </Button>
    </div>
  );
}

export default Controls;

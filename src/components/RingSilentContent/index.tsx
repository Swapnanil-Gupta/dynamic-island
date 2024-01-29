import { motion, Variants } from "framer-motion";
import { useMode } from "../../context/mode-context";
import RedPill from "./RedPill";
import Bell from "./Bell";
import Text from "./Text";

const ringSilentContainer: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.25 },
  },
};

function RingSilentContent() {
  const { mode } = useMode();

  return (
    <motion.div
      key="ringSilentContainer"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={ringSilentContainer}
      className="relative flex items-center justify-between w-full h-full overflow-hidden"
    >
      <RedPill />
      <Bell />
      {mode === "ring" && <Text>Ring</Text>}
      {mode === "silent" && <Text className="text-red-500">Silent</Text>}
    </motion.div>
  );
}

export default RingSilentContent;

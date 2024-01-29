import { HTMLProps } from "react";
import { motion, Variants } from "framer-motion";
import cn from "clsx";

const ringSilentText: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

function Text({
  className,
  children,
}: {
  className?: HTMLProps<HTMLElement>["className"];
  children: string;
}) {
  return (
    <motion.p
      key={`${children}_text`}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={ringSilentText}
      className={cn("font-medium", className)}
    >
      {children}
    </motion.p>
  );
}

export default Text;

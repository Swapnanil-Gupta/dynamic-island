import { forwardRef, ButtonHTMLAttributes } from "react";
import cn from "clsx";

const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...rest }, ref) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg text-neutral-100 bg-neutral-950 hover:bg-neutral-800 active:bg-neutral-700 focus:outline-none focus:ring focus:ring-neutral-400",
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;

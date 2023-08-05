import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function Button({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  function clickHandler() {
    console.log("Log");
  }
  return (
    <button
      className={twMerge(
        "bg-green-500 rounded-lg py-1 px-2 hover:bg-green-400 transition-all duration-200",
        className
      )}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}

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
      className={twMerge("bg-green-100", className)}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}

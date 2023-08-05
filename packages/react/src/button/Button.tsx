import { type VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/classnames";

const buttonVariants = cva(
  "transition-all duration-200 flex gap-1 items-center font-semibold disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 text-white hover:bg-primary-400 focus:ring-[#E4D8FD] focus-visible:outline-none focus:ring-4 disabled:bg-primary-50",
        secondary:
          "bg-neutral-200 text-theme-text-primary hover:bg-neutral-300 focus-visible:outline-none active:bg-neutral-400 focus:ring-4 focus:ring-[#E5E7EB] disabled:text-neutral-100",
        transparent:
          "bg-transparent text-theme-text-secondary hover:bg-neutral-300 hover:text-theme-text-primary focus:bg-neutral-400 focus:outline-none focus:ring-4 focus:ring-[#E5E7EB] disabled:text-theme-text-tertiary",
        headless: "",
        danger:
          "bg-error-600 text-white hover:bg-error-500 focus:ring-error-50 focus:bg-error-600 focus-visible:outline-none focus:ring-4 disabled:bg-error-50",
      },
      size: {
        sm: "rounded-[8px] py-1 px-2",
        lg: "rounded-[8px] py-2 px-3",
        xl: "rounded-[8px] py-3 px-5",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

type ButtonVariantsProps = VariantProps<typeof buttonVariants>;

interface ButtonVariants
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<ButtonVariantsProps, "variant">,
    Required<Pick<ButtonVariantsProps, "variant">> {}

function Button({
  className,
  children,
  variant,
  size,
  ...rest
}: ButtonVariants) {
  return (
    <button
      className={cn(buttonVariants({ size, variant }), className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;

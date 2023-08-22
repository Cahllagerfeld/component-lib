import { type VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactElement } from "react";
import { cn } from "../lib/classnames";
import React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";

const buttonVariants = cva(
	"transition-all group duration-200 flex gap-1 items-center font-semibold disabled:pointer-events-none",
	{
		variants: {
			emphasis: {
				bold: "",
				subtle: "",
				minimal: ""
			},
			variant: {
				primary: "",
				secondary: "",
				danger: ""
			},
			size: {
				sm: "rounded-lg py-1 px-2",
				lg: "rounded-lg py-2 px-3",
				xl: "rounded-lg py-3 px-5"
			}
		},
		compoundVariants: [
			// Primary
			{
				emphasis: "bold",
				variant: "primary",
				class:
					"bg-primary-500 text-white hover:bg-primary-400 focus:ring-[#E4D8FD] active:bg-primary-500 focus-visible:outline-none focus:ring-4 disabled:bg-primary-50"
			},
			{
				emphasis: "subtle",
				variant: "primary",
				class:
					"border border-primary-400 text-primary-600 hover:bg-primary-50 active:bg-primary-100 focus:ring-[#E4D8FD] focus:ring-4 disabled:border-primary-100 disabled:text-primary-100"
			},
			{
				emphasis: "minimal",
				variant: "primary",
				class:
					"text-primary-600 hover:bg-primary-50 active:bg-primary-100 focus:ring-[#E4D8FD] focus:ring-4 disabled:text-primary-100"
			},
			// Secondary
			{
				emphasis: "bold",
				variant: "secondary",
				class:
					"bg-neutral-200 text-theme-text-primary hover:bg-neutral-300 focus-visible:outline-none active:bg-neutral-400 focus:ring-4 focus:ring-[#E5E7EB] disabled:text-neutral-300"
			},
			{
				emphasis: "subtle",
				variant: "secondary",
				class:
					"border border-neutral-300 text-neutral-900 hover:bg-neutral-100 active:border-neutral-400 active:bg-neutral-300 focus:ring-4 focus:ring-neutral-100 disabled:border-neutral-300 disabled:text-neutral-300"
			},
			{
				emphasis: "minimal",
				variant: "secondary",
				class:
					"text-primary-900 hover:bg-neutral-200 active:bg-neutral-300 focus:ring-4 focus:ring-neutral-100 disabled:text-neutral-300"
			},
			// Danger
			{
				emphasis: "bold",
				variant: "danger",
				class:
					"bg-error-600 text-white hover:bg-error-500 focus:ring-error-50 focus:bg-error-600 focus-visible:outline-none focus:ring-4 disabled:bg-error-100"
			},
			{
				emphasis: "subtle",
				variant: "danger",
				class:
					"border border-error-600 text-error-700 hover:bg-error-50 active:bg-error-100 focus:ring-4 focus:ring-error-50 disabled:border-error-100 disabled:text-error-100"
			},
			{
				emphasis: "minimal",
				variant: "danger",
				class:
					"text-error-700 hover:bg-error-50 active:bg-error-100 focus:ring-4 focus:ring-error-50 disabled:text-error-100"
			}
		],
		defaultVariants: {
			size: "sm",
			emphasis: "bold",
			variant: "primary"
		}
	}
);

const iconVariants = cva("w-5 h-5 transition-all duration-200", {
	variants: {
		variant: {
			primary: "stroke-white",
			secondary: "stroke-theme-text-primary group-disabled:stroke-neutral-300",
			danger: "stroke-white"
		}
	}
});

type ButtonVariantsProps = VariantProps<typeof buttonVariants>;

interface ButtonVariants
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		Omit<ButtonVariantsProps, "variant" | "emphasis">,
		Required<Pick<ButtonVariantsProps, "variant" | "emphasis">> {
	leftIcon?: ReactElement;
	rightIcon?: ReactElement;
	asChild?: boolean;
}

export function Button({
	className,
	children,
	variant,
	emphasis,
	size,
	leftIcon,
	rightIcon,
	asChild,
	...rest
}: ButtonVariants) {
	function prepareIcon(icon: ReactElement) {
		return React.cloneElement(icon, {
			className: cn(icon.props.className, iconVariants({ variant }))
		});
	}

	const Comp = asChild ? Slot : "button";

	return (
		<Comp className={cn(buttonVariants({ size, variant, emphasis }), className)} {...rest}>
			{leftIcon && prepareIcon(leftIcon)}
			<Slottable>{children}</Slottable>
			{rightIcon && prepareIcon(rightIcon)}
		</Comp>
	);
}

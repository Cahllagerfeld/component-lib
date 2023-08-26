import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import CheckboxTick from "../assets/icons/Tick.svg";

import { clsx } from "clsx";
import { cn } from "../lib/classnames";

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...rest }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(
			clsx([
				"flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border border-theme-border-bold",
				"hover:ring-4 hover:ring-theme-surface-tertiary",
				"focus:outline-none focus:ring-4 focus:ring-theme-surface-tertiary",
				"data-[state=checked]:border-theme-surface-strong data-[state=checked]:bg-theme-surface-strong data-[state=checked]:active:border-primary-200 data-[state=checked]:active:bg-primary-200",
				"active:bg-theme-surface-tertiary",
				"disabled:pointer-events-none disabled:border-neutral-300 disabled:data-[state=checked]:border-neutral-300 disabled:data-[state=checked]:bg-neutral-300"
			]),
			className
		)}
		{...rest}
	>
		<CheckboxPrimitive.Indicator>
			<CheckboxTick className="h-2 w-2" />
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
));

export { Checkbox };

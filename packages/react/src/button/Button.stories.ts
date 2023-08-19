import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { PlusIcon } from "./Plus";
import { ReactElement } from "react";
import { RightArrowIcon } from "./RightArrow";

const buttonLabel = "Click me";

const meta: Meta<typeof Button> = {
	title: "Button",
	component: Button,
	tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryBold: Story = {
	name: "Primary Bold",
	args: {
		children: buttonLabel,
		variant: "primary",
		emphasis: "bold",
		size: "lg",
		disabled: false
	}
};

export const PrimarySubtle: Story = {
	name: "Primary Subtle",
	args: {
		children: buttonLabel,
		variant: "primary",
		emphasis: "subtle",
		size: "lg",
		disabled: false
	}
};

export const PrimaryMinimal: Story = {
	name: "Primary Minimal",
	args: {
		children: buttonLabel,
		variant: "primary",
		emphasis: "minimal",
		size: "lg",
		disabled: false
	}
};

export const SecondaryBold: Story = {
	name: "Secondary Bold",
	args: {
		children: buttonLabel,
		variant: "secondary",
		emphasis: "bold",
		size: "lg",
		disabled: false
	}
};

export const SecondarySubtle: Story = {
	name: "Secondary Subtle",
	args: {
		children: buttonLabel,
		variant: "secondary",
		emphasis: "subtle",
		size: "lg",
		disabled: false
	}
};

export const SecondaryMinimal: Story = {
	name: "Secondary Minimal",
	args: {
		children: buttonLabel,
		variant: "secondary",
		emphasis: "minimal",
		size: "lg",
		disabled: false
	}
};

export const DangerBold: Story = {
	name: "Danger Bold",
	args: {
		children: buttonLabel,
		variant: "danger",
		emphasis: "bold",
		size: "lg",
		disabled: false
	}
};

export const DangerSubtle: Story = {
	name: "Danger Subtle",
	args: {
		children: buttonLabel,
		variant: "danger",
		emphasis: "subtle",
		size: "lg",
		disabled: false
	}
};

export const DangerMinimal: Story = {
	name: "Danger Minimal",
	args: {
		children: buttonLabel,
		variant: "danger",
		emphasis: "minimal",
		size: "lg",
		disabled: false
	}
};
export const IconButton: Story = {
	name: "Icon Button",
	args: {
		children: buttonLabel,
		variant: "primary",
		emphasis: "bold",
		size: "lg",
		leftIcon: PlusIcon(),
		rightIcon: RightArrowIcon()
	}
};

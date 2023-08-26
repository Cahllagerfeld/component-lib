import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
	title: "Checkbox",
	component: Checkbox,
	parameters: {
		layout: "centered"
	},
	tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
	name: "Default Checkbox"
};

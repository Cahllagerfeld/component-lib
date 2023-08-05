import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryBold: Story = {
  name: "Primary Bold",
  args: {
    children: "Hello World",
    variant: "primary",
    emphasis: "bold",
    size: "lg",
    disabled: false,
  },
};

export const PrimarySubtle: Story = {
  name: "Primary Subtle",
  args: {
    children: "Hello World",
    variant: "primary",
    emphasis: "subtle",
    size: "lg",
    disabled: false,
  },
};

export const PrimaryMinimal: Story = {
  name: "Primary Minimal",
  args: {
    children: "Hello World",
    variant: "primary",
    emphasis: "minimal",
    size: "lg",
    disabled: false,
  },
};

export const Secondary: Story = {
  name: "Secondary",
  args: {
    children: "Hello World",
    variant: "secondary",
    emphasis: "bold",
    size: "lg",
    disabled: false,
  },
};

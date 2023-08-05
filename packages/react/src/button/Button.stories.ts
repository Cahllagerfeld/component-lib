// List.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { default as Button } from "./Button";

//👇 Instead of importing ListItem, we import the stories

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  name: "Primary",
  args: {
    children: "Hello World",
    variant: "primary",
    size: "lg",
    disabled: false,
  },
};

export const Secondary: Story = {
  name: "Secondary",
  args: {
    children: "Hello World",
    variant: "secondary",
    size: "lg",
    disabled: false,
  },
};

// List.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

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

export const OneItem: Story = {
  name: "Primary",
  args: {
    children: "Hello World",
  },
};

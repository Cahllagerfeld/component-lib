import { StorybookConfig } from "@storybook/react-vite";
import svgr from "vite-plugin-svgr";

// /** @type { import('@storybook/react-vite').StorybookConfig } */
const config: StorybookConfig = {
	viteFinal: async (config) => {
		config.plugins?.push(svgr({ exportAsDefault: true }));
		return config;
	},
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@storybook/addon-interactions",
		"@storybook/addon-a11y",
		{
			name: "@storybook/addon-styling",
			options: {}
		}
	],
	framework: {
		name: "@storybook/react-vite",
		options: {}
	},
	docs: {
		autodocs: "tag"
	}
};
export default config;

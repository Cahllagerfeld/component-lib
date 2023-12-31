import plugin from "tailwindcss/plugin";

export const zenmlPlugin = plugin(
	function ({ addBase }) {
		addBase({
			":root": {
				"--color-primary-900": "258 66% 7%",
				"--color-primary-800": "259 66% 14%",
				"--color-primary-700": "259 68% 21%",
				"--color-primary-600": "260 67% 28%",
				"--color-primary-500": "259 67% 35%",
				"--color-primary-400": "260 89% 60%",
				"--color-primary-300": "260 89% 68%",
				"--color-primary-200": "260 89% 76%",
				"--color-primary-100": "260 90% 84%",
				"--color-primary-050": "259 90% 92%",
				"--color-primary-025": "259 90% 96%",
				"--color-neutral-900": "221 39% 11%",
				"--color-neutral-800": "215 28% 17%",
				"--color-neutral-700": "217 19% 27%",
				"--color-neutral-600": "215 14% 34%",
				"--color-neutral-500": "220 9% 46%",
				"--color-neutral-400": "218 11% 65%",
				"--color-neutral-300": "216 12% 84%",
				"--color-neutral-200": "220 13% 91%",
				"--color-neutral-100": "220 14% 96%",
				"--color-neutral-050": "210 20% 98%",
				"--color-neutral-000": "0 0% 100%",
				"--color-error-900": "4 59% 19%",
				"--color-error-800": "3 58% 29%",
				"--color-error-700": "4 59% 39%",
				"--color-error-600": "4 59% 48%",
				"--color-error-500": "4 81% 58%",
				"--color-error-400": "4 81% 65%",
				"--color-error-300": "4 82% 72%",
				"--color-error-200": "3 81% 79%",
				"--color-error-100": "4 81% 86%",
				"--color-error-050": "3 81% 92%",
				"--color-warning-500": "32 95% 51%",
				"--color-success-900": "137 75% 14%",
				"--color-success-800": "137 75% 22%",
				"--color-success-700": "137 74% 29%",
				"--color-success-600": "137 75% 36%",
				"--color-success-500": "137 74% 43%",
				"--color-success-400": "137 56% 53%",
				"--color-success-300": "137 56% 62%",
				"--color-success-200": "137 56% 71%",
				"--color-success-100": "137 57% 81%",
				"--color-success-050": "137 55% 89%",
				"--color-blue-900": "208 88% 10%",
				"--color-blue-800": "209 88% 17%",
				"--color-blue-700": "208 89% 25%",
				"--color-blue-600": "208 89% 33%",
				"--color-blue-500": "209 89% 42%",
				"--color-blue-400": "209 90% 50%",
				"--color-blue-300": "209 90% 58%",
				"--color-blue-200": "208 89% 67%",
				"--color-blue-100": "208 89% 75%",
				"--color-blue-050": "209 90% 84%",
				"--color-blue-025": "208 88% 90%",
				"--color-text-primary": "var(--color-primary-900)",
				"--color-text-secondary": "var(--color-neutral-500)",
				"--color-text-tertiary": "var(--color-neutral-300)",
				"--color-text-negative": "var(--color-neutral-000)",
				"--color-text-brand": "var(--color-primary-500)",
				"--color-text-error": "var(--color-error-500)",
				"--color-text-warning": "var(--color-warning-500)",
				"--color-text-success": "var(--color-success-500)",
				"--color-surface-primary": "var(--color-neutral-000)",
				"--color-surface-secondary": "var(--color-neutral-050)",
				"--color-surface-tertiary": "var(--color-neutral-100)",
				"--color-surface-strong": "var(--color-primary-400)",
				"--color-border-minimal": "var(--color-neutral-100)",
				"--color-border-moderate": "var(--color-neutral-200)",
				"--color-border-bold": "var(--color-neutral-500)"
			}
		});
	},
	{
		theme: {
			spacing: {
				0: "0rem/* 0px */",
				0.25: "0.125rem/* 2px */",
				0.5: "0.25rem/* 4px */",
				1: "0.5rem/* 8px */",
				2: "0.75rem/* 12px */",
				3: "1rem/* 16px */",
				4: "1.25rem/* 20px */",
				5: "1.5rem/* 24px */",
				6: "2rem/* 32px */",
				7: "2.5rem/* 40px */",
				8: "3rem/* 48px */",
				9: "4rem/* 64px */",
				10: "4.5rem/* 72px */",
				11: "5rem/* 80px */",
				12: "6rem/* 96px */"
			},
			fontSize: {
				"text-xs": ["0.75rem/* 12px */", "1.125rem"],
				"text-sm": ["0.875rem/* 14px */", "1.25rem"],
				"text-md": ["1rem/* 16px */", "1.5rem"],
				"text-lg": ["1.125rem/* 18px */", "1.75rem"],
				"text-xl": ["1.25rem/* 20px */", "1.875rem"],
				"display-xs": ["1.5rem/* 24px */", "2rem"],
				"display-sm": ["1.875rem/* 30px */", "2.375rem"],
				"display-md": [
					"2.25rem /* 36px */",
					{
						letterSpacing: "-0.045rem",
						lineHeight: "2.75rem"
					}
				],
				"display-lg": [
					"3rem/* 48px */",
					{
						letterSpacing: "-0.06rem",
						lineHeight: "3.75rem"
					}
				],
				"display-xl": ["3.75rem/* 60px */", "4.5rem"]
			},
			extend: {
				colors: {
					theme: {
						text: {
							primary: "hsl(var(--color-text-primary) / <alpha-value>)",
							secondary: "hsl(var(--color-text-secondary) / <alpha-value>)",
							tertiary: "hsl(var(--color-text-tertiary) / <alpha-value>)",
							negative: "hsl(var(--color-text-negative) / <alpha-value>)",
							brand: "hsl(var(--color-text-brand) / <alpha-value>)",
							error: "hsl(var(--color-text-error) / <alpha-value>)",
							warning: "hsl(var(--color-text-warning) / <alpha-value>)",
							success: "hsl(var(--color-text-success) / <alpha-value>)"
						},
						surface: {
							primary: "hsl(var(--color-surface-primary) / <alpha-value>)",
							secondary: "hsl(var(--color-surface-secondary) / <alpha-value>)",
							tertiary: "hsl(var(--color-surface-tertiary) / <alpha-value>)",
							strong: "hsl(var(--color-surface-strong) / <alpha-value>)"
						},
						border: {
							minimal: "hsl(var(--color-border-minimal) / <alpha-value>)",
							moderate: "hsl(var(--color-border-moderate) / <alpha-value>)",
							bold: "hsl(var(--color-border-bold) / <alpha-value>)"
						}
					},
					primary: {
						900: "hsl(var(--color-primary-900) / <alpha-value>)",
						800: "hsl(var(--color-primary-800) / <alpha-value>)",
						700: "hsl(var(--color-primary-700) / <alpha-value>)",
						600: "hsl(var(--color-primary-600) / <alpha-value>)",
						500: "hsl(var(--color-primary-500) / <alpha-value>)",
						400: "hsl(var(--color-primary-400) / <alpha-value>)",
						300: "hsl(var(--color-primary-300) / <alpha-value>)",
						200: "hsl(var(--color-primary-200) / <alpha-value>)",
						100: "hsl(var(--color-primary-100) / <alpha-value>)",
						50: "hsl(var(--color-primary-050) / <alpha-value>)",
						25: "hsl(var(--color-primary-025) / <alpha-value>)"
					},
					neutral: {
						900: "hsl(var(--color-neutral-900) / <alpha-value>)",
						800: "hsl(var(--color-neutral-800) / <alpha-value>)",
						700: "hsl(var(--color-neutral-700) / <alpha-value>)",
						600: "hsl(var(--color-neutral-600) / <alpha-value>)",
						500: "hsl(var(--color-neutral-500) / <alpha-value>)",
						400: "hsl(var(--color-neutral-400) / <alpha-value>)",
						300: "hsl(var(--color-neutral-300) / <alpha-value>)",
						200: "hsl(var(--color-neutral-200) / <alpha-value>)",
						100: "hsl(var(--color-neutral-100) / <alpha-value>)",
						50: "hsl(var(--color-neutral-050) / <alpha-value>)"
					},
					error: {
						900: "hsl(var(--color-error-900) / <alpha-value>)",
						800: "hsl(var(--color-error-800) / <alpha-value>)",
						700: "hsl(var(--color-error-700) / <alpha-value>)",
						600: "hsl(var(--color-error-600) / <alpha-value>)",
						500: "hsl(var(--color-error-500) / <alpha-value>)",
						400: "hsl(var(--color-error-400) / <alpha-value>)",
						300: "hsl(var(--color-error-300) / <alpha-value>)",
						200: "hsl(var(--color-error-200) / <alpha-value>)",
						100: "hsl(var(--color-error-100) / <alpha-value>)",
						50: "hsl(var(--color-error-050) / <alpha-value>)"
					},
					warning: {
						500: "hsl(var(--color-warning-500) / <alpha-value>)"
					},
					success: {
						900: "hsl(var(--color-success-900) / <alpha-value>)",
						800: "hsl(var(--color-success-800) / <alpha-value>)",
						700: "hsl(var(--color-success-700) / <alpha-value>)",
						600: "hsl(var(--color-success-600) / <alpha-value>)",
						500: "hsl(var(--color-success-500) / <alpha-value>)",
						400: "hsl(var(--color-success-400) / <alpha-value>)",
						300: "hsl(var(--color-success-300) / <alpha-value>)",
						200: "hsl(var(--color-success-200) / <alpha-value>)",
						100: "hsl(var(--color-success-100) / <alpha-value>)",
						50: "hsl(var(--color-success-050) / <alpha-value>)"
					},
					blue: {
						900: "hsl(var(--color-blue-900) / <alpha-value>)",
						800: "hsl(var(--color-blue-800) / <alpha-value>)",
						700: "hsl(var(--color-blue-700) / <alpha-value>)",
						600: "hsl(var(--color-blue-600) / <alpha-value>)",
						500: "hsl(var(--color-blue-500) / <alpha-value>)",
						400: "hsl(var(--color-blue-400) / <alpha-value>)",
						300: "hsl(var(--color-blue-300) / <alpha-value>)",
						200: "hsl(var(--color-blue-200) / <alpha-value>)",
						100: "hsl(var(--color-blue-100) / <alpha-value>)",
						50: "hsl(var(--color-blue-050) / <alpha-value>)",
						25: "hsl(var(--color-blue-025) / <alpha-value>)"
					}
				},
				backgroundImage: {
					"gradient-dark":
						"linear-gradient(to bottom right, hsl(var(--color-primary-500)), hsl(var(--color-primary-400)))"
				},
				animation: {
					"spin-slow": "spin 2s linear infinite"
				}
			}
		}
	}
);

/** @type {import('prettier').Config} */
const config = {
	endOfLine: "lf",
	printWidth: 100,
	proseWrap: "always",
	semi: true,
	singleQuote: false,
	/** Used to calculate print width. */
	tabWidth: 2,
	trailingComma: "all",
	useTabs: true,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};

export default config;

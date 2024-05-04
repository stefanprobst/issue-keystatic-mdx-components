import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import keystatic from "@keystatic/astro";

export default defineConfig({
	integrations: [react(), mdx(), keystatic()],
	output: "hybrid",
	server: { port: 3000 },
});

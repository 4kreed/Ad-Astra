import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
    site: "https://4kreed.github.io",
    base: "Ad-Astra",
    integrations: [
        expressiveCode({
            themes: ["dracula-soft"],
            styleOverrides: {
                codeBackground: "transparent",
                borderColor: "white",
            },
        }),
        mdx(),
        sitemap(),
        tailwind(),
    ],
});

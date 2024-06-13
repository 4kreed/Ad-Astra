/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                header: ["Adam CG Pro", "sans-serif"],
                404: ["Nova Square", "sans-serif"],
                chakra: ["Chakra Petch", "sans-serif"],
            },
            transitionTimingFunction: {
                "custom-bezier": "cubic-bezier(0.9, 0, 0.3, 0.9)",
            },
            keyframes: {
                floatAnimation: {
                    "0%": { transform: "scaleX(-1) translateY(0)" },
                    "50%": { transform: "scaleX(-1) translateY(-20px)" },
                    "100%": { transform: "scaleX(-1) translateY(0)" },
                },
                moveStars: {
                    from: { transform: "translateY(0)" },
                    to: { transform: "translateY(-100vh) " },
                },
            },
            animation: {
                float: "floatAnimation 4s ease-in-out infinite",
                moveStars: "moveStars var(--duration) linear infinite",
            },
            boxShadow: {
                "space-layer": "var(--space-layer)",
            },
            objectPosition: {
                "top-crop": "0 -15px",
            },
        },
    },
    variants: {
        objectPosition: ["responsive"],
    },
    plugins: [],
};

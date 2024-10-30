/** @type {import('tailwindcss').Config} */
import flattenColors from "tailwindcss/lib/util/flattenColorPalette";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nova: ["'Nova Cut'", "serif"],
        inter: ["inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        main: "#F5583C",
        second: "#1372ED",
        third: "#01B1FF",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            "--text-shadow-color": value,
          }),
        },
        {
          values: flattenColors(theme("colors", {})),
          type: "color",
        },
      );

      matchUtilities(
        {
          "text-shadow": (value) => {
            const shadows = [
              `calc(var(--text-shadow-size) * 1) calc(var(--text-shadow-size) * 1) 0 var(--text-shadow-color, hotpink)`,
              `calc(var(--text-shadow-size) * -1) calc(var(--text-shadow-size) * -1) 0 var(--text-shadow-color, hotpink)`,
              `calc(var(--text-shadow-size) * 1) calc(var(--text-shadow-size) * -1) 0 var(--text-shadow-color, hotpink)`,
              `calc(var(--text-shadow-size) * -1) calc(var(--text-shadow-size) * 1) 0 var(--text-shadow-color, hotpink)`,
              `calc(var(--text-shadow-size) * 1) 0 0 var(--text-shadow-color, hotpink)`,
              `calc(var(--text-shadow-size) * -1) 0 0 var(--text-shadow-color, hotpink)`,
              `0 calc(var(--text-shadow-size) * -1) 0 var(--text-shadow-color, hotpink)`,
              `0 calc(var(--text-shadow-size) * 1) 0 var(--text-shadow-color, hotpink)`,
            ];

            return {
              "--text-shadow-size": value,
              "text-shadow": shadows.join(", "),
            };
          },
        },
        {
          values: theme("spacing", {}),
          type: "length",
        },
      );
    },
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          // map to bg-radient-[*]
          "bg-radient": (value) => ({
            "background-image": `radial-gradient(${value},var(--tw-gradient-stops))`,
          }),
        },
        { values: theme("radialGradients") },
      );
    },
  ],
};

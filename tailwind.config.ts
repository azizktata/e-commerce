import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'primary': 'var(--bg-primary-color)',
        'secondary': 'var(--bg-secondary-color)',
        'darler-secondary': 'var(--bg-darker-secondary-color)',
        'btn-text': 'var(--btn-text-color)',
        'bg-footer': 'var(--bg-footer-color)',
      },
    },
  },
  plugins: [],
};
export default config;

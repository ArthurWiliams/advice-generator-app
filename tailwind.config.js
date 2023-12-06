/** @type {import('tailwindcss').Config} */

import DEFAULT_THEME from 'tailwindcss/defaultTheme';

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      "light-cyan": "hsl(193, 38%, 86%)",
      "neon-green": "hsl(150, 100%, 66%)",
      "grayish-blue": "hsl(217, 19%, 38%)",
      "dark-grayish-blue": "hsl(217, 19%, 24%)",
      "dark-blue": "hsl(218, 23%, 16%)"
    },
    fontFamily: {
      sans: ["Manrope", ...DEFAULT_THEME.fontFamily.sans]
    },
  },
}


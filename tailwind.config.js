/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Stitch AI Material Tokens
        "primary": "#2d4031",
        "primary-container": "#445747",
        "on-primary": "#ffffff",
        "on-primary-container": "#b6ccb7",
        "secondary": "#54624f",
        "secondary-container": "#d4e4cc",
        "on-secondary-container": "#586753",
        "surface": "#f7faf4",
        "surface-container-low": "#f2f5ee",
        "surface-container": "#ecefe8",
        "surface-container-high": "#e6e9e3",
        "surface-container-highest": "#e0e3dd",
        "surface-container-lowest": "#ffffff",
        "on-surface": "#191d19",
        "on-surface-variant": "#434843",
        "outline": "#737872",
        "outline-variant": "#c3c8c1",
        "background": "#f7faf4",
        "surface-tint": "#506353",
        "inverse-surface": "#2d312d",
        "inverse-on-surface": "#eff2eb",
        "error": "#ba1a1a",
        "error-container": "#ffdad6",

        // Classic aliases for full backwards compatibility
        cream: {
          DEFAULT: '#F8F6F0',
          50: '#FCFBF8',
          100: '#F8F6F0',
          200: '#F0EEE6',
          300: '#E5E1D7',
        },
        sage: {
          DEFAULT: '#7C8B76',
          light: '#94A38E',
          dark: '#5D6D58',
          50: '#F4F6F3',
          100: '#E4E9E2',
        },
        forest: {
          DEFAULT: '#445747',
          light: '#566D5A',
          dark: '#2d4031',
        },
        charcoal: {
          DEFAULT: '#191d19',
          light: '#434843',
        },
        mutedText: '#686B63',
        subtleBorder: '#E5E1D7',
      },
      spacing: {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "2rem",
        "space-xl": "3.5rem",
        "margin": "2rem",
        "gutter": "1.5rem",
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        "display-lg": ['"Playfair Display"', 'Georgia', 'serif'],
        "headline-lg": ['"Playfair Display"', 'Georgia', 'serif'],
        "headline-md": ['"Playfair Display"', 'Georgia', 'serif'],
        "headline-sm": ['"Playfair Display"', 'Georgia', 'serif'],
        "body-lg": ['Inter', 'sans-serif'],
        "body-md": ['Inter', 'sans-serif'],
        "body-sm": ['Inter', 'sans-serif'],
        "label-lg": ['Inter', 'sans-serif'],
        "label-sm": ['Inter', 'sans-serif'],
        "title-lg": ['Inter', 'sans-serif'],
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "400" }],
        "headline-lg": ["36px", { lineHeight: "44px", letterSpacing: "-0.015em", fontWeight: "400" }],
        "headline-md": ["28px", { lineHeight: "36px", letterSpacing: "-0.01em", fontWeight: "500" }],
        "headline-sm": ["22px", { lineHeight: "30px", letterSpacing: "0em", fontWeight: "500" }],
        "title-lg": ["18px", { lineHeight: "26px", letterSpacing: "0em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "0em", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "26px", letterSpacing: "0em", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "22px", letterSpacing: "0em", fontWeight: "400" }],
        "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "500" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.04em", fontWeight: "500" }],
      },
      boxShadow: {
        'soft': '0 1px 8px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px -2px rgba(41, 45, 41, 0.06)',
        'hover': '0 10px 30px -4px rgba(41, 45, 41, 0.1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.35s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-down': 'fadeInDown 0.35s ease-out forwards',
        'scale-in': 'scaleIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }
    },
  },
  plugins: [],
}

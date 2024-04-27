/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-700": "#201353",
        "generic-white": "#fff",
        "neutral-300": "#d1d5db",
        "primary-500": "#35208d",
        "neutral-900": "#111827",
        "primary-600": "#2b1970",
        gray: {
          "100": "#8d8989",
          "200": "rgba(0, 0, 0, 0.4)",
          "300": "rgba(255, 255, 255, 0.5)",
          "400": "rgba(0, 0, 0, 0.7)",
        },
        "neutral-500": "#6b7280",
        slateblue: "#6954bf",
        whitesmoke: "#f9f9f9",
        lightgray: {
          "100": "#d3d3d3",
          "200": "#cccfd1",
        },
        "primary-900": "#0b071d",
        "neutral-100": "#f3f4f6",
        black: "#000",
        "neutral-400": "#9ca3af",
        "neutral-700": "#374151",
        "neutral-800": "#1f2937",
        "neutral-200": "#e5e7eb",
        "secondary-100": "#ccfaf3",
        "primary-200": "#a493e6",
        powderblue: {
          "100": "#c9e3de",
          "200": "#b3e0d9",
        },
        "neutral-600": "#4b5563",
        "primary-100": "#d1c9f3",
        "primary-50": "#e6e2f8",
        thistle: {
          "100": "#ccc9de",
          "200": "#b8b0d9",
        },
        silver: {
          "100": "#b8bdc2",
          "200": "rgba(184, 189, 194, 0.09)",
        },
        "secondary-500": "#15c4aa",
        "primary-800": "#160d3a",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#d6e3db",
          "300": "#d9dbde",
        },
        "secondary-50": "#e3fcf8",
        "warning-200": "#fde68a",
        "warning-50": "#fffbeb",
        antiquewhite: "#e6e0d1",
        khaki: "#e3cc70",
        "warning-500": "#ffd700",
        "success-200": "#bbf7d0",
        "success-50": "#f0fdf4",
        darkseagreen: "#a1deb8",
        "success-500": "#22c55e",
        lightseagreen: "#00ab91",
        "neutral-50": "#f9fafb",
      },
      spacing: {},
      fontFamily: {
        "paragraph-medium-medium": "Inter",
      },
      borderRadius: {
        "10xs": "3px",
        "4xs": "9px",
        "47xl": "66px",
        "81xl": "100px",
        xl: "20px",
        lgi: "19px",
        "7xl": "26px",
        "8xs-7": "4.7px",
        "6xs": "7px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      sm: "14px",
      xl: "20px",
      "5xl": "24px",
      lgi: "19px",
      lg: "18px",
      "9xl": "28px",
      "3xl": "22px",
      "13xl": "32px",
      "21xl": "40px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      lg: {
        max: "1200px",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

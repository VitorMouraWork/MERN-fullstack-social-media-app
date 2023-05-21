// color design tokens export
export const colorTokens = {
    grey: {
        0: "#FFFFFF",
        10: "#F6F6F6",
        50: "#F0F0F0",
        100: "#D9D9D9",
        200: "#C0C0C0",
        300: "#A3A3A3",
        400: "#858585",
        500: "#5A5A5A",
        600: "#5A5A5A",
        700: "#333333",
        800: "#262626",
        900: "#0A0A0A",
        1000: "#000000",
      },
      primary: {
        50: "#EFC8C4",
        100: "#EFB4AE",
        200: "#EFA099",
        300: "#EF7B70",
        400: "#EF5E51",
        500: "#F24333",
        600: "#AD3126",
        700: "#7A221A",
        800: "#3F120E",
        900: "#110504",
      },
    };

    // mui theme settings

    export const themeSettings = (mode) => {
      return {
        palette: {
          mode: mode,
          ...(mode === "dark" 
            ? {
                //palette values for dark mode
                primary: {
                  dark: colorTokens.primary[200],
                  main: colorTokens.primary[500],
                  light: colorTokens.primary[800]
                },
                neutral: {
                  dark: colorTokens.grey[100],
                  main: colorTokens.grey[200],
                  mediumMain: colorTokens.grey[300],
                  medium: colorTokens.grey[400],
                  light: colorTokens.grey[700]
                },
                background: {
                  default: colorTokens.grey[900],
                  alt: colorTokens.grey[800],
                },
              } 
            : {
                //palette values for light mode
                primary: {
                  dark: colorTokens.primary[700],
                  main: colorTokens.primary[500],
                  light: colorTokens.primary[50]
                },
                neutral: {
                  dark: colorTokens.grey[700],
                  main: colorTokens.grey[500],
                  mediumMain: colorTokens.grey[400],
                  medium: colorTokens.grey[300],
                  light: colorTokens.grey[50]
                },
                background: {
                  default: colorTokens.grey[10],
                  alt: colorTokens.grey[0],
                },
              }),
    },
    typography: {
      fontFamily: ["Lexend", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Lexend", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Lexend", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Lexend", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Lexend", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Lexend", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Lexend", "sans-serif"].join(","),
        fontSize: 14,
      }
    }
  }
}
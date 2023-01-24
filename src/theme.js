import { createTheme } from '@mui/material/styles';
export const colors = {
	grey: {
		dark: 'rgb(138, 147, 155)',
		light: 'rgb(112, 122, 131)',
	},
	black: {
		dark: 'rgb(48, 51, 57)',
		light: 'rgb(255, 255, 255)',
	}
}
const theme = (mode = 'dark') => createTheme({
  palette: {
		mode: mode,
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#1868B7',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
		grey: colors.grey,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
	components: {
		MuiButtonBase: {
			styleOverrides: {
				root: {
					textTransform: 'none !important',
				}
			}
		}
	},
	typography: {
		htmlFontSize: 10,
		fontSize: 16,
		fontFamily: 'Poppins, sans-serif',
		h1: {
			fontSize: '4.8rem',
		},
		h2: {
			fontSize: '4.rem'
		},
		h3: {
			fontSize: '3.2rem',
			fontWeight: 600,
		}
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 768,
			lg: 1024,
			xl: 1200,
			xxl: 1600,
		}
	}
});

export default theme;

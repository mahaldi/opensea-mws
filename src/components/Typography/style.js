import {
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

theme.typography.h1 = {
	fontSize: '48px',
}
export default theme

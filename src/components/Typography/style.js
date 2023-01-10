import {
  responsiveFontSizes,
} from '@mui/material/styles';
import globalTheme from 'theme'

let theme = globalTheme();
theme = responsiveFontSizes(theme);

theme.typography.h1 = {
	fontSize: '4.8rem',
}
export default theme

import React from 'react'
import { Typography as MuiTypography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles'
import theme from './style'

export const Typography = (props) => {
	const { children, ...rest } = props
	return (
		<ThemeProvider theme={theme}>
			<MuiTypography {...rest}>{children}</MuiTypography>
		</ThemeProvider>
	)
}

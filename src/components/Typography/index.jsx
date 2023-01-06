import React from 'react'
import { Typography as MuiTypography } from '@mui/material';
import {  useTheme } from '@mui/material/styles'
import { get } from 'lodash';
import { colors } from 'theme'
const weights = {
	normal: 400,
	general: 500,
	medium: 600,
	bold: 700,
}
const fontSizes = {
	tiny: '1.2rem',
	small: '1.4rem',
	medium: '1.6rem',
	'lh-medium': '2.4rem',
	'lh-small': '2rem',
	'lh-tiny': '1.8rem',
}
export const Typography = (props) => {
	const { children, color: colorProps, colorBasedOnTheme, weight, size, ...rest } = props
	const themeMode = get(useTheme(), 'palette.mode')
	const color = colorBasedOnTheme ? get(colors, `${colorProps}.${themeMode}`) : colorProps
	return (
		<MuiTypography {...rest} color={color} sx={{
			fontWeight: weights[weight],
			fontSize: fontSizes[size]
		}}>{children}</MuiTypography>
	)
}
Typography.defaultProps = {
	colorBasedOnTheme: true,
}

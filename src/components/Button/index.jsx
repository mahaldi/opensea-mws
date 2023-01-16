import { Button as MuiButton }from '@mui/material';

export const Button = (props) => {
	const { children, ...rest } = props
	return <><MuiButton {...rest}>{children}</MuiButton></>
}

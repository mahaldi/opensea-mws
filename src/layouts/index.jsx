import React from 'react';
import { Header } from 'components'
import Grid from '@mui/material/Unstable_Grid2';

const Layout = (props) => {
	const {children, mode, onChangeTheme} = props
	return <>
		<Grid container direction="column" spacing={3}>
			<Header mode={mode} onChangeTheme={onChangeTheme} />
			{children}
		</Grid>
	</>
}

export default Layout

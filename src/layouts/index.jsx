import React, { useEffect } from 'react';
import { Header } from 'components'
import Grid from '@mui/material/Unstable_Grid2';
import { useLocation } from 'react-router-dom'
import { Checkpoints } from 'services'
import { loadHome } from 'api/home'

const Layout = (props) => {
	const { children, mode, onChangeTheme } = props
	const location = useLocation()
	const { pathname } = location
	console.log('location', location)

	useEffect(() => {
		switch(pathname) {
			case Checkpoints.home:
				return loadHome()
			case Checkpoints.profile:
				console.log('loader profile')
				break;
			default:
				console.log('on default loader')
		}
	}, [])
	return (
		<>
			<Grid container direction="column" spacing={3}>
				<Header mode={mode} onChangeTheme={onChangeTheme} />
				<div style={{padding: '0 64px'}}>
					{children}
				</div>
			</Grid>
		</>
	)
}

export default Layout

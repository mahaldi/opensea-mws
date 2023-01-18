import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Logo from 'assets/images/opensea-logo.svg'
import TextField from '@mui/material/TextField';
import { Typography } from 'components'
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import { Navbar } from './style'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Person2Icon from '@mui/icons-material/Person2';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@mui/material/Switch';
import {  useTheme } from '@mui/material/styles'
import { get } from 'lodash'

export const Header = props => {
	const { onChangeTheme, mode } = props
	const handleOnChangingTheme = () => {
		onChangeTheme(mode === 'light' ? 'dark' : 'light')
	}
	const [openProfile, setOpenProfile] = useState(null)
	const themeMode = get(useTheme(), 'palette.mode')

	useEffect(() => {
		const navbar = document.getElementById('navbar')
		window.addEventListener('scroll', () => {
			if(window.scrollY === 0) {
				navbar.style.backgroundColor = 'transparent'
			} else {
				navbar.style.removeProperty('background-color')
			}
		})
		return () => {
			window.removeEventListener('scroll', () => {})
		}
	}, [])

	useEffect(() => {
		const navbar = document.getElementById('navbar')
		if(navbar)
			navbar.style.backgroundColor = 'transparent'
	}, [])
	return (
		<>
			<Navbar themeMode={themeMode} id="navbar">
				<Grid container spacing={3} display="flex" alignItems="center" style={{ width: '100%' }}>
					<Grid container spacing={2} xs="auto">
						<Grid style={{ width: '40px', padding: '0' }}>
							<img src={Logo} style={{ width: '40px', height: '40px' }} alt="logo" />
						</Grid>
						<Grid xs>
							<Typography size="lh-medium" weight="medium">OpenSea</Typography>
						</Grid>
					</Grid>
					<Grid xs >
						<TextField hiddenLabel size="small" fullWidth placeholder="Search items" InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							)
						}} />
					</Grid>
					<Grid xs="auto" container >
						<Grid xs="auto" container alignItems="center">
							<Grid xs="auto">
								<Typography size="medium" weight="medium">Explore</Typography>
							</Grid>
							<Grid xs="auto">
								<Typography size="medium" weight="medium">Drops</Typography>
							</Grid>
							<Grid xs="auto">
								<Typography size="medium" weight="medium">Stats</Typography>
							</Grid>
							<Grid xs="auto">
								<Typography size="medium" weight="medium">Resources</Typography>
							</Grid>
						</Grid>
						<Grid xs="auto" container>
							<Grid xs="auto">
								<IconButton onClick={(event) => setOpenProfile(event.currentTarget)}>
									<AccountCircle />
								</IconButton>
								<Menu
									anchorEl={openProfile}
									open={Boolean(openProfile)}
									anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
									onClose={() => setOpenProfile(null)}
								>
									<MenuItem>
										<Grid container direction="row" spacing={2} alignItems="center">
											<Grid xs="auto"><Person2Icon /></Grid>
											<Grid xs>Profile</Grid>
										</Grid>
									</MenuItem>
									<MenuItem>
										<Grid container direction="row" spacing={2} alignItems="center">
											<Grid xs="auto"><DarkModeIcon /></Grid>
											<Grid xs>Night Mode</Grid>
											<Grid xs><Switch checked={mode === 'dark'} onChange={handleOnChangingTheme}/> </Grid>
										</Grid>
									</MenuItem>
								</Menu>
							</Grid>
							<Grid xs="auto">
								<IconButton>
									<AccountBalanceWalletOutlinedIcon />
								</IconButton>
							</Grid>
							<Grid xs="auto">
								<IconButton>
									<ShoppingCartOutlinedIcon />
								</IconButton>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Navbar>
		</>
	)
}

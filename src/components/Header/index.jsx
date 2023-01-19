import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Logo from 'assets/images/opensea-logo.svg'
import TextField from '@mui/material/TextField';
import { Typography, Image } from 'components'
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import { Navbar, DialogConnectContainer, StyledDialog, ConnectCaptionWrapper, ConnectTittleWrapper } from './style'
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
import { ethers } from 'ethers'
import Divider from '@mui/material/Divider'
import MetamaskFox from 'assets/images/metamask-fox.svg'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Link from '@mui/material/Link'

export const Header = props => {
	const { onChangeTheme, mode } = props
	const handleOnChangingTheme = () => {
		onChangeTheme(mode === 'light' ? 'dark' : 'light')
	}
	const [openProfile, setOpenProfile] = useState(null)
	const [openConnect, setOpenConnect] = useState(false)
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

	const handleConnectProfile = () => {
		if (window.ethereum) {
			console.log('yes')
			window.ethereum.request({ method: 'eth_requestAccounts' })
				.then(res => {
					const address = res[0] // Return the address of the wallet
					window.ethereum.request({ method: 'eth_getBalance', params: [address, 'latest']}).then(balance => {
						console.log(balance)
						console.log(ethers.utils.formatEther(balance))
						setOpenConnect(false)
					})
				})
		} else {
			alert('you have no metamask installed, cant connect')
		}
	}
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
									<MenuItem onClick={() => {setOpenConnect(true); setOpenProfile(null)}}>
										<Grid container direction="row" spacing={2} alignItems="center">
											<Grid xs="auto"><Person2Icon /></Grid>
											<Grid xs><Typography size="medium" weight="medium">Profile</Typography></Grid>
										</Grid>
									</MenuItem>
									<MenuItem onClick={handleOnChangingTheme}>
										<Grid container direction="row" spacing={2} alignItems="center">
											<Grid xs="auto"><DarkModeIcon /></Grid>
											<Grid xs><Typography size="medium" weight="medium">Night Mode</Typography></Grid>
											<Grid xs><Switch checked={mode === 'dark'}/> </Grid>
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
			<StyledDialog onClose={() => {setOpenConnect(false); setOpenProfile(null)}} open={openConnect}>
				<DialogConnectContainer>
					<Grid container justifyContent="center" direction="column">
						<Grid xs>
							<ConnectTittleWrapper>
								<Typography size="lh-small" weight="medium" align="center">Connect your wallet</Typography>
							</ConnectTittleWrapper>
						</Grid>
						<Grid xs>
							<ConnectCaptionWrapper>
								<Typography size="medium" weight="normal" color="grey" align="center">If you don't have a wallet, you can select a provider and create one now. <Typography color="primary" size="medium" weight="normal" component={Link} href="#">Learn More</Typography></Typography>
							</ConnectCaptionWrapper>
						</Grid>
						<Grid xs><Divider /></Grid>
						<List>
							<ListItem disablePadding>
								<ListItemButton onClick={handleConnectProfile}>
									<Grid container direction="row" spacing={2}>
										<Grid xs="auto">
											<Image src={MetamaskFox} width="24px" height="24px"/>
										</Grid>
										<Grid xs="auto">
											<Typography size="medium" weight="600">MetaMask</Typography>
										</Grid>
									</Grid>
								</ListItemButton>
							</ListItem>
						</List>
					</Grid>
				</DialogConnectContainer>
			</StyledDialog>
		</>
	)
}

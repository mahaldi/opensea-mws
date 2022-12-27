import React from 'react'
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom'
import Grid from '@mui/material/Unstable_Grid2';
import Logo from 'assets/images/opensea-logo.svg'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import { Navbar } from './style'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

export const Header = () => {
	// const { onChangeTheme, mode } = props
	// const handleOnChangingTheme = () => {
	// 	onChangeTheme(mode === 'light' ? 'dark' : 'light')
	// }
	return (
		<>
			{/* <Button onClick={handleOnChangingTheme}>toggle theme</Button>
			<Link to="/">home</Link>
			<Link to="/profile">Profile</Link> */}
			<Navbar>
				<Grid container spacing={3} display="flex" alignItems="center" justifyContent="center" style={{width: '100%'}}>
					<Grid container spacing={2} xs="auto">
						<Grid style={{ width: '40px', padding: '0' }}>
							<img src={Logo} style={{ width: '40px', height: '40px' }} alt="logo" />
						</Grid>
						<Grid xs>
							<Typography variant="h5">OpenSea</Typography>
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
						<Grid xs="auto" container>
							<Grid xs="auto">
								<Typography variant='h6'>Explore</Typography>
							</Grid>
							<Grid xs="auto">
								<Typography variant='h6'>Drops</Typography>
							</Grid>
							<Grid xs="auto">
								<Typography variant='h6'>Stats</Typography>
							</Grid>
							<Grid xs="auto">
								<Typography variant='h6'>Resources</Typography>
							</Grid>
						</Grid>
						<Grid xs="auto" container>
							<Grid xs="auto">
								<AccountCircle />
							</Grid>
							<Grid xs="auto">
								<AccountBalanceWalletOutlinedIcon />
							</Grid>
							<Grid xs="auto">
								<ShoppingCartOutlinedIcon />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Navbar>
		</>
	)
}

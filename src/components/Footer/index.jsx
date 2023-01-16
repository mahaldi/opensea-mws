import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Typography, Button, Image } from 'components'
import { TextField, Divider } from '@mui/material';
import { TwitterIcon, IconWrapper, InstagramIcon, DiscordIcon, RedditIcon, YoutubeIcon, TiktokIcon, ListWrapper, FooterLinkWrapper } from './style'
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import OpenSeaWhite from 'assets/images/opensea-white.svg'
import { FooterLinks } from 'services/utils/Constants'

export const Footer = () => {
	const SocialMediaList = [
		{
			icon: TwitterIcon,
			to: '/profile'
		},
		{
			icon: InstagramIcon,
			to: '/profile'
		},
		{
			icon: DiscordIcon,
			to: '/profile'
		},
		{
			icon: RedditIcon,
			to: '/profile'
		},
		{
			icon: YoutubeIcon,
			to: '/profile'
		},
		{
			icon: TiktokIcon,
			to: '/profile'
		},
		// {
		// 	icon: <EmailOutlinedIcon />,
		// 	to: '/profile'
		// },
	]
	return (
		<>
			<Grid container direction="column" spacing={3}>
				<Grid container direction="row">
					<Grid container xs direction="column" spacing={1}>
						<Grid xs>
							<Typography size="lh-small" weight="medium">Stay in the loop</Typography>
						</Grid>
						<Grid xs>
							<Typography size="medium">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</Typography>
						</Grid>
						<Grid xs container direction="row" spacing={2} alignItems="center">
							<Grid xs>
								<TextField placeholder='Your email address' fullWidth />
							</Grid>
							<Grid xs="auto">
								<Button variant="contained" color="primary">
									<Typography size="medium" weight="medium">Sign Up</Typography>
								</Button>
							</Grid>
						</Grid>
					</Grid>
					<Grid xs container direction="column" spacing={1}>
						<Grid xs>
							<Typography size="lh-small" weight="medium">Join the community</Typography>
						</Grid>
						<Grid xs container direction="row" spacing={1} columns={14}>
							{SocialMediaList.map((val, i) => (
								<Grid xs="auto" key={i}>
									<IconWrapper>{val.icon}</IconWrapper>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
				<Grid xs>
					<Divider variant="middle" />
				</Grid>
				<Grid xs container direction="row" spacing={2} alignItems="flex-start">
					<Grid container direction="column" spacing={1} style={{ width: '25%'}}>
						<Grid xs>
							<Image alt="logo" src={OpenSeaWhite} width="40px" height="40px" />
						</Grid>
						<Grid xs>
							<Typography size="lh-small" weight="medium">Opensea</Typography>
						</Grid>
						<Grid xs>
							<Typography size="medium">
								The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
							</Typography>
						</Grid>
					</Grid>
					<Grid container direction="row" xs spacing={0} alignItems="flex-start">
						{FooterLinks.map(footerLink => (
							<Grid xs={3} key={footerLink.title} container direction="column">
								<Grid xs>
									<Typography size="medium" weight="medium" gutterBottom>{footerLink.title}</Typography>
								</Grid>
								<Grid xs>
									<ListWrapper>
										{footerLink.list.map(list => (
											<FooterLinkWrapper>
												<Typography size="small">{list.name}</Typography>
											</FooterLinkWrapper>
										))}
									</ListWrapper>
								</Grid>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</>
	)
}

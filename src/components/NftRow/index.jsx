import React from 'react'
import { Image } from 'components'
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from 'components';
import Link from '@mui/material/Link';
import {Link as LinkRouter} from 'react-router-dom'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { ContainerNoPadding, StyledListItem, StyledListButton } from './style'

export const NftRow = props => {
	const {index, src, alt, name, volume, floorPrice} = props
	const MuiLink = React.forwardRef((props, ref) => <Link {...props} ref={ref}/>)
	const NavLink = React.forwardRef((props, ref) => <LinkRouter {...props} ref={ref}/>)
	return (
		<>
			<ContainerNoPadding container direction="column" spacing={0}>
				<ContainerNoPadding container direction="row" columns={10}>
					<Grid xs={6}><Typography variant="caption" color="grey" size="tiny" weight="medium">COLLECTION</Typography></Grid>
					<Grid xs={2}><Typography variant="caption" color="grey" size="tiny" weight="medium">FLOOR PRICE</Typography></Grid>
					<Grid xs={2}><Typography variant="caption" color="grey" size="tiny" weight="medium">VOLUME</Typography></Grid>
				</ContainerNoPadding>
				<List component={Grid} container>
					{[1,2,3].map(val => (
						<StyledListItem key={val} component={(propsList) => <MuiLink component={NavLink} to="profile" {...propsList} color="inherit"/>}>
							<StyledListButton>
								<ContainerNoPadding xs container direction="row" columns={10} alignItems="center">
									<ContainerNoPadding container xs={6} direction="row" spacing={0} alignItems="center" columns={10}>
										<Grid xs={0.5}><Typography color="grey" weight="medium" size="lh-small">{val}</Typography></Grid>
										<Grid xs="auto"><Image src={src} alt={alt} width={72} height={72}/></Grid>
										<Grid xs="auto"><Typography size="medium" weight="medium" style={{ paddingLeft: '2.4rem'}}>{name}</Typography></Grid>
									</ContainerNoPadding>
									<Grid xs={2}><Typography size="medium" weight="medium">{floorPrice}</Typography></Grid>
									<Grid xs={2}><Typography size="medium" weight="medium">{volume}</Typography></Grid>
								</ContainerNoPadding>
							</StyledListButton>
						</StyledListItem>
					))}
				</List>
			</ContainerNoPadding>
		</>
	)
}
NftRow.defaultProps = {
	src: 'https://i.seadn.io/gcs/files/b77d6d55c03976eb3031f0bc73128ded.png?auto=format&w=384',
	alt: 'asd',
	name: 'asdasdadasdasdad',
	volume: '31ETH',
	floorPrice: '0.1ETH',
	index: 1,
}

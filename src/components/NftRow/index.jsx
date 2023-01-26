import React from 'react'
import { Image } from 'components'
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from 'components';
import Link from '@mui/material/Link';
import { Link as LinkRouter } from 'react-router-dom'
import List from '@mui/material/List';
import { ContainerNoPadding, StyledListItem, StyledListButton } from './style'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { get } from 'lodash';
import bigDecimal from 'js-big-decimal'

export const NftRow = props => {

	const { data, index, loading } = props
	const MuiLink = React.forwardRef((props, ref) => loading ? <div {...props} ref={ref}></div> : <Link {...props} ref={ref} />)
	const NavLink = React.forwardRef((props, ref) => <LinkRouter {...props} ref={ref} />)
	return (
		<>
			<ContainerNoPadding container direction="column" spacing={0}>
				{
					!loading && (
						<ContainerNoPadding container direction="row" columns={10}>
							<Grid xs={6}><Typography variant="caption" color="grey" size="tiny" weight="medium">COLLECTION</Typography></Grid>
							<Grid xs={2}><Typography variant="caption" color="grey" size="tiny" weight="medium">FLOOR PRICE</Typography></Grid>
							<Grid xs={2}><Typography variant="caption" color="grey" size="tiny" weight="medium">VOLUME</Typography></Grid>
						</ContainerNoPadding>
					)
				}
				<SkeletonTheme baseColor='#2E3137'>
					<List component={Grid} container>
						{(loading ? Array.from(new Array(5)) : data).map((val, i) => {
							const volume = bigDecimal.round(get(val, 'volume'), 2)
							const floorPrice = bigDecimal.round(get(val, 'last_floor_price'), 2)
							const name = get(val, 'collection.name', 'no name')
							const src = get(val, 'collection.image_url')
							const contractAddress = get(val, 'contract_address')
							return (
								<StyledListItem key={i} component={(propsList) => <MuiLink component={NavLink} to={`/collection/${contractAddress}`} {...propsList} color="inherit" />}>
									<StyledListButton disabled={loading}>
										<ContainerNoPadding xs container direction="row" columns={10} alignItems="center">
											<ContainerNoPadding container xs={6} direction="row" spacing={0} alignItems="center" columns={10}>
												{!loading && <Grid xs={0.5}><Typography color="grey" weight="medium" size="lh-small">{i + index}</Typography></Grid>}
												<Grid xs="auto">
													{
														loading ? <Skeleton borderRadius="10px" width="72px" height="72px" /> : <Image src={src} alt={name} width={72} height={72} />
													}
												</Grid>
												<Grid xs="auto" style={{ paddingLeft: '2.4rem' }}>
													{
														loading ? <Skeleton borderRadius="20px" width="150px" height="40px" /> : <Typography size="medium" weight="medium">{name}</Typography>
													}
												</Grid>
											</ContainerNoPadding>
											<Grid xs={2}>
												{
													loading ? <Skeleton borderRadius="20px" width="75px" height="40px" /> : <Typography size="medium" weight="medium">{floorPrice < 0.01 ? '< 0.001': floorPrice} ETH</Typography>
												}
											</Grid>
											<Grid xs={2}>
												{
													loading ? <Skeleton borderRadius="20px" width="75px" height="40px" /> : <Typography size="medium" weight="medium">{volume} ETH</Typography>
												}
											</Grid>
										</ContainerNoPadding>
									</StyledListButton>
								</StyledListItem>
							)
						})}
					</List>
				</SkeletonTheme>
			</ContainerNoPadding>
		</>
	)
}
NftRow.defaultProps = {
	data: [],
	index: 1,
}

import React from 'react'
import { connect } from 'react-redux'
import { actions } from 'actions'
import Grid from '@mui/material/Unstable_Grid2';
import { BannerSection, ImageBanner, TitleCollection, StyledIconButton, GridSection, GridNumberSection, DescriptionCollectionWrapper } from './style'
import { Typography } from 'components'
import { Divider } from '@mui/material'
import { StarBorder, MoreHoriz, Share, Twitter, WifiTethering } from '@mui/icons-material'
import VerifiedIcon from '@mui/icons-material/Verified';
import { Link } from 'react-router-dom'
const CollectionDetail = props => {
	return (
		<>
			<Grid container direction="column" spacing={0}>
				<BannerSection>
					<ImageBanner src="https://i.seadn.io/gcs/files/f71220a729d65e2f47351757519529ea.gif?auto=format&w=1920" />
				</BannerSection>
				<GridSection xs={12} container justifyContent="space-between" alignItems="center">
					<Grid xs="auto">
						<TitleCollection variant="h1" weight="medium">Proceed w/ Caution</TitleCollection>
					</Grid>
					<Grid xs="auto" container spacing={1}>
						<Grid xs="auto">
							<StyledIconButton>
								<WifiTethering />
							</StyledIconButton>
						</Grid>
						<Grid xs="auto">
							<StyledIconButton>
								<Twitter />
							</StyledIconButton>
						</Grid>
						<Divider orientation="vertical" flexItem />
						<Grid xs="auto">
							<StyledIconButton>
								<StarBorder />
							</StyledIconButton>
						</Grid>
						<Grid xs="auto">
							<StyledIconButton>
								<Share />
							</StyledIconButton>
						</Grid>
						<Grid xs="auto">
							<StyledIconButton>
								<MoreHoriz />
							</StyledIconButton>
						</Grid>
					</Grid>
				</GridSection>
				<GridSection xs={12}>
					<Typography weight="normal" size="medium">By <Typography size="medium" component={Link} to="#" weight="medium">DesLucrece</Typography></Typography>
				</GridSection>
				<GridSection xs={12}>
					<DescriptionCollectionWrapper>
						<Typography weight="normal" size="medium">Items</Typography>
					</DescriptionCollectionWrapper>
				</GridSection>
				<GridSection xs={12}>
					<Typography size="medium" weight="normal">Proceed w/ Caution, for the road ahead is uncertain, but the destination is worth the risk.</Typography>
				</GridSection>
				<GridNumberSection xs={12} container direction="row">
					{[1,2,3,4,5,6].map(val => (
						<Grid xs="auto" key={val}>
							<Typography size="lh-small" weight="medium">964 ETH</Typography>
							<Typography color="grey" size="small" weight="normal">total volume</Typography>
						</Grid>
					))}
				</GridNumberSection>
			</Grid>
		</>
	)
}

export default connect(null, actions)(CollectionDetail)

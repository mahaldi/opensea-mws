import React from 'react'
import { Typography } from 'components'
import Grid from '@mui/material/Unstable_Grid2';
import { CheckVerified, IconWrapper, ContainerNoPadding, FooterTwoWrapper } from './style'

const FooterOne = props => {
	return (
		<Grid container direction="column" spacing={2}>
			<Grid xs={12} container spacing={0} direction="row">
				<ContainerNoPadding xs="auto">
					<Typography size="medium" weight="medium">Gutter Cat Gang</Typography>
				</ContainerNoPadding>
				<ContainerNoPadding xs="auto">
					<IconWrapper>{CheckVerified}</IconWrapper>
				</ContainerNoPadding>
			</Grid>
			<Grid xs={12} container direction="row" spacing={0}>
				<Grid xs={6}>
					<Typography size="tiny" weight="medium">FLOOR</Typography>
					<Typography size="medium" weight="medium">1.99 ETH</Typography>
				</Grid>
				<Grid xs={6}>
					<Typography size="tiny" weight="medium">TOTAL VOLUME</Typography>
					<Typography size="medium" weight="medium">26K ETH</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}

const FooterTwo = props => {

	return (
		<>
			<FooterTwoWrapper>
				<Typography size="medium" weight="medium">What is an NFT</Typography>
			</FooterTwoWrapper>
		</>
	)
}
const FooterCard = props => {
	const { type, data } = props

	return (
		<>
			{type === 1 && <FooterOne data={data} />}
			{type === 2 && <FooterTwo data={data} />}
		</>
	)
}
FooterCard.defaultProps = {
	type: 1,
}
export default FooterCard

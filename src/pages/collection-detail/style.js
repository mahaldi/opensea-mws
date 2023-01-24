import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from 'components'
import { IconButton } from '@mui/material'
import { GridPaddingWrapper } from 'services/utils/Constants'

export const GridSection = styled(Grid)(({ theme }) => ({
	...GridPaddingWrapper(theme)
}))
export const GridNumberSection = styled(Grid)(({ theme }) => ({
	...GridPaddingWrapper(theme),
	gap: '32px',
	marginTop: '3rem',
	[theme.breakpoints.up('sm')]: {
		gap: '40px',
	},
	// [theme.breakpoints.up('md')]: {
	// 	marginTop: '30'
	// },
}))
export const BannerSection = styled('div')`
	position: relative;
	max-height: 320px;
	overflow: hidden;
`

export const ImageBanner = styled('img')`
	min-width: 100%;
	min-height: 100%;
	max-width: 100%;
	max-height: 100%;
	display: block;
`
export const TitleCollection = styled(Typography)`
	font-size: 3rem;
`

export const StyledIconButton = styled(IconButton)`
	svg {
		width: 2rem;
		height: 2rem;
	}
`
export const DescriptionCollectionWrapper = styled('div')`
	margin: 12px 0;
`

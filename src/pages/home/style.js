import { styled } from '@mui/material/styles';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Unstable_Grid2';
import { default as styledComponent } from 'styled-components'
import HomeGradientDark from 'assets/images/home-gradient-dark.png'
import { colors } from 'theme'
import IconButton from '@mui/material/IconButton';

export const StyledTabpanel = styled(TabPanel)`
	&.MuiTabPanel-root {
		padding-left: 0;
		padding-right: 0;
	}
`;

export const ContainerTwin = styled(Grid)`
	padding: 0;
`

export const GridSection = styled(Grid)`
	padding-left: 64px;
	padding-right: 64px;
`

export const ContainerHome = styled(Grid)`
`
export const BannerHome = styled(Grid)`
	padding: 150px 64px 0 64px;
	background-image: url(${HomeGradientDark});
	background-size: cover;
	background-position: 50% 50%;
`

export const SliderWrapper = styledComponent.div`
	width: 100%;
	overflow: visible;
	position: relative;
	display: block;
	margin-top: 3.2rem;
	margin-bottom: 6.6rem;
`
export const NavigationSwiper = styledComponent.div`
	.prev {
		left: -24px;
	}
	.next {
		right: -24px;
	}
`

export const StyledIconButton = styled(IconButton)`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	z-index: 2;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.palette.mode === 'dark' ? colors.black.dark : colors.black.light};
	box-shadow: rgb(0 0 0 / 15%) 0px 4px 10px;
`

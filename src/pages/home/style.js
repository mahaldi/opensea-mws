import { styled } from '@mui/material/styles';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Unstable_Grid2';
import { default as styledComponent } from 'styled-components'
import HomeGradientDark from 'assets/images/home-gradient-dark.png'
import HomeGradientLight from 'assets/images/home-gradient-light.png'
import { colors } from 'theme'
import IconButton from '@mui/material/IconButton';
import { TextField } from '@mui/material';

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
export const GridTitle = styled(Grid)`
	margin-top: 5.6rem;
	margin-bottom: 4rem;
`
export const ContainerHome = styled(Grid)`
`
export const BannerHome = styled(Grid)`
	padding: 70px 64px 0 64px;
	margin-top: -70px;
	background-image: url(${({ theme }) => theme.palette.mode === 'dark' ? HomeGradientDark : HomeGradientLight });
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
	.prev, .prevBanner, .prevTopCollector, .prevPhotography {
		left: -24px;
	}
	.next, .nextBanner, .nextTopCollector, .nextPhotography {
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
export const SwiperBreakpoints = {
	1600: {
		slidesPerView: 6,
	},
	1200: {
		slidesPerView: 5,
	},
	1024: {
		slidesPerView: 4,
	},
	768: {
		slidesPerView: 3,
	},
	600: {
		slidesPerView: 2,
	}
}

export const StyledSelectRange = styled(TextField)`
	&.MuiFormControl-root {
		> .MuiInputBase-root {
			font-size: 1.6rem;
			font-weight: 600;
			border-radius: 12px;
			> .MuiSelect-select {
				padding: 11px 16px 11px 24px;
				padding-right: 32px;
			}
			fieldset {
				border-color: rgb(76, 80, 92);
				border-width: 2px;
			}
		}
	}
`

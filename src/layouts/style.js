import { default as styledComponent } from 'styled-components'
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';

export const FooterWrapper = styledComponent.div`
	height: auto;
	display: flex;
	justify-content: center;
	position: relative;
	width: 100%;
`

export const FooterContainer = styledComponent.div`
	width: 82.5%;
`

export const Container = styled(Grid)`
	> div:nth-of-type(2) {

	}
`

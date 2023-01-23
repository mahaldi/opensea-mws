import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {default as styledComponent} from 'styled-components'
export const ImageLoader = styled(LazyLoadImage)`
	border-radius: ${({ borderradius }) => borderradius};
`
export const ImageWrapper = styledComponent.div`
	span {
		border-radius: ${({ borderradius }) => borderradius};
	}
`

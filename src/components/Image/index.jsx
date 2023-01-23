import React from 'react'
import { ImageLoader, ImageWrapper } from './style'
import BrokenImage from 'assets/images/broken-image.png'

export const Image = props => {
	const { src, alt, width, height, borderradius} = props
	return (
		<>
		<ImageWrapper borderradius={borderradius}>
			<ImageLoader alt={alt} src={src} width={width} height={height} placeholderSrc={BrokenImage} borderradius={borderradius}/>
		</ImageWrapper>
		</>
	)
}
Image.defaultProps = {
	borderradius: '10px 10px 10px 10px',
}

import React from 'react'
import { ImageLoader } from './style'
export const Image = props => {
	const { src, alt, width, height, borderradius} = props
	return (
		<>
			<ImageLoader alt={alt} src={src} width={width} height={height} borderradius={borderradius}/>
		</>
	)
}
Image.defaultProps = {
	borderradius: '10px 10px 10px 10px',
}

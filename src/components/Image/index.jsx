import React from 'react'
import { ImageLoader } from './style'
export const Image = props => {
	const { src, alt, width, height} = props
	return (
		<>
			<ImageLoader alt={alt} src={src} widht={width} height={height} />
		</>
	)
}

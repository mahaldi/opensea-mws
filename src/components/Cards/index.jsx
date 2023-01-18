import React from 'react'
import { Image } from 'components'
import { ContainerNoPadding, CardGridWrapper } from './style'
import FooterCard from './footerCard'
import { get } from 'lodash'

export const Card = React.forwardRef((props, ref) => {
	const { type, data } = props
	const src = get(data, 'src', 'https://i.seadn.io/gcs/files/f8db06fcb57aa73916a0991cd73b02e5.png?w=500&auto=format')
	return (
		<>
			<CardGridWrapper container direction="column" ref={ref}>
				<ContainerNoPadding xs={12}>
					<Image width="100%" borderradius="0px" src={src} />
				</ContainerNoPadding>
				<ContainerNoPadding xs={12}>
					<FooterCard type={type} />
				</ContainerNoPadding>
			</CardGridWrapper>
		</>
	)
})

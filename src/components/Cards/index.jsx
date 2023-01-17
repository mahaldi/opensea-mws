import React from 'react'
import { Image } from 'components'
import { ContainerNoPadding, CardGridWrapper } from './style'
import FooterCard from './footerCard'

export const Card = React.forwardRef((props, ref) => {
	const { type } = props
	return (
		<>
			<CardGridWrapper container direction="column" ref={ref}>
				<ContainerNoPadding xs={12}>
					<Image width="100%" borderradius="0px" src="https://i.seadn.io/s/production/bf88e9da-8334-444f-b03d-d602274352d6.png?auto=format&w=828" />
				</ContainerNoPadding>
				<ContainerNoPadding xs={12}>
					<FooterCard type={type} />
				</ContainerNoPadding>
			</CardGridWrapper>
		</>
	)
})

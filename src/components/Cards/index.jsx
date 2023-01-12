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
					<Image width="100%" borderradius="0px" src="https://i.seadn.io/gae/Aew7Ksza7n7EZM9A-luCfCQ2bexssMH3Jq7GOMYMxT3ZnOiTWndCZe_Q0GrD84NLnBUlGEPjgjkK0QSA_746sO2kX9a0XownHlD_mg?w=500&auto=format" />
				</ContainerNoPadding>
				<ContainerNoPadding xs={12}>
					<FooterCard type={type} />
				</ContainerNoPadding>
			</CardGridWrapper>
		</>
	)
})

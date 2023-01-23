import React, { useEffect } from 'react';
import { Header, Footer } from 'components'
import { useLocation } from 'react-router-dom'
import { Checkpoints } from 'services'
import { loadHome } from 'api/home'
import { FooterWrapper, FooterContainer, Container } from './style'
import { connect } from 'react-redux'
import { actions } from 'actions'

const Layout = (props) => {
	const { children, mode, onChangeTheme } = props
	const location = useLocation()
	const { pathname } = location

	useEffect(() => {
		switch (pathname) {
			case Checkpoints.home:
				return loadHome(props)
			case Checkpoints.profile:
				console.log('loader profile')
				break;
			default:
				console.log('on default loader')
		}
	}, [pathname, props])
	return (
		<>
			<Container container direction="column" spacing={3}>
				<Header mode={mode} onChangeTheme={onChangeTheme} />
				{children}
				<FooterWrapper container>
					<FooterContainer>
						<Footer />
					</FooterContainer>
				</FooterWrapper>
			</Container>
		</>
	)
}

export default connect(null, actions)(Layout)

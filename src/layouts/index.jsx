import React, { useEffect } from 'react';
import { Header, Footer } from 'components'
import { useLocation } from 'react-router-dom'
import { Checkpoints } from 'services'
import { loadHome } from 'api/home'
import { FooterWrapper, FooterContainer, Container } from './style'

const Layout = (props) => {
	const { children, mode, onChangeTheme } = props
	const location = useLocation()
	const { pathname } = location

	useEffect(() => {
		switch(pathname) {
			case Checkpoints.home:
				return loadHome()
			case Checkpoints.profile:
				console.log('loader profile')
				break;
			default:
				console.log('on default loader')
		}
	}, [])
	return (
		<>
			<Container container direction="column" spacing={3}>
				<Header mode={mode} onChangeTheme={onChangeTheme} />
				{children}
				<FooterWrapper>
					<FooterContainer>
						<Footer />
					</FooterContainer>
				</FooterWrapper>
			</Container>
		</>
	)
}

export default Layout

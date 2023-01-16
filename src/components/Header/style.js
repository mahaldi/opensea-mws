import styled from 'styled-components'
import { colors } from 'theme'

export const Navbar = styled.div`
	padding: 0 64px;
	height: 120px;
	display: flex;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	right: 0;
	z-index: 99;
	background-color: ${({themeMode}) => themeMode === 'dark' ? '#121212' : colors.black.light};
`

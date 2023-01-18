import styled from 'styled-components'
import { colors } from 'theme'

export const Navbar = styled.div`
	padding: 0 64px;
	height: fit-content;
	display: flex;
	position: sticky;
	width: 100%;
	top: 0;
	left: 0;
	right: 0;
	z-index: 99;
	background-color: ${({themeMode}) => themeMode === 'dark' ? '#121212' : colors.black.light};
	transition: top 0.5s cubic-bezier(0.05,0,0.2,1), background-color 0.2s cubic-bezier(0.05,0,0.2,1), box-shadow 0.2s cubic-bezier(0.05,0,0.2,1),color 0.2s cubic-bezier(0.05,0,0.2,1)
`

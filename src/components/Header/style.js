import { default as styledComponent } from 'styled-components'
import { colors } from 'theme'
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const Navbar = styledComponent.div`
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
export const DialogConnectContainer = styledComponent.div`
	padding: 2.4rem;
`
export const StyledDialog = styled(Dialog)`
	border-radius: 16px;
	.MuiPaper-root {
		background-color: ${({ theme }) => theme.palette.mode === 'dark' ? 'black' : 'white'};
	}
`
export const ConnectCaptionWrapper = styledComponent.div`
	padding: 0px 24px 24px;
`
export const ConnectTittleWrapper = styledComponent.div`
	padding-bottom: 24px;
`
export const HeaderSearchTextfield = styled(TextField)`
	> .MuiInputBase-root {
		border-radius: 12px;
		> .MuiOutlinedInput-notchedOutline {
			border-width: 2px;
			border-color: transparent;
			background-color: rgba(255, 255, 255, 0.12);
		}
	}
`
// border-color: rgb(76, 80, 92);

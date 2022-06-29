import styled from 'styled-components'

export const HeaderContainer = styled.div`
	display: flex;
	background-color: white;
	position:absolute;
	align-items: center;
	padding-top: 1%;
	top:0;
	width: 100vw;
`

export const Logo = styled.img`
	margin-right: 2%;
	margin-left: 10%;
	cursor: pointer
`

export const StyledText = styled.h4`
	color: ${props => props.theme.palette.primary};
	margin-bottom: 0;
	cursor: pointer
`
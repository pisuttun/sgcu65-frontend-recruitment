import styled from "styled-components";

export const BackgroundDesktop = styled.img`
	max-height: 100%;
	position: absolute;
	z-index: -1;
	bottom: 0;
	right: 0;
	@media (max-width: ${props => props.theme.breakpoint}) {
		display:none
	}
`

export const BackgroundMobile = styled.img`
	max-width: 100%;
	position: absolute;
	z-index: -1;
	bottom: 0;
	right: 0;
	@media (min-width: ${props => props.theme.breakpoint}) {
		display:none
	}
`
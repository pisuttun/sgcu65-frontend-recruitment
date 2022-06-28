import styled from "styled-components";

export const BackgroundDesktop = styled.img`
	max-height: 100%;
	@media (max-width: 800px) {
		display:none
	}
`

export const BackgroundMobile = styled.img`
	max-width: 100%;
	@media (min-width: 800px) {
		display:none
	}
`
export const Container = styled.div`
	position: fixed;
	z-index: -1;
	right: 0;
	bottom: 0;
`
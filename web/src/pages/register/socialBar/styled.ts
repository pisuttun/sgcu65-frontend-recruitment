import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-self: flex-end;
	justify-content: flex-end;
	margin-top: 5vh;
	@media (max-width: ${props => props.theme.breakpoint}) {
		display: none;
	}
`

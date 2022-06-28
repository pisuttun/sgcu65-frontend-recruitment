import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 17vw;
	margin-right: 5%;
	margin-bottom: 1%;
	border: 1px solid #DE5C8E;
	border-radius: 10px;
	overflow: auto;
	@media (max-width: 800px) {
		width: 100%;
		margin-bottom: 3%;
		margin-right: 0;
	}
`

export const StyledText = styled.p`
	margin-left: 2%; 
	white-space: nowrap;
	margin-bottom: 0.5rem;
	margin-top: 0;
`
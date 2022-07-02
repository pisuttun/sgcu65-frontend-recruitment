import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 17vw;
	height: 5rem;
	margin-right: 5%;
	margin-bottom: 1%;
	border: 1px solid ${props => props.theme.palette.primary};
	background-color: white;
	border-radius: 10px;
	@media (max-width: ${props => props.theme.breakpoint}) {
		width: 100%;
		margin-bottom: 3%;
		margin-right: 0;
	}
`

export const StyledText = styled.span`
	margin-left: 2%; 
	white-space: nowrap;
	margin-bottom: 0.5rem;
	color: ${props => props.theme.palette.primary};
	margin-top: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	&:hover div{
		display: flex;
	}
`

export const Tooltip = styled.div`
	display: none;
  	background-color: black;
	font-size: 1rem;
	font-weight: 400;
  	color: white;
  	text-align: center;
  	border-radius: 6px;
  	padding: 5px;
	position: absolute;
	z-index: 2;
	margin-bottom: 1rem;
`
import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	margin-left: 5%;
	margin-top: 10vh;
`
export const MainContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`

export const MenuContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1%;
	@media (max-width: ${props => props.theme.breakpoint}) {
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 5%;
	}
`

export const RegisterBtn = styled(Link)`
    display: flex;
    color: ${props => props.theme.palette.primary};
    text-align: center;
    align-items: center;
    justify-content: center;
	text-decoration: none;
    font-weight: bold;
    background-color: white;
    border-radius: 5px;
	border: 1px solid ${props => props.theme.palette.primary};
    height: 2rem;
	padding-left: 1%;
	padding-right: 1%;
`

export const InputField = styled.input`
	@media (max-width: ${props => props.theme.breakpoint}) {
		width: 99%;
	}
`
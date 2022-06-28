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
	@media (max-width: 800px) {
		flex-direction: column;
		align-items: flex-start;
	}
`

export const RegisterBtn = styled(Link)`
    display: flex;
    background-color: pink;
    text-align: center;
    align-items: center;
    justify-content: center;
	text-decoration: none;
    font-weight: bold;
    color: white;
    border-radius: 5px;
    height: 2rem;
	padding-left: 1%;
	padding-right: 1%;
`

export const InputField = styled.input`
	@media (max-width: 800px) {
		width: 99%;
	}
`
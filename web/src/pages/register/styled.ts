import styled from "styled-components";

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	margin-left: 5%;
	margin-top: 10vh;
`

export const MenuContainer = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	margin-right: 5%;
	margin-left: auto;
`

export const FormBox = styled.form`
	display: flex;
	width: 25vw;
	height: 70vh;
	justify-content: space-around;
	flex-direction: column;
	border: 1px solid ${props => props.theme.palette.primary};
	border-radius: 10px;
	background-color: white;
	@media (max-width: ${props => props.theme.breakpoint}) {
		width:80vw;
	}

`
export const SubmitBtn = styled.input`
    display: flex;
	align-self: center;
    background-color: ${props => props.theme.palette.primary};
    justify-content: center;
    font-weight: bold;
    color: white;
    border-radius: 5px;
    height: 2rem;
	width: 80%;
	margin-bottom: 5%;
	border: none;
`

export const KiteImg = styled.img`
	position: fixed; 
	z-index: 1; 
	height: 50vh; 
	top: 20vh; 
	left: 10vw;
	@media (max-width: ${props => props.theme.breakpoint}) {
		display: none;
	}
`

export const TextField = styled.input`
	margin-top: 1rem;
	width: 80%;
	height: 1.25rem;
	border-radius: 5px;
	border: 1px solid black;
	align-self: center;
`

export const ErrorMsg = styled.p`
	align-self: center;
	text-align: center;
	color: red;
	margin-top: 0;
	margin-bottom: 0;
`
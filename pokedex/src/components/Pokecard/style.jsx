import styled from "styled-components"

const MainContainer = styled.div`
width: 300px;
height: 300px;
border: 8px solid white;
align-items: center;
margin: 0 auto;
margin-top: 100px;
box-shadow: 5px 5px 15px 5px #000000;
border-radius: 55px;
background-color: red;
    
    img {
        background-color: white;
        width: 125px;
        border-radius: 100px;
        border: 8px solid black;
    }

    p {
        color: white;
        /* font-size: 16px; */
        font-weight: bold;
    }
`

const ButtonsContainer = styled.div`
display: flex;
justify-content: space-around;
margin-top: 24px;
`

const Buttons = styled.button`
background-color: #FFCC00;
border-radius: 15px;
border: 4px solid white;
width: 100px;
    p {
        color: black;
    }
`
export { 
    ButtonsContainer,
    MainContainer,
    Buttons }
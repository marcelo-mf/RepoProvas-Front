import styled from "styled-components";

const MainContainer = styled.div`

    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #E5E5E5;
`

const MainText = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 500;
`

const Logo = styled.img`
    margin-bottom: 60px;
`

const Link = styled.a`

    margin-top: 30px;

    text-decoration: underline;
    color: #5A2FDA;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;;
`

const Separation = styled.a`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;

    width: 464px;

    div{
        height: 1px;
        width: 215px;

        background-color: #C4C4C4;
    }

    p{
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        font-weight: 600;
        color: #595959;
    }
`
const Input = styled.input`

    box-sizing: border-box;
    
    height: 56px;
    width: 464px;

    border-radius: 100px;
    border: none;

    filter: drop-shadow(0px 0px 0.5rem #DCDCDC);

    padding: 0 20px;

    color: #272727;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;

    margin-bottom: 20px;
    `

export {MainContainer, MainText, Logo, Link, Separation, Input}

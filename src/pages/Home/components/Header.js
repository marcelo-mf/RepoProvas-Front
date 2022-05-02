import styled from "styled-components";
import Logo from "../../../assets/Group 1.png"
import {FiLogOut} from "react-icons/fi";
import { useNavigate } from "react-router-dom";


export default function Header() {

    const navigate = useNavigate();

    function logOut() {
        navigate("/")
        localStorage.removeItem('token');
    }


    return(
        <HeaderDiv>
            <Img src={Logo}/> 
            <div className="logout" onClick={() => logOut()}>
            <FiLogOut size="30px" />
            </div>
        </HeaderDiv>
    )
}

const HeaderDiv = styled.div`

    box-sizing: border-box;

    height: 107px;
    width: 100%;

    background-color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: space-between;

    filter: drop-shadow(0px 0px 0.5rem #DCDCDC);

    padding: 0 30px;

    z-index: 10;

    position: fixed;
    top: 0;

    .logout:hover{
        cursor: pointer;
    }
`

const Img = styled.img`
    height: 50px;
`
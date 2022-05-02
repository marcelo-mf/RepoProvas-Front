import styled from "styled-components";

export default function Button({text, color, type, disabled, onClick}) {

    const Button = styled.button`
    
    height: 36px;
    width: 464px;

    border-radius: 100px;
    border: none;
    
    background-color: ${color}; 

    color: white;
    font-weight: bold;

    margin-top: 20px;
    `

    return(
        <Button type={type} style={{ cursor: "pointer" }} onClick={onClick} disabled={disabled}>{text}</Button>
    )
}




import { MainContainer, MainText, Logo, Link, Separation, Input } from "../style";
import logo from "../../../assets/Group 1.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";

export default function Login() {

    const [isDisabled, setIsDisabled] = useState(false);
    const [formData, setFormData] = useState({email: '', password: ''});
    const { setAndPersistToken } = useContext(AuthContext) 

    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsDisabled(true);

        const promise = axios.post(
          "http://localhost:5000/signIn",
          formData
        );
    
        promise.then((response) => {

          console.log(response);

          if(response.data === 'falha no login'){
            alert('falha no login')
          } else if (response.data.message === 'logado'){
            navigate("/home")
            setAndPersistToken(response.data.token)
          }

          setIsDisabled(false);

        });
        promise.catch(() => {
          setIsDisabled(false);
          return alert("Aconteceu um erro, tente novamente!");
        });
      }

    return (
        <MainContainer>
        <Logo src={logo}/>
        <MainText>Login</MainText>  
        <Button text={"ENTRAR COM GITHUB"} color={"#424445"}/>
        <Separation>
            <div></div>
            <p>ou</p>
            <div></div>
        </Separation>
        <Input placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} disabled={isDisabled}/>
        <Input placeholder="Senha" type="password" name="password" value={formData.password} onChange={handleChange} disabled={isDisabled}/>
        <Button text={"ENTRAR"} color={"#5A2FDA"} type="submit" disabled={isDisabled} onClick={handleSubmit}/>
        <Link onClick={() => navigate("/register")}>Não possuo cadastro</Link> 
        </MainContainer>
    )
}
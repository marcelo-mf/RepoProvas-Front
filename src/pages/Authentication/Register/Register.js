import { MainContainer, MainText, Logo, Link, Separation, Input } from "../style"
import logo from "../../../assets/Group 1.png"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom"
import { useState }  from "react";
import axios from "axios";


export default function Register() {


    const [isDisabled, setIsDisabled] = useState(false);
    const [formData, setFormData] = useState({email: '', password: '', confirmPassword: ''}); 

    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    console.log(formData.email, 'wagner curioso');

    function handleSubmit(e) {

        if(formData.password !== formData.confirmPassword) {
            alert("As senhas não coincidem");
            return
        }

        e.preventDefault();
        setIsDisabled(true);
    
        const promise = axios.post(
          "http://localhost:5000/signUp",
          formData
        );
    
        promise.then((response) => {
          setIsDisabled(false);
          navigate("/");
        });
        promise.catch((error) => {
          setIsDisabled(false);
          console.log(error)
          
          return alert("Aconteceu um erro, tente novamente!");
        });
      }

    return (
        <MainContainer>
        <Logo src={logo}/>
        <MainText>Cadastro</MainText>  
        <Button text={"ENTRAR COM GITHUB"} color={"#424445"}/>
        <Separation>
            <div></div>
            <p>ou</p>
            <div></div>
        </Separation>
        <Input placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} disabled={isDisabled}/>
        <Input placeholder="Senha" type="password" name="password" value={formData.password} onChange={handleChange} disabled={isDisabled}/>
        <Input placeholder="Confirme sua senha" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} disabled={isDisabled}/>
        <Button text={"CADASTRAR"} color={"#5A2FDA"} type="submit" disabled={isDisabled} onClick={handleSubmit}/>
        <Link onClick={() => navigate("/")}>Já possuo cadastro</Link> 
        </MainContainer>
    )
}
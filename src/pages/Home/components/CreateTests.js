import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateTestsContainer } from "../style";
import { useEffect } from "react";
import axios from "axios";

export default function CreateTests() {

    const [isDisabled, setIsDisabled] = useState(false);
    const [formData, setFormData] = useState({testName: '', testLink: '', categoryId:'', discipline:'', teacher:'', disciplineId:'', teacherId:''});
    const [selectData, setSelectData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        const promise = axios.get("http://localhost:5000/getFormData")
          
        promise.then((response) => {
            setSelectData(response.data);
          });

        promise.catch(() => {
            console.log("deu erro");
          });
    }, []);

    function handleChange(e) {
        console.log(e.target)
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsDisabled(true);

        const promise = axios.post(
          "http://localhost:5000/addTest",
          formData
        );
    
        promise.then((response) => {

          
          setFormData({testName: '', testLink: '', categoryId:'', discipline:'', teacher:'', disciplineId:'', teacherId:''})
          setIsDisabled(false);

        });
        promise.catch(() => {
          setIsDisabled(false);
          return alert("Aconteceu um erro, tente novamente!");
        });
      }

    

        console.log(formData);

    return (
        <CreateTestsContainer>
            <div>
            <h1>Adicione uma Prova</h1>
            </div>
            <input placeholder="Nome da Prova" name="testName" value={formData.testName} onChange={handleChange} disabled={isDisabled}/>
            <input placeholder="Link da Prova" name="testLink" value={formData.testLink} onChange={handleChange} disabled={isDisabled}/>
            {selectData !== null && 
                <>
                <select name="categoryId" onChange={handleChange} disabled={isDisabled}>
                <option value="" disabled selected hidden>Categoria</option>
                {selectData.categories.map(
                    category => (
                        <option key={category.id} value={parseInt(category.id)}>{category.name}</option>
                    )
                )} 
            </select>
            <select name="discipline" onChange={handleChange} disabled={isDisabled}>
                <option value="" disabled selected hidden>Disciplina</option>
                {selectData.disciplines.map(
                    discipline => (
                        <option 
                            onClick={() => setFormData({...formData, disciplineId: discipline.id})} 
                            key={discipline.id} 
                            value={discipline.name}>
                            {discipline.name}
                        </option>
                    )
                )} 
            </select>
            <select name="teacher" onChange={handleChange} disabled={isDisabled}>
                <option value="" disabled selected hidden>Pessoa Instrutora</option>
                {selectData.teachers.map(
                    teachers => teachers.discipline === formData.discipline && (
                        <option 
                            onClick={() => setFormData({...formData, teacherId: teachers.id})} 
                            key={teachers.id} 
                            value={teachers.teacher}>
                            {teachers.teacher}
                        </option>
                    )
                )} 
            </select> 
            </>
            } 
            <button type="submit" onClick={handleSubmit}>Enviar</button>
        </CreateTestsContainer>
    )
}
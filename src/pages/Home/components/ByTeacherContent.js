import TeacherDiv from "./Teachers";
import { useEffect, useState } from "react"
import axios from "axios"
import { Content, Search } from "../style";

export default function ByTeachersContent({section}) {

    const [teachers, setTeachers] = useState(null);
    const [searchValue, setSearchValue] = useState('');

    function handleChange(e) {
        setSearchValue(e.target.value);
    }

    useEffect(() => {

        const promise = axios.get(`http://localhost:5000/getTeachers/${searchValue}`)
          
        promise.then((response) => {
            setTeachers(response.data);
          });

        promise.catch(() => {
            console.log("deu erro");
          });
    }, [searchValue]);

    
    while (teachers === null) {return ''}

    return(
        <>
        <Search>
            <input 
            placeholder={section === 'DISCIPLINAS' ? 'Pesquise por disciplina' : 'Pesquise por pessoa instrutora'}
            value={searchValue} 
            onChange={handleChange}
            />
        </Search> 
        <Content>
            {teachers.map( teacher => (
                <TeacherDiv teacher={teacher.name}/>
            ))}
        </Content>
        </>
    )
}
import PeriodoDiv from "./Periodos";
import { useEffect, useState } from "react"
import axios from "axios"
import { Content, Search, MateriaDiv} from "../style";
import Provas from "./Provas";
import { IoIosArrowDown } from 'react-icons/io';

export default function ByDisciplinesContent({section}) {

    const [content, setContent] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [showTests, setShowTests] = useState(false);

    function handleChange(e) {
        setSearchValue(e.target.value);
    }

    function handleClick() {
        showTests === false ? setShowTests(true) : setShowTests(false)     
    }

    useEffect(() => {

        const promise = axios.get(`${searchValue === '' ? 'http://localhost:5000/getTerms' : `http://localhost:5000/getDisciplines/${searchValue}`}`)
          
        promise.then((response) => {
            setContent(response.data);
          });

        promise.catch(() => {
            console.log("deu erro");
          });
    }, [searchValue]);

    console.log(searchValue);

    while (content === null) {return ''}

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
            {searchValue === '' ?
            content.map( term => (
                <PeriodoDiv number={term.number}/>
            ))
            :
            content.map(disciplines =>  (
                <>
                    <MateriaDiv className='materia-div' onClick={() => handleClick()}>
                        <h2>{disciplines.materia}</h2>
                        <IoIosArrowDown size="22px" color="grey"/>
                    </MateriaDiv>
                    {showTests && <Provas TermNumber={disciplines.periodo} discipline={disciplines.materia}/>}
                </>
            ))
            }
        </Content>
        </> 
    )
}
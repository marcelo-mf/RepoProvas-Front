import { IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Provas from './Provas';


export default function Materia({TermNumber}) {

    const [content, setContent] = useState(null);
    const [showDisciplines, setShowDisciplines] = useState(false)
    const [showTests, setShowTests] = useState(false)

    useEffect(() => {

        const promise = axios.get("http://localhost:5000/getDisciplines")
          
        promise.then((response) => {
            setContent(response.data);
          });

        promise.catch(() => {
            console.log("deu erro");
          });
      }, []);

    const MateriaDiv = styled.div`

        box-sizing: border-box;

        z-index: 1;

        width: 700px;
        height: 80px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 40px;

        background-color: #FFFFFF;

        //border-radius: 40px;

        //filter: drop-shadow(0px 0px 0.5rem #DCDCDC);
        box-shadow: 0 5px 0.5em #DCDCDC;

        h2 {
            font-family: 'Poppins', sans-serif;
            font-size: 20px;
            font-weight: 300;
        }
`

    function handleClick() {
        showTests === false ? setShowTests(true) : setShowTests(false)     
    }

    while (content === null) return ('');

    console.log(TermNumber);

    return(
        <>
        {content.map(disciplines => disciplines.periodo === TermNumber && (
            <>
                <MateriaDiv className='materia-div' onClick={() => handleClick()}>
                    <h2>{disciplines.materia}</h2>
                    <IoIosArrowDown size="22px" color="grey"/>
                </MateriaDiv>
                {showTests && <Provas TermNumber={TermNumber} discipline={disciplines.materia}/>}
            </>
        ))}
        
        </>
        
    )

    
}
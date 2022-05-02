import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';
import styled from 'styled-components';
import Materia from './Materia';

export default function PeriodoDiv({number}) {

    const [showDisciplines, setShowDisciplines] = useState(false)

    const PeriodoDiv = styled.div`

    box-sizing: border-box;

    width: 700px;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 40px;

    background-color: #FFFFFF;

    z-index: 2;

    //border-radius: 40px;

    //filter: drop-shadow(0px 0px 0.5rem #DCDCDC);
    box-shadow: 0 5px 0.5em #DCDCDC;

    h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 25px;
        font-weight: 500;
        
    }

    
`

    function handleClick() {
        showDisciplines === false ? setShowDisciplines(true) : setShowDisciplines(false)     
    }

   

    return(
        <>
            <PeriodoDiv className='periodo-div' onClick={() => handleClick()}>
                <h1>{number} Período</h1>
                <IoIosArrowDown size="22px" />
            </PeriodoDiv>
            {showDisciplines && <Materia TermNumber={number}/>}
        </>
    )

    
}
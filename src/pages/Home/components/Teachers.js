import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';
import styled from 'styled-components';
import Materia from './Materia';
import TecahersTests from './ProvasTeachers';

export default function TeacherDiv({teacher}) {

    const [showTests, setShowTests] = useState(false)

    const TeacherDiv = styled.div`

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
        showTests === false ? setShowTests(true) : setShowTests(false)     
    }


    return(
        <>
            <TeacherDiv className='periodo-div' onClick={() => handleClick()}>
                <h1>{teacher}</h1>
                <IoIosArrowDown size="22px" />
            </TeacherDiv>
            {showTests && <TecahersTests teacher={teacher}/>}
        </>
    )

    
}
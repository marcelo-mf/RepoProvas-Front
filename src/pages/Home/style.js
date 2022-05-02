import styled from "styled-components";

const HomeContainer = styled.div`

    box-sizing: border-box;

    min-height: 100vh;
    height: fit-content;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #E5E5E5;

    padding-top: 160px;
    padding-bottom: 100px;
    
`

const Navigation = styled.div`

    width: 700px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const Buttons = styled.div`

    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .not-selected{
        height: 40px;
        width: 200px;

        border: none;
        border-radius: 100px;

        filter: drop-shadow(0px 0px 0.5rem #DCDCDC);

        background-color: #FFFFFF;

        color: #5A2FDA;
        font-weight: 500;
    }

    .selected{
        height: 40px;
        width: 200px;

        border: none;
        border-radius: 100px;

        filter: drop-shadow(0px 0px 0.5rem #DCDCDC);

        background-color: #5A2FDA;

        color: #FFFFFF;
        font-weight: 500;
    }

    .selected:hover{
        cursor: pointer;
    }

    .not-selected:hover{
        cursor: pointer;
    }
`

const Search = styled.div`

    width: 700px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    input{
        width: 100%;
        height: 50px;

        border: none;
        border-radius: 100px;

        filter: drop-shadow(0px 0px 0.5rem #DCDCDC);

        margin-top: 50px;

        padding: 0 20px;
    }
`

const Content = styled.div`

    width: 700px;

    display: flex;
    flex-direction: column;
    align-items: center;

    filter: drop-shadow(0px 0px 0.5rem #DCDCDC);

    margin-top: 60px;

    .periodo-div:hover{
        background-color: #DCDCDC;
        cursor: pointer;
    }

    .materia-div:hover{
        background-color: #DCDCDC;
        cursor: pointer;
    }

`
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

const Materias = styled.div`

    box-sizing: border-box;

    z-index: 1;

    width: 700px;
    height: 100px;

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

const Prova = styled.div`

    box-sizing: border-box;

    z-index: 0;

    width: 700px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding: 0 40px;

    background-color: #E5E5E5;

    //border-radius: 40px;

    //filter: drop-shadow(0px 0px 0.5rem #DCDCDC);
    box-shadow: 0 5px 0.5em #DCDCDC;

    h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 15px;
        font-weight: 400;
        color: #727272;
    }

    
`

const CreateTestsContainer = styled.div`

    width: 700px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 20px;

    margin-top: 30px;

    input{

        box-sizing: border-box;

        width: 100%;
        height: 50px;

        border: none;
        border-radius: 100px;

        font-size: 14px;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        color: grey;

        filter: drop-shadow(0px 0px 0.5rem #DCDCDC);

        padding: 0 20px;
    }

    select{

        width: 100%;
        height: 50px;

        background-color: #FFFFFF;

        border: none;
        border-radius: 100px;

        filter: drop-shadow(0px 0px 0.5rem #DCDCDC);

        padding-left: 20px;
        padding-right: 20px;

        font-size: 14px;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        color: grey;

        cursor: pointer;

        option{
            font-size: 15px;
            font-weight: 500;
            font-family: 'Poppins', sans-serif;
        }
 
    }   

    button{
        height: 36px;
        width: 700px;

        border-radius: 100px;
        border: none;
    
        background-color: #5A2FDA;

        color: white;
        font-weight: bold;

        cursor: pointer;

    }

    div{

        width: 700px;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        margin-bottom: 20px;
        padding-left: 30px;

        h1{
            font-size: 30px;
            font-weight: 500;
            font-family: 'Poppins', sans-serif;
        }
    }
    
`

export {HomeContainer, Navigation, Buttons, Search, Content, Materias, Prova, CreateTestsContainer, MateriaDiv}
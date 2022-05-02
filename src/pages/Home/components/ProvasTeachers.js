import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


export default function TecahersTests({teacher}) {

    const [tests, setTests] = useState(null);

    useEffect(() => {

        const promise = axios.get("http://localhost:5000/getTeachersTests")
          
        promise.then((response) => {
            setTests(response.data);
          });

        promise.catch(() => {
            console.log("deu erro");
          });
      }, []);


    const ProvaDiv = styled.div`

        box-sizing: border-box;

        z-index: 0;

        width: 700px;
        height: 40px;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        padding: 0 40px;

        background-color: #E5E5E5;

        //border-radius: 40px;

        //filter: drop-shadow(0px 0px 0.5rem #DCDCDC);
        box-shadow: 0 5px 0.5em #DCDCDC;

        a {

            display: flex;

            font-family: 'Poppins', sans-serif;
            font-size: 15px;
            font-weight: 400;
            color: #727272;

            h2{
                font-family: 'Poppins', sans-serif;
                font-size: 15px;
                font-weight: 600;
                color: #000000;

                margin-right: 10px;
            }

        }

        a:hover {
            cursor: pointer;
            color: #5A2FDA;
        }
    `

    function handleClick(link) {
        window.open(link);

        const promise = axios.post("http://localhost:5000/addView", {link: link})
          
        promise.then((response) => {
            
          });

        promise.catch(() => {
            console.log("deu erro");
          });
    }

    while (tests === null) return ('');

    console.log(tests);
    console.log(teacher);
    return(
        <>
        {tests.map(test => test.teacher === teacher && (  
            <ProvaDiv className='prova-div'>
                <a onClick={()=> handleClick(test.testLink)}><h2>{test.category}</h2> {test.test} ({test.discipline}) ({test.views} views)</a>
            </ProvaDiv>
        ))
        }
        </>
        
    )

    
}
import { useState } from "react";
import styled from "styled-components";

    const StyledMain = styled.main`
        background-color: #fff1f1;
        width: 100%;
        margin: 0 auto;
        padding: 20px 0;
        height: 120vw;
        text-align: left;
    `;

    const StyledHeading3 = styled.h3`
        font-size: calc(10px + 2vw);
        color: #6F00FF;
        margin-left: 20px;
        padding-top: 50px;
        `;

    const StyledList = styled.ul`
        font-size: calc(5px + 2vw);
        color: #3B0270;
        margin-left: 50px;
        margin-right: 50px;
        padding-top: 10px;
        `;

    const CalcContainer = styled.div`
        margin: 20px auto;
        padding: 15px;
        text-align: center;
        width: fit-content;
        background-color: #fff1f1;
        input {
            margin: 5px;
            padding: 5px;
            font-size: calc(8px + 2vw);
        }
        button {
            background-color: #E9B3FB;
            border: none;
            padding: 8px 12px;
            margin: 5px;
            font-size: calc(5px + 1.5vw);
        }
        p {
            margin-top: 15px;
            font-weight: bold;
            color: #3B0270;
            font-size: calc(5px + 1.5vw);

        }
       
    `;

    const CalcButtons = styled.div`
        margin-top: 10px; 
        button {
            margin-right: 10px;
            margin-top: 5px;
            padding: 5px 10px;
          }
    `;
    const StyledLabel = styled.label`
        margin-top: 15px;
        font-weight: bold;
        color: #3B0270;
        font-size: calc(5px + 1.5vw);

    `;


export default function Projects() {

    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    const [result, setResult] = useState<string | number>("");

    const num1 = Number(one);
    const num2 = Number(two);

    const doAdd =() => setResult(num1+num2);
    const doSubtract =() => setResult(num1-num2);
    const doMultiply =() => setResult(num1*num2);
    const doDivide =() => setResult(num1/num2);
    const doPower =() => {
        let result = 1;
        for (let i = 0; i<num2;i++){
            result *= num1;
        }
        setResult(result);
    };

    const clear = () => {
        setOne("");
        setTwo("");
        setResult("");
    };

    const NegResult = ( result: string | number) => {
        return{
            color: Number(result)<0 ? "red" : "black"
        };
    }
    return (
        <StyledMain>
            <title > Resume | Projects </title>
            <StyledHeading3>Personal Website</StyledHeading3>
            <StyledList>
                <li>
                    My website is my personal space to showcase my projects, skills, and experiences as an aspiring
                    software engineer working towards my computer science degree. Built using React, my website utilizes
                    JSX to create dynamic, interactive pages while leveraging multiple programming languages such as
                    HTML, CSS, and JavaScript. Developing this site helped me deepen my understanding of modern web
                    development while challenging me to continuously improve my coding skills. This site will keep
                    evolving as I take on new challenges and grow my skills.
                </li>
            </StyledList>

            <StyledHeading3>Calculator</StyledHeading3>
            <CalcContainer>
                <div>
                    <StyledLabel>Give me a number:</StyledLabel>
                    <input value={one} onChange={(e) => setOne(e.target.value)} />
                </div>
                <div>
                    <StyledLabel>Give me a number:</StyledLabel>
                    <input value={two} onChange={(e) => setTwo(e.target.value)} />
                </div>

                <CalcButtons>
                    <button onClick={doAdd}>Add</button>
                    <button onClick={doSubtract}>Subtract</button>
                    <button onClick={doMultiply}>Multiply</button>
                    <button onClick={doDivide}>Divide</button>
                    <button onClick={doPower}>Power</button>
                    <button onClick={clear}>Clear</button>
                </CalcButtons>
                <div>
                    <p>Result:</p>
                    <output id="output" style = {NegResult(result)}>{result}</output>
                </div>
            </CalcContainer>
        </StyledMain>
    );
}
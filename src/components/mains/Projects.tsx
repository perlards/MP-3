import { useState } from "react";
import styled from "styled-components";

    const StyledMain = styled.main`
        background-color: #fff1f1;
        width: 70%;
        margin: 0 auto;
        padding: 20px;
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
        margin-left: 50px;
    `;

    const CalcButtons = styled.div`
        margin-top: 10px; 
        button {
            margin-right: 10px;
            margin-top: 5px;
            padding: 5px 10px;
            font-size: 1rem;
          }
    `;
    const Result = styled.h3<{ isNegative: boolean }>`
        color: ${(props) => (props.isNegative ? "red" : "black")};
        margin-top: 10px;
    `;

function useCalculator() {
    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    const [result, setResult] = useState<number | null>(null);

    const calculate = (operation: string) => {
        const num1 = Number(one);
        const num2 = Number(two);
        let res = 0;

        switch (operation) {
            case "add":
                res = num1 + num2;
                break;
            case "subtract":
                res = num1 - num2;
                break;
            case "multiply":
                res = num1 * num2;
                break;
            case "divide":
                res = num1 / num2;
                break;
            case "power":
                res = Math.pow(num1, num2);
                break;
            default:
                res = 0;
        }

        setResult(res);
    };

    const clear = () => {
        setOne("");
        setTwo("");
        setResult(null);
    };

    return { one, setOne, two, setTwo, result, calculate, clear };
}
function Calculator() {
    const { one, setOne, two, setTwo, result, calculate, clear } = useCalculator();
    return (
        <CalcContainer>
            <div>
                <label>Give me a number:</label>
                <input value={one} onChange={(e) => setOne(e.target.value)} />
            </div>
            <div>
                <label>Give me a number:</label>
                <input value={two} onChange={(e) => setTwo(e.target.value)} />
            </div>

            <CalcButtons>
                <button onClick={() => calculate("add")}>Add</button>
                <button onClick={() => calculate("subtract")}>Subtract</button>
                <button onClick={() => calculate("multiply")}>Multiply</button>
                <button onClick={() => calculate("divide")}>Divide</button>
                <button onClick={() => calculate("power")}>Power</button>
                <button onClick={clear}>Clear</button>
            </CalcButtons>

            <div>
                <p>Result:</p>
                <Result isNegative={result !== null && result < 0}>{result !== null ? result : ""}</Result>
            </div>
        </CalcContainer>
    );
}

export default function Projects() {
    return (
        <StyledMain>
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
            <Calculator />
        </StyledMain>
    );
}
import styled from "styled-components";

const StyledHeader = styled.footer`
    background-color: #fff1f1;
    font-size: calc(8px + 2vw);
    //margin-bottom: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: left;
`;
export default function Header(){
    return(
        <StyledHeader>
            <h1>Perla Ruiz's Resume</h1>
            <p> An online resume showcasing Perla's accomplishments! </p>
        </StyledHeader>
    )
}
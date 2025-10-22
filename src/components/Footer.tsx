import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #fff1f1;
    font-size: calc(8px + 2vw);
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: left;
    width: 100%;
`;
export default function footer(){
    return(
    <StyledFooter>
        <p> All rights reserved to Perla Ruiz del Solar &#169;<a href="">Credits</a></p>
    </StyledFooter>
)
}
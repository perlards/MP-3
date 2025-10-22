import {Link} from "react-router";
import styled from "styled-components";


const StyledNav = styled.nav`
    background-color: #E9B3FB;
    width: 30%;
    @media screen and (max-width: 750px){
    width: 100%;
}
    `;
const StyledUl = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    background-color: #E9B3FB;
    @media screen and (max-width: 750px){
        flex-direction: row;
        justify-content: space-evenly;
    }

  @media screen and (max-width: 750px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;


const StyledLi = styled.li`
    background-color: #e9b3fb;
    font-size: calc(2px + 2vw);
    margin: 50px 0;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
    `;

export default function Nav() {
    return(
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to ={`/`}>Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to ={`/education`}>Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to ={`/experience`}>Experience</StyledLink></StyledLi>
                <StyledLi><StyledLink to ={`/projects`}>Projects</StyledLink></StyledLi>
                <StyledLi><StyledLink to ={`/references`}>References</StyledLink></StyledLi>
                <StyledLi><StyledLink to ={`/hobbies`}>Hobbies</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    );
}
import {Link} from "react-router";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;
const StyledNav = styled.nav`
    background-color: #E9B3FB;
    width: 30%;

    @media screen and (max-width: 750px){
    width: 100%;
}
    `;
const StyledUl = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #e9b3fb;
  height: 50%;
  margin: 0 auto;

  @media screen and (max-width: 750px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
const StyledLi = styled.li`
  background-color: #e9b3fb;
`;


export default function Nav() {
    return(
        <Container>
        <StyledNav>
            <StyledUl>
                <StyledLi><Link to ={`/`}>Home</Link></StyledLi>
                <StyledLi><Link to ={`/education`}>Education</Link></StyledLi>
                <StyledLi><Link to ={`/experience`}>Experience</Link></StyledLi>
                <StyledLi><Link to ={`/projects`}>Projects</Link></StyledLi>
                <StyledLi><Link to ={`/references`}>References</Link></StyledLi>
                <StyledLi><Link to ={`/hobbies`}>Hobbies</Link></StyledLi>
            </StyledUl>
        </StyledNav>
        </Container>
    );
}
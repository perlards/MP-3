import Header from "./Header.tsx";
import Footer from "./Footer";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./mains/Home.tsx";
import Education from "./mains/Education.tsx";
import Experience from "./mains/Experience.tsx";
import Projects from "./mains/Projects.tsx";
import References from "./mains/References.tsx";
import Hobbies from "./mains/Hobbies.tsx";
import styled from "styled-components";

const StyledBackground = styled.div`
    background-color: #fff1f1;

`;
const StyledPageWrapper = styled.div`
    background-color: #fff1f1;
    width: 80vw;
    margin: 0 auto;
    text-align: center;
    


`;
const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

const MainContent = styled.main`
    width: 70%;

    @media screen and (max-width: 750px) {  
        width: 100%;
  }
`;

export default function Root(){
    return (
        <>
        <StyledBackground>
        <StyledPageWrapper>
            <Header />
            <StyledDiv>
                <Nav/>
                <MainContent>
                <Routes>
                    <Route path={`/`} element={<Home/>}/>
                    <Route path={`/education`} element={<Education/>}/>
                    <Route path={`/experience`} element={<Experience/>}/>
                    <Route path={`/projects`} element={<Projects/>}/>
                    <Route path={`/references`} element={<References/>}/>
                    <Route path={`/hobbies`} element={<Hobbies/>}/>
                </Routes>
                </MainContent>
            </StyledDiv>
            <Footer/>
        </StyledPageWrapper>
        </StyledBackground>
        </>
    )
}
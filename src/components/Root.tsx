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




export default function Root(){
    return (
        <>
        <div>
            <Header />
            <div>
                <Nav/>
                <Routes>
                    <Route path={`/`} element={<Home/>}/>
                    <Route path={`/education`} element={<Education/>}/>
                    <Route path={`/experience`} element={<Experience/>}/>
                    <Route path={`/projects`} element={<Projects/>}/>
                    <Route path={`/references`} element={<References/>}/>
                    <Route path={`/hobbies`} element={<Hobbies/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
        </>
    )
}
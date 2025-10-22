import styled from "styled-components";

    const StyledMain = styled.main`
        background-color: #fff1f1;
        width: 100%;
        height: 100vw;
        margin: 0 auto;
        padding: 20px 0;
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

export default function Education(){
    return (
        <StyledMain>
            <title > resume | Education </title>
            <StyledHeading3>Boston University 2027</StyledHeading3>
                <StyledList>
                    <li>Bachelor of Arts, Computer Science, Minor in Business Administration and Management</li>
                    <li>Relevant Coursework: Java, Python, Computer Systems, Software Engineering Career Prep, Probability, Discrete Math, Linear Algebra, Business and Ethics, Statistics for Management, Measuring Financial Value, and Intro to Business Law.</li>
                    <li>Currently taking: Analysis of Algorithm, Web Application Development, Analytic Thinking Business</li>
                    <li>Clubs: BUWiCS, BostonHacks, Alianza Latina.</li>

                </StyledList>
            <StyledHeading3>Cooper City High School 2023</StyledHeading3>
                <StyledList>
                    <li>I attended high school in Cooper City, Florida. </li>
                    <li>Where I was in the top 3% of my class. </li>
                    <li>Participated in varsity Track and Field and Cross Country. </li>
                    <li>President of my schools Spanish Club and Spanish Honor Society as well as was involved in my schools Robotics team, Math Honor Society, English Honor Society, Rho Kappa, Multicultural and DECA.</li>
                </StyledList>
        </StyledMain>

    );
}
import styled from "styled-components";
    const StyledMain = styled.main`
        background-color: #fff1f1;
        width: 100%;
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

    const StyledHeading4 = styled.h4`
          font-size: calc(8px + 2vw);
          color: #3B0270;
          margin-left: 30px;
        `;

    const StyledList = styled.ul`
          font-size: calc(5px + 2vw);
          color: #3B0270;
          margin-left: 50px;
          margin-right: 50px;
          padding-top: 10px;
        `;

export default function Experience(){
    return (
        <StyledMain>
            <title > Resume | Experiences </title>
            <StyledHeading3>BostonHacks</StyledHeading3>
                <StyledHeading4>Marketing Officer (current position)</StyledHeading4>
                    <StyledList>
                        <li>Manage social media campaigns and promotional content to increase engagement and attendance. </li>
                        <li>Coordinated with 6 member team to design marketing strategies, outreach initiatives, and branding materials to attract sponsors and participants.</li>
                    </StyledList>
            <StyledHeading3>Seminole Tribe of Florida</StyledHeading3>
                <StyledHeading4>IT Department Internship (summer 2024)</StyledHeading4>
                    <StyledList>
                        <li>Gained hands-on experience in creating and using queries on platforms such as ServiceNow to resolve IT-related issues efficiently. </li>
                        <li>Shadowed IT professionals in various roles to gain insight into different functions within department, enhancing understanding of key processes and operations.</li>
                    </StyledList>
            <StyledHeading3>Tele-fund at Boston University</StyledHeading3>
                <StyledHeading4>Caller (spring 2024)</StyledHeading4>
                    <StyledList>
                        <li>Engaged in alumni outreach and donor communication to promote university involvement, foster positive relationships, and highlight the impact of giving.</li>
                        <li>Utilized persuasive communication in a high-volume call environment to boost participation and support fundraising goals while maintaining professionalism. </li>
                    </StyledList>
        </StyledMain>
    );
}
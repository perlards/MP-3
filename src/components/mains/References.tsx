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
export default function Home(){
    return (
        <StyledMain>
            <StyledHeading3>IT Ops Mgr</StyledHeading3>
                <StyledHeading4>Alejandro Pajon</StyledHeading4>
                    <StyledList>
                        <li>Phone # : 786-512-6031.</li>
                        <li>Mr. Pajon was the operations manager of the department that I worked at the seminole tribe of florida. He offered his reference at the end of my internship and extended his information for this purpose.</li>

                    </StyledList>
            <StyledHeading3>Tele-fund Supervisor</StyledHeading3>
                <StyledHeading4>Pranav Sakthi</StyledHeading4>
                    <StyledList>
                        <li>Phone # : 857-498-0596.</li>
                        <li>Pranav was the shift leader when I worked at BU tele-fund. He offered me his information as well in order to use it as a reference after we worked together at the call center for a semester.</li>
                    </StyledList>
            <StyledHeading3>Friend</StyledHeading3>
                <StyledHeading4>Amelia Baez</StyledHeading4>
                    <StyledList>
                        <li>Phone # : 473-637-2629.</li>
                        <li>Amelia Baez is a peer at Boston University who is a trusted person who could speak on my behalf and I would put down as a personal reference. </li>
                    </StyledList>
    </StyledMain>
    );
}
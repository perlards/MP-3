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
            <StyledHeading3>Sports</StyledHeading3>
                <StyledHeading4>Soccer</StyledHeading4>
                    <StyledList>
                        <li>  I love playing soccer I played rec soccer from the age of 10 up to my senior year in high school. It's my favorite sport to play and to watch!</li>
                    </StyledList>
                <StyledHeading4>Running</StyledHeading4>
                    <StyledList>
                        <li> I have been running for the past 6 years. I started running because my older sister did it as well in High School and I wanted to be a part of it as well.</li>
                    </StyledList>
                <StyledHeading4>Spin</StyledHeading4>
                    <StyledList>
                        <li>I have just recently started taking up spin at REVD a cycling place in copley center. It has quickly become a favorite past time of mine.</li>
                    </StyledList>
            <StyledHeading3>Personal</StyledHeading3>
                <StyledHeading4>Reading</StyledHeading4>
                    <StyledList>
                        <li> I have always enjoyed reading since I was a kid some of my favorite books are : Divergent, Pride and Prejudice, and The Midnight Library. fun fact, in about 10 months I read over 65 books.</li>
                    </StyledList>
                <StyledHeading4>Junk Journaling</StyledHeading4>
                    <StyledList>
                        <li> I recently started junk journaling as well. I have been a hoarder for my whole life and recently have been able to work on this by scrapbooking what I would usually keep in a box for year it;s a fun and creative outlet that I look forward to doing each week!</li>
                    </StyledList>
        </StyledMain>
    );
}
import styled from "styled-components";
import ProfilePic from "../../assets/profile-pic.jpeg"

const StyledMain = styled.main`
  background-color: #fff1f1;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  padding: 20px;
`;

const StyledProfileImage = styled.img`
  width: 250px;
  height: auto;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const StyledParagraph = styled.p`
  font-size: calc(8px + 1vw);
  color: #3B0270;
  margin: 10px auto;
  width: 80%;
  line-height: 1.5;
`;

export default function Home() {
    return (
        <StyledMain>
            <StyledProfileImage
                src={ProfilePic}
                alt="Perla Ruiz's Profile Picture"/>

            <StyledParagraph>
                Hi, I’m Perla! I’m a Computer Science student with a passion for
                building practical and creative solutions. I enjoy tackling challenging
                projects, learning new technologies, and turning ideas into reality.
            </StyledParagraph>
            <StyledParagraph>
                I’m making this website for my CS 391 class as part of my MP-1
                assignment!
            </StyledParagraph>
        </StyledMain>
    );
}

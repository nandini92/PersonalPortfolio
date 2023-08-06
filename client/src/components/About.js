import styled from "styled-components";

import { Text } from "../contexts/LanguageContext";

const About = ({ opacity }) => {
  // const imageCarouselGenerator = () => {
  //   const images = [];

  //   for (let i = 1; i < 11 + 1; i++) {
  //     images.push(
  //       <img src={`/assets/clinic/clinic_${i}.jpg`} alt={`clinic_${i}`} key={`clinic_${i}`}/>
  //     );
  //   }

  //   return images;
  // };

  return (
    <Wrapper id="about">
      <Content>
        <Avatar src="/assets/NandiniAsokan2.JPG" alt="Nandini Asokan" />
        <Description opacity={opacity}>
        <Title>A leap into the future...</Title>
          <p>After 6 years in the finance industry as a support engineer, I made the leap to become a Full-Stack Developer. I made this decision in order to contribute meaningfully towards technological solutions.</p>
          <p>I discovered quickly how my years in operations and exposure me to various technologies has made me a client-conscious and production conscious developer. In Level 2, I worked with everything from communications to debugging to security. Below are just a few core capabilities that I bring to the table:</p>
          <ul>
            <li>I am very efficient at analyzing and resolving problems (due to my great eye for detail and understanding of system architecture).</li>
            <li>I take initiative and actively contribute solutions as well as take ownership of them.</li>
            <li>I am comfortable working in a fast-paced environment due to my experience in the finance industry. </li>
          </ul>
        </Description>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5% 10% ;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
`;
const Avatar = styled.img`
  z-index: 100;
  height: 450px;
  margin: 0 3%;
  border-radius: 10px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 80px;
`;

const Description = styled.div`
  width: 70%;
  font-weight: 300;
  line-height: 1.7rem;

  *{ 
    margin: 1.25rem 0;
  }
`;

export default About;

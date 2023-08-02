import { useEffect, useState } from "react";
import styled, {keyframes} from "styled-components";

const Home = () => {
  const [name, setName] = useState();

  useEffect(() => {
    const nameFull = "Nandini.";
    let i = 0;

    const typeWriterInterval = setInterval(() => {
        setName(nameFull.substring(0,i++));

        if(i === 9) {
          clearInterval(typeWriterInterval);
        }
    }, 100);
  }, [])

  return (
    <Wrapper>
      <Content>
        <Heading>
          <p>
            Hi, I'm <span>{name}</span>
          </p>
          <p>I'm a full-stack developer.</p>
        </Heading>
        <Avatar src="./assets/ProfilePic.PNG" alt="profile picture" />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 20%;
`;
const textCursor = keyframes`
from{
  border-right-color: black;
}to{
  border-right-color: transparent;
}
`;
const Heading = styled.h1`
  align-self: center;
  font-size: 3rem;
  line-height: 3.5rem;
  margin: 0;

  span {
    color: var(--red-pantone);
    border-right: 2px solid black;
    animation:  ${textCursor} 1000ms steps(44) infinite;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
`;
export default Home;

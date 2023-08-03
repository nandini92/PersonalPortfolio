import { useEffect, useState } from "react";
import styled, {keyframes} from "styled-components";
import { HashLink } from "react-router-hash-link";

import Menu from "./Menu";
import Skills from "./Skills";

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

  const scrollWithOffset = (el, yOffset) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Wrapper>
      <Content>
        <div>
        <Heading>
          <p>
            Hi, I'm <span>{name}</span>
          </p>
          <p>I'm a full-stack developer.</p>
        </Heading>
        <Options>
          <Option smooth to="/#skills">
            Skills
          </Option>
          <Option
            smooth
            to="/#projects"
            scroll={(el) => scrollWithOffset(el, -100)}
          >
            Projects
          </Option>
          <Option
            smooth
            to="/#about"
            scroll={(el) => scrollWithOffset(el, -100)}
          >
            About
          </Option>
          <Option smooth to="/#contact">
            Contact
          </Option>
        </Options>
        </div>
        <Avatar src="./assets/ProfilePic.PNG" alt="profile picture" />
      </Content>
      <Skills />
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
const Options = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 5% 0;
`
const Option = styled(HashLink)`
  color: var(--red-pantone);
  border: 1px solid var(--red-pantone);
  text-decoration: none;
  text-align: center;
  padding: 5px;
  transition: all 0.35s ease-in-out;

  &:hover {
    color: var(--honeydew);
    background-color: var(--red-pantone);
  }
`;
const Avatar = styled.img`
  border-radius: 50%;
`;
export default Home;

import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { HiDocumentArrowDown } from "react-icons/hi2"

import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const [rollDown, setRollDown] = useState(false);

  return (
    <Wrapper>
        {window.screen.width > 1000 ? (
          <Links>
            <Option to={`https://www.linkedin.com/in/nandini-asokan/`} target="blank">
              <BsLinkedin />
            </Option>
            <Option to={`https://github.com/nandini92`} target="blank">
              <BsGithub />
            </Option>
            <Option>
              <HiDocumentArrowDown />
            </Option>
          </Links>
        ) : !rollDown ? (
          <Burger onClick={() => setRollDown(true)} />
        ) : (
          <Cross onClick={() => setRollDown(false)} />
        )}
        <LanguageSelector />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
`;
const Links = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-between;
  font-size: 1.8rem;
`;
const Option = styled(Link)`
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  line-height: 100px;
  width: 100%;
  transition: all 0.35s ease-in-out;
  color: black;

  &:hover {
    color: var(--red-pantone);
  }
`;
const Burger = styled(GiHamburgerMenu)`
  font-size: 1.1em;
  align-self: center;
  position: relative;
`;
const Cross = styled(RxCross2)`
  font-size: 1.1em;
  align-self: center;
  position: relative;
`;
export default Header;

import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

import { Text } from "../contexts/LanguageContext";

const Menu = ({ rollDown, setRollDown }) => {
  const scrollWithOffset = (el, yOffset) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Dropdown onClick={() => setRollDown(false)}>
      {rollDown && (
        <>
          <Option smooth to="/#home">
            <Text tid="option1" />
          </Option>
          <Option
            smooth
            to="/#about-us"
            scroll={(el) => scrollWithOffset(el, -100)}
          >
            <Text tid="option2" />
          </Option>
          <Option
            smooth
            to="/#projects"
            scroll={(el) => scrollWithOffset(el, -100)}
          >
            <Text tid="option3" />
          </Option>
          <Option smooth to="/#contact">
            <Text tid="option4" />
          </Option>
        </>
      )}
    </Dropdown>
  );
};

const Dropdown = styled.div`
  width: 100%;
  background-color: var(--grey);
  display: flex;
  flex-direction: column;
`;

const Option = styled(HashLink)`
  color: var(--light-grey);
  width: 100%;
  text-decoration: none;
  text-align: center;
  padding: 5px;
  transition: all 0.35s ease-in-out;

  &:hover {
    background-color: var(--yellow);
    font-size: 1.08em;
  }
`;

export default Menu;

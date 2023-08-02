import { useContext } from "react";
import styled from "styled-components";

import { languageOptions } from "../languages/index.js";
import { LanguageContext } from "../contexts/LanguageContext";

const LanguageSelector = () => {
  const { userLanguage, changeUserLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    changeUserLanguage(event.target.value);
  };


  return (
    <LanguageOptions>
      {Object.entries(languageOptions).map(([id, name]) => (
        <Option key={id} value={id} onClick={handleLanguageChange} userLanguage={userLanguage === id}>
          {name}
        </Option>
      ))}
    </LanguageOptions>
  );
};

const LanguageOptions = styled.div` 
  display: flex;
  width: 15%;
  justify-content: center;
  align-items: center;
`;

const Option = styled.button`
  color: ${(props) => props.userLanguage ? `var(--yellow)` : `var(--dark-grey)`};
  border: none;
  background-color: inherit;
  padding: 20px;
  text-decoration: none;
  text-align: center;

  &:hover {
    color: var(--yellow);
  }
`;

export default LanguageSelector;

import styled, { keyframes } from "styled-components";

const Skills = () => {
  return (
    <Block>
      <img
        src="https://user-images.githubusercontent.com/10675806/206295271-31c32925-ddcf-485b-acf2-bc51fc98915a.png"
      />
      <img
        width="100px"
        src="https://user-images.githubusercontent.com/10675806/206295347-7acaea2b-6ec8-4edd-bc8f-4b023fe69cd9.png"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
      />
      <img
        src="https://user-images.githubusercontent.com/10675806/206295366-e00f4f36-d09e-4d47-bd90-2406e9e97e48.png"
      />
      <img
        src="https://user-images.githubusercontent.com/10675806/206295378-38937501-021b-47ac-aea9-5b9ffa8d8ac5.png"
      />
      <img
        src="https://user-images.githubusercontent.com/10675806/206295396-4adfdf27-0d20-497e-9ab7-855ead36fb33.png"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
      />
    </Block>
  );
};
const slideUp = keyframes`
  from {
    transform: translateY(200%);
    opacity: 0;
  }
`;
const Block = styled.div`
  display: flex;
  align-self: center;
  width: 57%;
  height: 11%;
  animation: ${slideUp} 1s ease-in-out;

  * {
    padding: 10px;
    margin: 10px;
    width: 85px;
  }
`;

export default Skills;

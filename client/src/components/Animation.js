import styled, { keyframes } from "styled-components";

const Animation = () => {
    return ( 
        <Circle1>
        </Circle1>
        );
}

const Pop = keyframes`
  from {
    transform: scale(2);
  }
  to {
    transform: scale(0);
  }
`;

const Pop2 = keyframes`
  from {
    transform: scale(2);
  }
  to {
    transform: scale(0);
  }
`;

const Circle1 = styled.div` 
  background-color: var(--red-pantone);
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  animation: ${Pop} 1000ms forwards;
`;
const Circle2 = styled.div`
  background-color: var(--honeydew);
  width: 100%;
  height: 100%;
  border-radius: 50%;

  animation: ${Pop2} 2000ms forwards;
`;
 
export default Animation;
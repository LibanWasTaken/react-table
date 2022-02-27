import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <div></div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  div {
    margin-top: 10rem;
    animation: loading-spinner 1s linear infinite;
    border-color: #4ade80 #0000 #0000 #4ade80;
    border-radius: 50%;
    border-style: solid;
    border-width: 5px;
    box-sizing: border-box;
    height: 60px;
    width: 60px;
  }
  @keyframes loading-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(1turn);
    }
  }
`;

export default Loading;

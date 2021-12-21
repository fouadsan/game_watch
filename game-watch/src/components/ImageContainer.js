import React from "react";
import styled from "styled-components";

function ImageContainer() {
  return (
    <Wrapper className="img-container">
      <img src="pop3.jpg" alt="pop3" className="main-img" />
    </Wrapper>
  );
}

const Wrapper = styled.article`
  box-shadow: var(--dark-shadow);
  animation: roll 10s infinite;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ImageContainer;

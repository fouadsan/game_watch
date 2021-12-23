import React, { useState } from "react";
import styled from "styled-components";

function ImageContainer() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Wrapper show={isImageLoaded} className="img-container">
      <img
        src="app_example.png"
        alt="app"
        onLoad={() => setIsImageLoaded(true)}
        className="main-img"
      />
    </Wrapper>
  );
}

const Wrapper = styled.article`
  width: 285px;
  height: 500px;
  background-color: var(--clr-white-opacity);
  border-radius: 20px;
  box-shadow: var(--dark-shadow);
  animation: ${(props) => (props.show ? "bounce 10s infinite" : "none")};

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

export default ImageContainer;

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
  width: 320px;
  height: 550px;
  animation: ${(props) => (props.show ? "bounce 10s infinite" : "none")};

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

export default ImageContainer;

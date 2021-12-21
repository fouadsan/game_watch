import React from "react";
import styled from "styled-components";

import TextContainer from "./TextContainer";
import ImageContainer from "./ImageContainer";
import StoreButtons from "./StoreButtons";

function Foreground() {
  return (
    <Wrapper>
      <div className="section section-center">
        <div className="row">
          <TextContainer />
          <ImageContainer />
        </div>
        <StoreButtons />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;

  overflow: hidden;
  color: white;
  background-color: rgba(0, 0, 0, 0.65);

  .row {
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 667px) {
    .img-container {
      display: none;
    }
  }
`;

export default Foreground;

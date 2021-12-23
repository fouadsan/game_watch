import React from "react";
import styled from "styled-components";

import TextContainer from "./TextContainer";
import ImageContainer from "./ImageContainer";
import StoreButtons from "./StoreButtons";

function Foreground() {
  return (
    <Wrapper className="page-100">
      <div className="section-center">
        <div className="container">
          <TextContainer />
          <ImageContainer />
        </div>
        <StoreButtons />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  color: white;
  background: var(--clr-black-opacity);

  .section-center {
    height: 100%;
    width: 100%;
  }

  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 1190px) {
    .img-container {
      display: none;
    }
  }
`;

export default Foreground;

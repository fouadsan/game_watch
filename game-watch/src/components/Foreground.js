import React from "react";
import styled from "styled-components";

import TextContainer from "./TextContainer";
import ImageContainer from "./ImageContainer";
import StoreButtons from "./StoreButtons";

function Foreground() {
  return (
    <Wrapper className="page-100">
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
  display: grid;
  place-items: center;
  color: white;
  background: var(--clr-black-opacity);

  .row {
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

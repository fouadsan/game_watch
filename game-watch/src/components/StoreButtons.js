import React from "react";
import styled from "styled-components";

function StoreButtons() {
  return (
    <Wrapper>
      <img src="playstore.png" alt="playstore-badge" />
      <img src="appstore.png" alt="appstore-badge" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;

  img {
    margin-right: 0.5rem;
    cursor: pointer;
  }

  @media (max-width: 448px) {
    flex-direction: column;
    align-items: center;

    img {
      width: 50%;
      height: 50%;
      margin-bottom: 0.5rem;
    }
  }
`;

export default StoreButtons;

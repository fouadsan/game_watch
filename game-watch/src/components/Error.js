import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper className="section section-center">
      <h4>there was an error...</h4>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h4 {
    color: var(--clr-white);
  }

  @media only screen and (min-width: 411px) and (max-width: 504px) {
    h4 {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 410px) {
    h4 {
      font-size: 12px;
    }
  }
`;

export default Error;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <Wrapper className="page-100">
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  background: var(--clr-black);
  color: var(--clr-white);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 8rem;
  }

  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }

  .btn {
    margin-top: 1rem;
  }
`;

export default ErrorPage;

import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function Background() {
  const images = useSelector((state) => state.images);

  return (
    <Wrapper>
      <ul>
        {images &&
          images.map((image) => {
            const { id, src, alt } = image;
            return (
              <li key={id}>
                <img src={src} alt="alt" />
              </li>
            );
          })}
      </ul>

      <ul></ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  background-color: var(--clr-black);
  position: fixed;
  // overflow: hidden;

  z-index: -1;

  ul {
    zoom: 1;
  }

  li {
    width: 90px;
    height: 120px;

    display: inline-block;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default Background;

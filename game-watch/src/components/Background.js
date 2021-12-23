import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useGlobalContext } from "../context";
import { IMAGES } from "../utils/constants";
import Error from "./Error";
import Loading from "./Loading";

function Background() {
  const {
    posters_loading: loading,
    posters_error: error,
    posters,
  } = useGlobalContext();

  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(posters);
    console.log(posters);
  }, [posters]);

  if (loading) {
    return (
      <Wrapper>
        <Loading />;
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <Error />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ul>
        {IMAGES &&
          IMAGES.map((image) => {
            const { id, src } = image;
            return (
              <li key={id}>
                <img src={src} alt="game poster" />
              </li>
            );
          })}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--clr-black);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;

  ul {
    display: grid;
    grid-template-columns: repeat(21, 1fr);
  }

  li {
    width: 90px;
    height: 120px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default Background;

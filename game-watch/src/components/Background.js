import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import GamesRow from "./GamesRow";

function Background() {
  const images = useSelector((state) => state.images);

  return (
    <Wrapper>
      <GamesRow images={images} />
      <GamesRow images={images} />
      <GamesRow images={images} />
      <GamesRow images={images} />
      <GamesRow images={images} />
      <GamesRow images={images} />
      <GamesRow images={images} />
      <GamesRow images={images} />
      <GamesRow images={images} />
      <GamesRow images={images} />
      <GamesRow images={images} />
      <GamesRow images={images} />
      <GamesRow images={images} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  background-color: var(--clr-black);
  overflow: hidden;
  z-index: -1;
`;

export default Background;

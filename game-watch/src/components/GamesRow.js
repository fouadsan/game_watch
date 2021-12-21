import React from "react";
import styled from "styled-components";

function GamesRow({ images }) {
  console.log(images);
  return (
    <Wrapper>
      {images.map((image) => {
        const { id, src, alt } = image;
        return (
          <div key={id} className="image-container">
            <img src={src} alt={alt} />
          </div>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default GamesRow;

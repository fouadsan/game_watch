import React from "react";
import styled from "styled-components";
function BannerText() {
  return (
    <Wrapper>
      <div className="header">
        <div className="title">
          <h2>game watch</h2>
        </div>
      </div>
      <div className="description">
        <p>
          Game Watch is a mobile application which i built for learning react
          native, you get all informations, news about your games, you can also
          mark your favorite ones and discover others by their genres.
        </p>
        <p>Contact: f.benayad95@gmail.com</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .description {
    min-height: 230px;
  }

  p {
    margin-top: 1rem;
    text-align: auto;
  }
`;

export default BannerText;

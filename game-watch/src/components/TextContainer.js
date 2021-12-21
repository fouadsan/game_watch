import React from "react";
import styled from "styled-components";

function BannerText() {
  return (
    <Wrapper>
      <div className="header">
        <div className="logo">
          <h4>logo</h4>
        </div>
        <div className="title">
          <h2>fouad benayad</h2>
        </div>
      </div>
      <div className="description">
        <p>
          Games Tracker is an app where you keep track of all the games you are
          interested in by tracking them, you can mark your playing status on
          tracked games. It allows you to check upcoming, most popular games
          easily filtered by the platforms of your choice, it recommends you
          games based on the games you have tracked and you can optionally get
          notified about the newly released games from your tracked collection
          or selected platforms. Whats different?: you can track a series of
          games, see your playing progress on it and get info / notifications on
          upcoming or newly released games in that series. Contact:
          support@gamestracking.com
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .header {
    display: flex;
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

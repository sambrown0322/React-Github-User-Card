import React from "react";
import styled from "styled-components";

const FollowersStyle = styled.div`
  margin-top: 2%;
  div {
    display: flex;
    width: 30%;
    margin: 1% auto;
  }
  img {
    margin: 0 1%;
    width: 20%;
  }
`;

class Followers extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <FollowersStyle>
        Followers:
        {this.props.followers.map((el) => {
          return (
            <div key={el.id}>
              <img src={el.avatar_url} />
              <h3>{el.login}</h3>
            </div>
          );
        })}
      </FollowersStyle>
    );
  }
}

export default Followers;

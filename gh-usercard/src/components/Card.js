import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 20%;
  }
  div {
    margin-left: 1%;
  }
`;

class Card extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <CardStyle>
        <img src={this.props.users.avatar_url} />
        <div>
          <h2>{this.props.users.name}</h2>
          <p>{this.props.users.login}</p>
          <p>{this.props.users.bio}</p>
          <p>Location: {this.props.users.location}</p>
          <p>Following: {this.props.users.following}</p>
          <p>Followers: {this.props.users.followers}</p>
        </div>
      </CardStyle>
    );
  }
}
export default Card;

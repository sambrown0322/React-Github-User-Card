import React from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";
import Followers from "./components/Followers";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      followers: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/sambrown0322")
      .then((res) => {
        console.log(res);
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://api.github.com/users/sambrown0322/followers")
      .then((res) => {
        console.log(res);
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <Card users={this.state.users} />
        <Followers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;

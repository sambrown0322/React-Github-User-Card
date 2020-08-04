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
      searchText: "",
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
  handleChanges = (e) => {
    const { value } = e.target;
    this.setState({
      searchText: value,
    });
  };
  fetchHandle = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.searchText}`)
      .then((res) => {
        this.setState({
          users: res.data,
        });
      });
    axios
      .get(`https://api.github.com/users/${this.state.searchText}/followers`)
      .then((res) => {
        console.log(res);
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="App">
        <Card users={this.state.users} />
        <Followers followers={this.state.followers} />
        <label>
          {" "}
          Type in a Github handle:{" "}
          <input
            type="text"
            value={this.state.searchText}
            onChange={this.handleChanges}
          />
          <button onClick={this.fetchHandle}>Search</button>
        </label>
      </div>
    );
  }
}

export default App;

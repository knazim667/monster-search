import React, { Component } from "react";
import Cardlist from "./components/cardList";
import SearchBox from "./components/searchBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ searchField: value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div>
        <div className="container py-5 text-center">
          <h1 className="text-center mb-5">Monster Players</h1>
          <SearchBox value={searchField} onChange={this.handleChange} />
          <Cardlist monster={filterMonsters} />
        </div>
      </div>
    );
  }
}

export default App;

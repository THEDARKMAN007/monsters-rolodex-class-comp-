import { Component } from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import "./App.css";


 class App extends Component {
  //state origin and creation
  constructor() {
    super();
    this.state = { monsters: [] };
  }

  // runs on first rendering
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users, searchField: "" };
        })
      );
  }

  // method
  onSearchChange = (e) => {
    e.preventDefault();
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { onSearchChange } = this;
    const { monsters, searchField } = this.state;

    return (
      <div className="App">
        <h1 className="app-title"> Monsters Rolodex</h1>
        <SearchBox
          name="monsters-search-value"
          className="monsters-search-box"
          placeholder="search monster"
          eventHandler={onSearchChange}
        />
        <CardList monsters={monsters} search={searchField} />
      </div>
    );
  }
}

export default App;

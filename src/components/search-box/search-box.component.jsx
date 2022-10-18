import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component {
  render() {
    const { name, className, placeholder, eventHandler } = this.props;

    return (
      <div>
        <input
          type='search'
          name={name}
          className={`search-box ${ className }`}
          placeholder={placeholder}
          onChange={eventHandler}
        />
      </div>
    );
  }
}

export default SearchBox;

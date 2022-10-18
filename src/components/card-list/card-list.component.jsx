import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters, search } = this.props;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(search);
    });

    return (
      <div className="card-list">
        {filteredMonsters.map((filteredMonster) => {
          const { name, email, id } = filteredMonster;
          return (
            <div key={id}>
              <Card name={name} email={email} id={id} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;

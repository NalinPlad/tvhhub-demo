import "./App.css";
import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    var _cards = [];
    fetch(
      "https://raw.githubusercontent.com/Whackalenso/tvhhub/main/data/data.json"
    )
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.projects.length; i++) {
          _cards.push(<Card {...data.projects[i]} />);
        }

        setCards(_cards);
      });
  }, []);

  return (
    <div className="App">
      <img className="logo" src={require("./assets/TRIVALLEY4 1.png")} />
      <p className="title">TRI HUB</p>
      <p className="created-by">CREATED BY AJITH, BYRON, AND NIGEL</p>
      <div className="card-grid">{cards}</div>
    </div>
  );
}

export default App;

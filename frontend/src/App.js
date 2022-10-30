import "./App.css";
import Card from "./Components/Card";
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
      <section className="head">
        <div className="headLeft">
          <img className="logo" src={require("./assets/TRIVALLEY4 1.png")} />
          <div className="headText">
            <p className="title">TRI HUB</p>
            <p className="created-by">
              A collection of software based projects, events, and educational
              material<br></br>Created by Ajith, Byron, and Nigel in 24 hours
            </p>
          </div>
        </div>
      </section>

      <div className="card-grid">{cards}</div>
    </div>
  );
}

export default App;

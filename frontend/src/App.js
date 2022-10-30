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
      <div>{cards}</div>
    </div>
  );
}

export default App;

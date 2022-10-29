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
        console.log(data);
        const projects = data.projects;
        for (let i = 0; i < projects.length; i++) {
          _cards.push(<Card>projects[i]</Card>);
        }
      });

    setCards(_cards);
  }, []);

  return (
    <div className="App">
      <div className="card-grid">{cards}</div>
    </div>
  );
}

export default App;

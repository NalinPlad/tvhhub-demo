import "./App.css";
import Card from "./components/Card";

function App() {
  var cards = [];
  fetch(
    "https://raw.githubusercontent.com/Whackalenso/tvhhub/main/data/data.json"
  )
    .then((res) => res.json())
    .then((projects) => {
      for (let i = 0; i < projects.length; i++) {
        cards.push(<Card>projects[i]</Card>);
      }
      console.log(projects);
    });

  return (
    <div className="App">
      <div className="card-grid">{cards}</div>
    </div>
  );
}

export default App;

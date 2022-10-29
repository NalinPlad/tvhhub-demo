import "./App.css";
import Card from "./components";

function App() {
  var cards = [];
  fetch(
    "https://raw.githubusercontent.com/Whackalenso/tvhhub/main/frontend/data.json"
  )
    .then((res) => res.json())
    .then((projects) => {
      for (let i = 0; i < projects.length; i++) {
        cards.push(<Card>projects[i]</Card>);
      }
    });

  return (
    <div className="App">
      <Grid>cards</Grid>
    </div>
  );
}

export default App;

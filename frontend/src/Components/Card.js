import "./Card.css";

function Card(props) {
  return (
    <div className="background-layer">
      <img className="bg-image" src={props.img} />

      <div className="card">
        <p className="cardName">{props.name}</p>
        <p className="cardBio">{props.bio}</p>
        <div className="bottomRow">
          <p className="cardCreator">{props.creator}</p>
          <div className="external">
            <a href={props.link}>
              <img src={require("../assets/Vector.png")} />
            </a>
            <a href={props.github}>
              <img
                src={require("../assets/GitHub-Mark-Light-120px-plus 1.png")}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

import "./Card.css";

function Card(props) {
  return (
    <div className="background-layer">
      <img className="bg-image" src={props.img}/>
      
      <div className="card">
        <p className="cardName">{props.name}</p>
        <p className="cardBio">{props.bio}</p>
        <div className="bottomRow">
          <p className="cardCreator">{props.creator}</p>
          <div className="external">
            <a href={props.link}>^</a>
            <a href={props.github}>§</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

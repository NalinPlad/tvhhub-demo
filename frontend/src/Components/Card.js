import "./Card.css";
import { ReactComponent as OpenExternal } from "../assets/Vector.svg";
import { ReactComponent as Instagram } from "../assets/Instagram.svg";
import { ReactComponent as Github } from "../assets/Github.svg";

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
            {props.instagram !== undefined ? (
              <a href={props.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
            ) : null}
            {props.github !== undefined ? (
              <a href={props.github} target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
            ) : null}
            {props.link !== undefined ? (
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                <OpenExternal />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

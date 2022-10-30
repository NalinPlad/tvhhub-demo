function Card(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Creator: {props.creator}</p>
      <p>Link: {props.link}</p>
      <p>Github: {props.github}</p>
      <img src={props.img} />
    </div>
  );
}

export default Card;

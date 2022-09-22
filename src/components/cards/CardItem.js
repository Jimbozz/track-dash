function CardItem(props) {
  return (
    <div className="cardItem">
      <p>{props.title}</p>
      <h2>{props.current}</h2>
      <div>Last week: {props.previous}</div>
    </div>
  );
}

export default CardItem;

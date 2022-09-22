function CardItemMonthly(props) {
  return (
    <li className="cardItem">
      <p>{props.title}</p>
      <h2>{props.currentMonth}</h2>
      <div>Last Month: {props.previousMonth}</div>
    </li>
  );
}

export default CardItemMonthly;

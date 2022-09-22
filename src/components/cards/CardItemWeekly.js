function CardItemWeekly(props) {
  return (
    <li className="cardItem">
      <p>{props.title}</p>
      <h2>{props.currentWeek}</h2>
      <div>Last week: {props.previousWeek}</div>
    </li>
  );
}

export default CardItemWeekly;

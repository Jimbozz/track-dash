import CardItemMonthly from "./CardItemMonthly";

function CardListMonthly(props) {
  return (
    <ul className="cards">
      {props.items.map((item) => (
        <CardItemMonthly
          key={item.title}
          id={item.title}
          title={item.title}
          currentMonth={item.timeframes.monthly.current}
          previousMonth={item.timeframes.monthly.previous}
        />
      ))}
    </ul>
  );
}

export default CardListMonthly;

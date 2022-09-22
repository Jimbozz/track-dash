import CardItemWeekly from "./CardItemWeekly";

function CardListWeekly(props) {
  return (
    <ul className="cards">
      {props.items.map((item) => (
        <CardItemWeekly
          key={item.title}
          id={item.title}
          title={item.title}
          currentWeek={item.timeframes.weekly.current}
          previousWeek={item.timeframes.weekly.previous}
        />
      ))}
    </ul>
  );
}

export default CardListWeekly;

import CardItem from "./CardItem";

function CardList(props) {
  return (
    <div className="cards">
      {props.cards.map((card) => (
        <CardItem
          key={card.title}
          id={card.title}
          title={card.title}
          current={card.timeframes.daily.current}
          previous={card.timeframes.daily.previous}
        />
      ))}
    </div>
  );
}

export default CardList;

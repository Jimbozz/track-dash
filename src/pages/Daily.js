import { DUMMY_DATA } from "../data/Data";
import CardList from "../components/cards/CardListDaily";

function DailyPage() {
  if (DUMMY_DATA) {
    return (
      <div className="cards-container">
        <CardList cards={DUMMY_DATA}></CardList>
      </div>
    );
  }
}

export default DailyPage;

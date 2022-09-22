import { DUMMY_DATA } from "../data/Data";
import CardList from "../components/cards/CardListMonthly";

function MonthlyPage() {
  return (
    <div className="cards-container">
      <CardList items={DUMMY_DATA}></CardList>
    </div>
  );
}

export default MonthlyPage;

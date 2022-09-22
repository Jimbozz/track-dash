import { DUMMY_DATA } from "../data/Data";
// import classes from "./Daily.module.css";
import CardList from "../components/cards/CardListWeekly";

function WeeklyPage() {
  return (
    <div className="cards-container">
      <CardList items={DUMMY_DATA}></CardList>
    </div>
  );
}

export default WeeklyPage;

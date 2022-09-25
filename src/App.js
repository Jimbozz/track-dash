import { Route, Routes } from "react-router-dom";
import DailyPage from "./pages/Daily";
import MonthlyPage from "./pages/Monthly";
import WeeklyPage from "./pages/Weekly";
import MainNavigation from "./components/layout/MainNavigation";
import "./sass/styles.scss";
import CardItem from "./components/cards/CardItem";
import { useState } from "react";
import userImage from "./images/image-jeremy.png";

function App() {
  let [period, setPeriod] = useState({
    daily: true,
    weekly: false,
    monthly: false,
  });

  function changePeriod(event) {
    let id = event.target.id;
    switch (id) {
      case "daily":
        setPeriod({
          daily: true,
          weekly: false,
          monthly: false,
        });
        break;
      case "weekly":
        setPeriod({
          daily: false,
          weekly: true,
          monthly: false,
        });
        break;
      case "monthly":
        setPeriod({
          daily: false,
          weekly: false,
          monthly: true,
        });
        break;
      default:
        return period;
    }
  }
  return (
    <div className="container">
      <div className="userContainer">
        <div className="userContainer-content">
          <div className="userContainer-content__image">
            <img src={userImage} alt="man" />
          </div>
          <div className="userContainer-content__info">
            <span>Report for</span>
            <h1>Jeremy Robson</h1>
          </div>
        </div>
        <nav className="userContainer-nav">
          <span
            className={period.daily ? "period active" : "period"}
            id="daily"
            onClick={changePeriod}>
            Daily
          </span>
          <span
            className={period.weekly ? "period active" : "period"}
            id="weekly"
            onClick={changePeriod}>
            Weekly
          </span>
          <span
            className={period.monthly ? "period active" : "period"}
            id="monthly"
            onClick={changePeriod}>
            Monthly
          </span>
          {/* <ul>
          <li>
            <Link to="/">Daily</Link>
          </li>
          <li>
            <Link to="/weekly">Weekly</Link>
          </li>
          <li>
            <Link to="/monthly">Monthly</Link>
          </li>
        </ul> */}
        </nav>
      </div>
      <CardItem period={period} />
      {/* <Routes>
        <Route path="/" element={<DailyPage />}></Route>
        <Route path="/weekly" element={<WeeklyPage />}></Route>
        <Route path="/monthly" element={<MonthlyPage />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;

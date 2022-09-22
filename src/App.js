import { Route, Routes } from "react-router-dom";
import DailyPage from "./pages/Daily";
import MonthlyPage from "./pages/Monthly";
import WeeklyPage from "./pages/Weekly";
import MainNavigation from "./components/layout/MainNavigation";
import "./sass/styles.scss";

function App() {
  return (
    <div className="container">
      <MainNavigation />
      <Routes>
        <Route path="/" element={<DailyPage />}></Route>
        <Route path="/weekly" element={<WeeklyPage />}></Route>
        <Route path="/monthly" element={<MonthlyPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

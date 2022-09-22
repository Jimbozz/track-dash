import React from "react";
import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <div className="userContainer">
      <div className="userContainer-content">
        <div className="userContainer-content__image">
          <img src={require("../../images/image-jeremy.png")} alt="man" />
        </div>
        <div className="userContainer-content__info">
          <span>Report for</span>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Daily</Link>
          </li>
          <li>
            <Link to="/weekly">Weekly</Link>
          </li>
          <li>
            <Link to="/monthly">Monthly</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavigation;

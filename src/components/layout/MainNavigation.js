import { Link } from "react-router-dom";
import userImage from "../../images/image-jeremy.png";

function MainNavigation() {
  return (
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

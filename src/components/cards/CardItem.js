import { DUMMY_DATA } from "../../data/Data";
import ellipsis from "../../images/icon-ellipsis.svg";
import exerciseIcon from "../../images/icon-exercise.svg";
import playIcon from "../../images/icon-play.svg";
import selfCareIcon from "../../images/icon-self-care.svg";
import socialIcon from "../../images/icon-social.svg";
import studyIcon from "../../images/icon-study.svg";
import workIcon from "../../images/icon-work.svg";

let iconsArray = [
  workIcon,
  playIcon,
  studyIcon,
  exerciseIcon,
  socialIcon,
  selfCareIcon,
];
console.log(iconsArray);

function CardItem(props) {
  let period = props.period;
  let trackCards = DUMMY_DATA.map((card, index) => {
    let { daily, weekly, monthly } = card.timeframes;

    return (
      <div className="cards-item" id={`card${index}`} key={index}>
        <div className="cards-item__top">
          <img src={iconsArray[index]} alt={iconsArray.id} />
        </div>
        <div className="cards-item__bottom">
          <div className="cards-item__bottom-header">
            <p>{card.title}</p>
            <div className="cards-item__bottom-header-img">
              <img src={ellipsis} alt="view options" />
            </div>
          </div>

          <h2>
            {period.daily
              ? daily.current
              : period.weekly
              ? weekly.current
              : monthly.current}
            hrs
          </h2>
          <div>
            Last week -
            {period.daily
              ? daily.previous
              : period.weekly
              ? weekly.previous
              : monthly.previous}
            hrs
          </div>
        </div>
      </div>
    );
  });
  return <section className="cards">{trackCards}</section>;
}

export default CardItem;

import "../styles/AnimeCard.css";
import { Link } from "react-router-dom";
const AnimeCard = ({ anime }) => {
  //de-structuring anime prop data
  const { title, original_title, image, release_date, running_time, rt_score } =
    anime;

  //if title is long
  let shortTitle = title;
  if (title.length > 22) {
    shortTitle = title.substr(0, 18) + "...";
  }

  return (
    <div className="anime-card">
      <Link to={`/films/${anime.id}`}>
        <div className="anime-header">
          <img src={image} alt="anime poster" width="100%" height="367px" />
        </div>
        <div className="anime-content">
          <div className="anime-content-header">
            <h2 className="anime-title">{shortTitle}</h2>
            <p className="anime-rating">{rt_score}%</p>
          </div>
          <div className="anime-content-footer">
            <div className="anime-info">
              <label>Original title</label>
              <span>{original_title}</span>
            </div>
            <div className="anime-info">
              <label>Released</label>
              <span>{release_date}</span>
            </div>
            <div className="anime-info">
              <label>Duration</label>
              <span>{running_time} min</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AnimeCard;

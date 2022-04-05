import "../styles/AnimeDetails.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AnimeDetailsCardLoader from "../utils/Loaders/AnimeDetailsCardLoader";
import { listAnimeDetails } from "../actions/animeActions";

const AnimeDetails = () => {
  //geting anime id from query params
  const { id } = useParams();

  const dispatch = useDispatch();

  //getting anime details from redux store
  const animeDetails = useSelector((state) => state.animeDetails);
  const { loading, anime, error } = animeDetails;
  //error variable can be used to handle errors

  useEffect(() => {
    //trigger single anime details action
    //fetching single anime details by id
    dispatch(listAnimeDetails(id));
  }, [id, dispatch]);

  return (
    <>
      {loading ? (
        //show loader if loading
        <AnimeDetailsCardLoader />
      ) : (
        //show details if not loading
        <div className="anime-detail-card">
          <div className="anime-banner">
            <img
              className="banner-image"
              src={anime.movie_banner}
              alt="anime banner"
              width="100%"
              height="100%"
            />
          </div>

          <div className="anime-detail-content">
            <div className="anime-detail-content-header">
              <div className="anime-poster">
                <img
                  src={anime.image}
                  alt="anime poster"
                  width="100%"
                  height="100%"
                />
              </div>

              <div>
                <h2>{anime.title}</h2>

                <span className="label">{anime.release_date}</span>

                <a href="#" className="label">
                  RT- {anime.rt_score}%
                </a>
                <span className="label">{anime.running_time} min</span>

                <p>
                  {anime.description && anime.description.substring(0, 200)} ...
                </p>

                <div className="anime-maker-info">
                  <span>Director</span>: <a href="#">{anime.director}</a>
                </div>

                <div className="anime-maker-info">
                  <span>Producer</span>:<a href="#">{anime.producer}</a>
                </div>
              </div>
            </div>

            <div className="anime-detail-content-footer">
              <h3>{`${anime.title} (${anime.original_title} - ${anime.original_title_romanised})`}</h3>

              <p>{anime.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AnimeDetails;

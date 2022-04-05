import { useSelector } from "react-redux";
import AnimeCard from "./AnimeCard";
import AnimeCardLoader from "../utils/Loaders/AnimeCardLoader";
const AnimeList = () => {
  //getting animeList from redux store
  const animeList = useSelector((state) => state.animeList);

  //de-structuring animeList
  const { loading, animes, error } = animeList;
  //error variable can be used to handle errors

  return (
    <div className="container">
      {
        //show loading skeleton card if loading
        loading && <AnimeCardLoader />
      }
      <div className="container-grid">
        {
          //map data to anime cards if not loading and  animes not empty
          !loading &&
            animes &&
            animes.map((anime) => <AnimeCard key={anime.id} anime={anime} />)
        }
      </div>
    </div>
  );
};

export default AnimeList;

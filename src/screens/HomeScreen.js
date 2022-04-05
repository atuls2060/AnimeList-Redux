import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import AnimeList from "../components/AnimeList";
import { listAnimes } from "../actions/animeActions";

const HomeScreen = () => {
  //geting anime keyword from search query
  const { keyword } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    //trigger list all animes action
    //fetching list of animes
    dispatch(listAnimes(keyword));
  }, [keyword, dispatch]);

  return (
    <div>
      <SearchBox />
      <AnimeList />
    </div>
  );
};

export default HomeScreen;

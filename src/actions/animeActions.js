import axios from "axios";
import {
  ANIME_LIST_REQUEST,
  ANIME_LIST_SUCCESS,
  ANIME_LIST_FAIL,
  ANIME_DETAILS_REQUEST,
  ANIME_DETAILS_SUCCESS,
  ANIME_DETAILS_FAIL,
} from "../constants/animeConstants";

export const listAnimes =
  (keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: ANIME_LIST_REQUEST });

      //if keyword is not empty then search for query
      let url = `http://ghibliapi.herokuapp.com/films${
        keyword && `?title=${keyword}`
      }`;

      const { data } = await axios.get(url);

      dispatch({
        type: ANIME_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ANIME_LIST_FAIL,
        payload: error.message,
      });
    }
  };

export const listAnimeDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ANIME_DETAILS_REQUEST });

    const { data } = await axios.get(
      `http://ghibliapi.herokuapp.com/films/${id}`
    );

    dispatch({
      type: ANIME_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ANIME_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

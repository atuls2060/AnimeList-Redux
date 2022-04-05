import {
  ANIME_LIST_REQUEST,
  ANIME_LIST_SUCCESS,
  ANIME_LIST_FAIL,
  ANIME_DETAILS_REQUEST,
  ANIME_DETAILS_SUCCESS,
  ANIME_DETAILS_FAIL,
} from "../constants/animeConstants";

export const animeListReducer = (state = { animes: [] }, action) => {
  switch (action.type) {
    case ANIME_LIST_REQUEST:
      return { loading: true, animes: [] };
    case ANIME_LIST_SUCCESS:
      return {
        loading: false,
        animes: action.payload,
      };
    case ANIME_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const animeDetailsReducer = (state = { anime: {} }, action) => {
  switch (action.type) {
    case ANIME_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ANIME_DETAILS_SUCCESS:
      return { loading: false, anime: action.payload };
    case ANIME_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

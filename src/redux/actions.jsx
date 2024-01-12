import {
  FILTERED_BY_CATEGORY,
  SEARCHED_BY_NAME,
  SET_CURRENT_PAGE,
} from "./types";

export const filteredByCategory = (category) => {
  return {
    type: FILTERED_BY_CATEGORY,
    payload: category,
  };
};

export const setCurrentPage = (pageNum) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: pageNum,
  };
};

export const searchedByName = (bookName) => {
  return {
    type: SEARCHED_BY_NAME,
    payload: bookName,
  };
};

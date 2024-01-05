import { FILTERED_BY_CATEGORY, SET_CURRENT_PAGE } from "./types";

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

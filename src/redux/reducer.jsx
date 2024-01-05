import Data from "../data/db.json";
import { FILTERED_BY_CATEGORY, SET_CURRENT_PAGE } from "./types";

const initialState = {
  books: Data.books,
  currentPage: 1,
  recordsPerPage: 12,
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERED_BY_CATEGORY:
      return {
        ...state,
        books: Data.books.filter((book) =>
          book.details.tags.includes(action.payload)
        ),
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default booksReducer;
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../redux/actions";

const Pagination = () => {
  const allBooks = useSelector((store) => store.books);
  const recordsPerPage = useSelector((store) => store.recordsPerPage);

  const dispatch = useDispatch();

  const nPage = Math.ceil(allBooks.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  const changePage = (pageNum) => {
    dispatch(setCurrentPage(pageNum));
  };
  return (
    <div className="flex justify-center mt-5 join">
      {numbers.map((n, i) => (
        <input
          className="join-item btn btn-sm btn-square"
          type="radio"
          name="options"
          aria-label={n}
          key={i}
          onClick={() => changePage(n)}
        />
      ))}
    </div>
  );
};

export default Pagination;

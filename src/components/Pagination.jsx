import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { setCurrentPage } from "../redux/actions";

const Pagination = () => {
  const allBooks = useSelector((store) => store.books);
  const recordsPerPage = useSelector((store) => store.recordsPerPage);

  const dispatch = useDispatch();

  const nPage = Math.ceil(allBooks.length / recordsPerPage);
  // const numbers = [...Array(nPage + 1).keys()].slice(1);
  const changePage = (pageNum) => {
    dispatch(setCurrentPage(pageNum));
  };
  return (
    <ReactPaginate
      breakLabel={<div className="join-item btn">...</div>}
      nextLabel={<div className="join-item btn">{`>`}</div>}
      onPageChange={(e) => changePage(e.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={nPage}
      previousLabel={<div className="join-item btn">{`<`}</div>}
      renderOnZeroPageCount={null}
      containerClassName="flex justify-center mt-5 gap-2 join"
      pageLinkClassName="join-item btn"
      activeClassName="btn-primary"
    />
  );
};

export default Pagination;

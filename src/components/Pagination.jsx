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
    <div className="w-full">
      <ReactPaginate
        breakLabel={<div className="join-item btn btn-sm">...</div>}
        nextLabel={<div className="join-item btn btn-sm">{`>`}</div>}
        onPageChange={(e) => changePage(e.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={nPage}
        previousLabel={<div className="join-item btn btn-sm">{`<`}</div>}
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center join flex-wrap"
        pageLinkClassName="join-item btn btn-sm"
        activeLinkClassName="bg-violet-600 text-white hover:bg-violet-500"
      />
    </div>
  );
};

export default Pagination;

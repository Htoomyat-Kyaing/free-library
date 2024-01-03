import { GrNext, GrPrevious } from "react-icons/gr";

const Pagination = () => {
  return (
    <div className="container">
      <div className="flex justify-center join">
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="1"
          defaultChecked
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="2"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="3"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="4"
        />
      </div>
    </div>
  );
};

export default Pagination;

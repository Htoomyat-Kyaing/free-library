import Data from "../data/db.json";
import { useDispatch } from "react-redux";
import { filteredByCategory, setCurrentPage } from "../redux/actions";
import { Link } from "react-router-dom";

const Sidebar = () => {
  let uniqueTags = [];
  const dispatch = useDispatch();
  Data.books.map((book) =>
    book.details.tags.forEach((tag) => {
      if (!uniqueTags.includes(tag)) uniqueTags.push(tag);
    })
  );

  const filterByTags = (tag) => {
    dispatch(filteredByCategory(tag));
    dispatch(setCurrentPage(1));
  };

  return (
    <div className="hidden h-full rounded-lg min-w-fit max-h-fit sm:block">
      <ul
        tabIndex={0}
        className="flex flex-col justify-between h-full gap-2 overflow-hidden w-fit"
      >
        {uniqueTags.map((tag, i) => (
          <li
            className="flex items-center w-full h-full border rounded-lg cursor-pointer hover:bg-violet-600 border-violet-600"
            key={i}
          >
            <Link
              to={"/"}
              onClick={() => filterByTags(tag)}
              className="w-full h-full px-5 py-2"
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

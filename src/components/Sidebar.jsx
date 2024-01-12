import Data from "../data/db.json";
import { useDispatch } from "react-redux";
import { filteredByCategory } from "../redux/actions";

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
  };

  return (
    <div className="hidden min-h-full border rounded-lg border-primary w-fit sm:block">
      <ul
        tabIndex={0}
        className="flex flex-col justify-between h-full overflow-hidden divide-y w-52 divide-primary"
      >
        {uniqueTags.map((tag, i) => (
          <li
            className="flex items-center w-full h-full py-2 pl-5 cursor-pointer border-b-primary"
            key={i}
          >
            <a onClick={() => filterByTags(tag)}>{tag}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

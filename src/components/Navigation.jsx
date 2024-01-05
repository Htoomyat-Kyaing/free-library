import Data from "../data/db.json";
import { useDispatch } from "react-redux";
import { filteredByCategory } from "../redux/actions";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { FaRegSun, FaRegMoon } from "react-icons/fa";

const Navigation = () => {
  useEffect(() => {
    localStorage.theme = "dark";
    themeChange(false);
  }, []);
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
    <div className="container">
      <div className="fixed top-0 z-10 py-5 shadow-2xl navbar bg-base-100 shadow-zinc-800">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 h-40 overflow-hidden overflow-y-auto"
            >
              {uniqueTags.map((tag, i) => (
                <li className="cursor-pointer" key={i}>
                  <a onClick={() => filterByTags(tag)}>{tag}</a>
                </li>
              ))}
            </ul>
          </div>
          <a className="text-xl btn btn-ghost">daisyUI</a>
        </div>
        <div className="navbar-center">
          <input
            type="text"
            className="py-2 bg-blue-200 rounded-full indent-3 "
            placeholder="🔎"
          />
        </div>
        <div className="navbar-end">
          <FaRegSun className="text-orange-300" />
          <label className="cursor-pointer label">
            <input
              data-toggle-theme="dark,light"
              data-act-class="ACTIVECLASS"
              type="checkbox"
              defaultChecked
              className="toggle"
              onClick={(e) => e.target.checked}
            />
          </label>
          <FaRegMoon className="text-slate-300" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;

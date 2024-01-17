import Data from "../data/db.json";
import { useDispatch } from "react-redux";
import { filteredByCategory, logout, searchedByName } from "../redux/actions";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  let uniqueTags = [];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  Data.books.map((book) =>
    book.details.tags.forEach((tag) => {
      if (!uniqueTags.includes(tag)) uniqueTags.push(tag);
    })
  );

  const filterByTags = (tag) => {
    dispatch(filteredByCategory(tag));
  };

  const [bookName, setBookName] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch(searchedByName(bookName));
    }
  };

  useEffect(() => {
    localStorage.theme = "dark";
    themeChange(false);
  }, []);

  return (
    <div className="fixed top-0 z-50 flex items-center justify-between min-w-full gap-1 px-6 py-3 border-b-2 sm:gap-2 md:gap-4 border-b-violet-600 bg-base-100 bg-shadow-zinc-800 md:px-12">
      <div className="flex items-center justify-start dropdown sm:hidden">
        <div
          tabIndex={0}
          role="button"
          className="relative text-white btn bg-violet-600 hover:bg-violet-500 btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full p-1"
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
          className="absolute menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 h-96 overflow-hidden overflow-y-auto top-12"
        >
          {uniqueTags.map((tag, i) => (
            <Link to={"/"} key={i}>
              <li className="cursor-pointer hover:bg-violet-600">
                <span onClick={() => filterByTags(tag)}>{tag}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-8 md:w-16">
        <a href="/">
          <img src="/logo.png" className="w-full h-full" />
        </a>
      </div>

      <div className="flex items-center justify-center flex-1 max-w-sm gap-2">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-full py-1 border rounded-md indent-2 border-violet-600"
          onChange={(e) => setBookName(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button
          className="hidden p-2 rounded-full sm:block bg-violet-500 hover:bg-violet-500 dark:bg-violet-600"
          onClick={() => dispatch(searchedByName(bookName))}
        >
          🔎
        </button>
      </div>
      <div className="flex items-center justify-center ml-2">
        <div className="items-center justify-center hidden sm:flex">
          <FaRegSun className="text-orange-300" />
          <label className="cursor-pointer label">
            <input
              data-toggle-theme="dark,light"
              data-act-class="ACTIVECLASS"
              type="checkbox"
              defaultChecked
              className="toggle toggle-sm"
              onClick={(e) => e.target.checked}
            />
          </label>
          <FaRegMoon className="text-slate-300" />
        </div>
        <div className="dropdown sm:ml-2 md:ml-4 lg:ml-6">
          <div
            tabIndex={0}
            role="button"
            className="relative avatar placeholder"
          >
            <div className="w-8 rounded-full bg-violet-500">
              <span className="text-xs text-white">U</span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="absolute -translate-x-3/4 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-fit sm:ml-3 md:ml-6"
          >
            <li className="sm:hidden">
              <div className="flex items-center justify-center">
                <FaRegSun className="text-orange-300" />
                <label className="cursor-pointer label">
                  <input
                    data-toggle-theme="dark,light"
                    data-act-class="ACTIVECLASS"
                    type="checkbox"
                    defaultChecked
                    className="toggle toggle-sm"
                    onClick={(e) => e.target.checked}
                  />
                </label>
                <FaRegMoon className="text-slate-300" />
              </div>
            </li>
            <li
              onClick={() => {
                dispatch(logout());
                navigate("/login");
              }}
            >
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

import Data from "../data/db.json";

const Navigation = () => {
  let uniqueTags = [];
  const unique = [
    ...new Set(
      Data.books.map((book) =>
        book.details.tags.forEach((tag) => {
          if (!uniqueTags.includes(tag)) uniqueTags.push(tag);
        })
      )
    ),
  ];
  return (
    <div className="container">
      <div className="navbar bg-base-100">
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
                <li key={i}>
                  <a href="">{tag}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="text-xl btn btn-ghost">daisyUI</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

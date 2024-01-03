import Card from "./components/Card";
import Data from "./data/db.json";
import { useState } from "react";

const Display = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 12;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.books.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(Data.books.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  const changePage = (n) => {
    setCurrentPage(n);
  };
  return (
    <div className="container">
      <div className="grid gap-5 px-6 sm:grid-cols-1 md:grid-cols-3">
        {records.map((book) => (
          <Card
            key={book.id}
            title={book.title}
            image={book.image}
            pageCount={book.pageCount}
            publishedAt={book.publishedAt}
            fileSize={book.fileSize}
            downloadLink={book.details.downloadLink}
          />
        ))}
      </div>

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
    </div>
  );
};

export default Display;

import { useSelector } from "react-redux";
import Card from "./components/Card";

const Display = () => {
  const allBooks = useSelector((store) => store.books);
  const currentPage = useSelector((store) => store.currentPage);
  const recordsPerPage = useSelector((store) => store.recordsPerPage);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = allBooks.slice(firstIndex, lastIndex);
  return (
    <div className="container min-h-screen">
      <div className="grid gap-5 px-6 mt-24 sm:grid-cols-1 md:grid-cols-3">
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
    </div>
  );
};

export default Display;

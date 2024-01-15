import { useSelector } from "react-redux";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";

const Display = () => {
  const allBooks = useSelector((store) => store.books);
  const currentPage = useSelector((store) => store.currentPage);
  const recordsPerPage = useSelector((store) => store.recordsPerPage);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = allBooks.slice(firstIndex, lastIndex);
  return (
    <div className="grid w-full gap-5 min-h-fit sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:auto-rows-min">
      {records.map((book) => (
        <Card
          key={book.id}
          title={book.title}
          image={book.image}
          pageCount={book.pageCount}
          publishedAt={book.publishedAt}
          fileSize={book.fileSize}
          id={book.id}
          tags={book.details.tags}
        />
      ))}
    </div>
  );
};

export default Display;

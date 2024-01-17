import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import BookCarousel from "../components/BookCarousel";

export default function DetailsPage() {
  let { state } = useLocation();
  const books = useSelector((store) => store.books);
  const [featuredBooks, setFeaturedBooks] = useState([]);

  const handleClick = (tag) => {
    setFeaturedBooks(books.filter((book) => book.details.tags.includes(tag)));
  };

  let filteredBooks = [];
  state?.tags?.forEach((tag) =>
    filteredBooks.push(
      ...books.filter((book) => book.details.tags.includes(tag))
    )
  );

  useEffect(() => {
    setFeaturedBooks([...new Set(filteredBooks)]);
  }, []);

  useEffect(() => {}, [featuredBooks]);

  // console.log(state);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-3/4 pt-24 hero-content lg:flex-row-reverse">
        <img
          src={state.image}
          className="object-contain w-full rounded-lg shadow-2xl max-w-40"
        />
        <div>
          <h1 className="text-5xl font-bold">{state.title}</h1>
          <p className="py-6">
            {state.pageCount} | {state.publishedAt} | {state.fileSize}
          </p>
          <div className="flex gap-3 ">
            {state?.tags?.map((tag) => (
              <span
                key={tag}
                onClick={() => {
                  handleClick(tag);
                }}
                className="text-violet-600 hover:cursor-pointer hover:text-violet-500"
              >
                {tag}
              </span>
            ))}
          </div>

          <button className="mt-5 text-white btn hover:bg-violet-500 bg-violet-600">
            Download
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center w-full mb-6">
        <h2 className="mb-5 text-xl font-semibold">Featured Books</h2>
        <BookCarousel featuredBooks={featuredBooks} />
      </div>
    </div>
  );
}

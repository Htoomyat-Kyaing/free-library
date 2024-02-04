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
    <div className="w-full">
      <div className="w-full">
        <img
          src={state?.image}
          className="object-contain w-full rounded-lg shadow-2xl max-w-40"
        />
        <h1 className="mt-5 text-2xl font-bold md:text-5xl text-wrap">
          {state?.title}
        </h1>
        <p className="py-6">
          {state?.pageCount} | {state?.publishedAt} | {state?.fileSize}
        </p>
        <div>
          <ul className="flex gap-3">
            {state?.tags?.map((tag) => (
              <li
                key={tag}
                onClick={() => {
                  handleClick(tag);
                }}
                className="text-violet-600 hover:cursor-pointer hover:text-violet-500"
              >
                {tag}
              </li>
            ))}
          </ul>

          <button className="mt-5 text-white btn hover:bg-violet-500 bg-violet-600">
            Download
          </button>
        </div>

        <div className="w-full mt-5">
          <h2 className="mb-5 text-xl font-semibold">Featured Books</h2>
          <BookCarousel featuredBooks={featuredBooks} />
        </div>
      </div>
    </div>
  );
}

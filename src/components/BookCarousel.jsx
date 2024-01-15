import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const BookCarousel = ({ featuredBooks }) => {
  return (
    <>
      {featuredBooks && (
        <Carousel
          className="w-3/4"
          autoFocus={true}
          autoPlay={true}
          centerMode={true}
          centerSlidePercentage={30}
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          infiniteLoop={true}
          interval={2000}
          transitionTime={500}
        >
          {featuredBooks.map((book) => (
            <Link
              to={`/books/${book.id}`}
              state={{
                id: book.id,
                title: book.title,
                image: book.image,
                pageCount: book.pageCount,
                publishedAt: book.publishedAt,
                fileSize: book.fileSize,
                tags: book.details.tags,
              }}
              key={book.id}
            >
              <div className="mx-3">
                <img className="object-fill" src={book.image} />
              </div>
            </Link>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default BookCarousel;

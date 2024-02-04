import { describe, it } from "vitest";
import BookCarousel from "../../components/BookCarousel";
import { render } from "../../utils/test-utils";
import { MemoryRouter } from "react-router-dom";

const featuredBooks = [
  {
    id: 10783856,
    title: "Drawing Cartoons & Comics for Dummies",
    image:
      "https://cdn.asaha.com/assets/thumbs/0a6/0a651ad3962e9c34fef58a56e9001f16-s.jpg",
    pageCount: "363 Pages",
    publishedAt: "2009",
    fileSize: "8.17 MB",
    details: {
      language: "English",
      tags: ["Editor's Picks", "Most Popular", "Painting & Drawing"],
      downloadLink:
        "https://www.pdfdrive.com/drawing-cartoons-comics-for-dummies-d10783856.html",
    },
  },
];

describe("Book Carousel", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <BookCarousel featuredBooks={featuredBooks} />
      </MemoryRouter>
    );
  });
});

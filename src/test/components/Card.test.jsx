import { describe, it } from "vitest";
import { render } from "../../utils/test-utils";
import { MemoryRouter } from "react-router-dom";
import Card from "../../components/Card";

const book = {
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
};

describe("Cards", () => {
  it("renders correctly", () => {
    render(
      <Card
        key={book.id}
        title={book.title}
        image={book.image}
        pageCount={book.pageCount}
        publishedAt={book.publishedAt}
        fileSize={book.fileSize}
        id={book.id}
        tags={book.details.tags}
      />,
      { wrapper: MemoryRouter }
    );
  });
});

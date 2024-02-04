import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import DetailsPage from "../../routes/detail-page";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

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
  {
    id: 33405693,
    title: "Atlas of Human Anatomy by Netter",
    image:
      "https://cdn.asaha.com/assets/thumbs/210/21066a84339e1121f86ccca1bc1192ab-s.jpg",
    pageCount: "425 Pages",
    publishedAt: "2013",
    fileSize: "28.25 MB",
    details: {
      language: "English",
      tags: ["Medical", "Editor's Picks", "Most Popular"],
      downloadLink:
        "https://www.pdfdrive.com/atlas-of-human-anatomy-by-netter-d33405693.html",
    },
  },
];

describe("Details", () => {
  it("renders", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <DetailsPage featuredBooks={featuredBooks} />
        </MemoryRouter>
      </Provider>
    );
    const bookImage = screen.getByRole("img");
    expect(bookImage).toBeInTheDocument();

    const bookTitle = screen.getByRole("heading", { level: 1 });
    expect(bookTitle).toBeInTheDocument();

    const bookTagsList = screen.getByRole("list");
    expect(bookTagsList).toBeInTheDocument();

    const downloadButton = screen.getByRole("button");
    expect(downloadButton).toBeInTheDocument();
  });
});

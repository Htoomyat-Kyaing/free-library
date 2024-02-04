import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import App from "../App";
import { Provider } from "react-redux";
import store from "../redux/store";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
  it("renders correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
  });
});

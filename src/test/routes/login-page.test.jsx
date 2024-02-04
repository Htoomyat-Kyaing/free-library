import { render, screen } from "@testing-library/react";
import LoginPage from "../../routes/login-page";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { describe, it } from "vitest";

describe("Login", () => {
  it("renders", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );
  });
});

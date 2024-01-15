// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
// import ErrorPage from "./routes/error-page";
import DetailsPage from "./routes/detail-page";
import { Routes, Route } from "react-router-dom";
import Display from "./Display";
import LoginPage from "./routes/login-page";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// import ErrorPage from "./routes/error-page";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/books/:bookId",
//     element: <DetailsPage />,
//     errorElement: <ErrorPage />,
//   },
// ]);

export default function App() {
  const isLogin = useSelector((store) => store.login);
  // return <RouterProvider router={router} />;
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Display />} />
        <Route path="books/:bookId" element={<DetailsPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

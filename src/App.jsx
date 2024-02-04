import Root from "./routes/root";
import DetailsPage from "./routes/detail-page";
import { Routes, Route, useNavigate } from "react-router-dom";
import Display from "./Display";
import LoginPage from "./routes/login-page";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function App() {
  const isLogin = useSelector((store) => store.login);
  // return <RouterProvider router={router} />;
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin) navigate("/");
    else navigate("/login");
    // console.log(isLogin);
  }, []);
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

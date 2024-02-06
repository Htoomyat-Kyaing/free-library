import { useDispatch } from "react-redux";
import { login } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isUser, setIsUser] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    // console.log(formData);
  }, [formData]);
  const handleLogin = ({ email, password }) => {
    if (email === "admin@gmail.com" && password === "admin") setIsUser(true);
    else setIsUser(false);
  };
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Login to access hundreds of books for free !
          </h1>
        </div>
        <div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              {isUser === false && (
                <label data-testid="errorMsg" className="label">
                  <p className="text-red-500 label-text-alt">
                    Wrong email or password. Please try again.
                  </p>
                </label>
              )}
            </div>
            <div className="mt-6 form-control">
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  // e.preventDefault();
                  handleLogin(formData);
                  if (isUser) {
                    dispatch(login());
                    navigate("/");
                  } else {
                    e.preventDefault();
                  }
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

import { SERVER } from "../providers/Constants";

const SigninPage = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(SERVER + "/users/login", formData);
      // Successful login response body contains the JWT
      setToken(response.data);
      navigate("/users/signIn/success", { replace: true });
    } catch (error) {
      // Responses to unsuccessful login attempts will contain an error message
      if (error.response) setError(error.response.data);
    }
  };

  return (
    <main>
      <div className="outer-container">
        <div className="inner-container">
          <form onSubmit={handleSubmit}>
            <div className="container">
              <h1>Sign In</h1>
              <hr />
              <label htmlFor="username">
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />

              <label htmlFor="password">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              {errorMessage && <div className="formError">{errorMessage}</div>}
              <button type="submit" className="registerbtn">
                Sign In
              </button>
            </div>

            <div className="signin">
              <p>
                Don't have an account?{" "}
                <Link to="/users/signUp" className="signin-link">
                  Sign up
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SigninPage;

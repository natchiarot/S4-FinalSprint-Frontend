import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { SERVER } from "../providers/Constants";

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    position: "",
    email: "",
    phoneNum: "",
    location: "",
    password: "",
    passwordVerify: "",
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
      await axios.post(SERVER + "/users/signUp", formData);
      // Successful login response body contains the JWT
      navigate("/", { replace: true });
    } catch (error) {
      // Responses to unsuccessful login attempts will contain an error message
      if (error.response) setError(error.response.data);
    }
  };

  return (
    <main>
      <div className="outer-container1">
        <div className="inner-container">
          <form onSubmit={handleSubmit}>
            <div className="container">
              <h1>New User Sign Up</h1>

              <label htmlFor="username">
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter a unique username (ex. janedoe1)"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                required
              />

              <label htmlFor="position">
                <b>Position</b>
              </label>
              <input
                type="text"
                placeholder=" Enter position at company (ex. Hiring Manager)"
                name="position"
                id="position"
                value={formData.position}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter company email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="phone">
                <b>Phone Number</b>
              </label>
              <input
                type="text"
                placeholder="Enter company phone number (ex. 709-555-5555)"
                name="phoneNum"
                id="phoneNum"
                value={formData.phoneNum}
                onChange={handleChange}
                required
              />

              <label htmlFor="location">
                <b>Location</b>
              </label>
              <input
                type="text"
                placeholder="Enter primary office address (ex. 1234 Main St.)"
                name="location"
                id="location"
                value={formData.location}
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
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <label htmlFor="passwordVerify">
                <b>Repeat Password</b>
              </label>
              <input
                type="password"
                placeholder="Repeat Password"
                name="passwordVerify"
                id="passwordVerify"
                value={formData.passwordVerify}
                onChange={handleChange}
                required
              />
              <hr />
              <br />
              <p>
                By creating an account you agree to our{" "}
                <Link className="signin-link">
                  Terms & Conditions and Privacy Policy
                </Link>
                .
              </p>
              {errorMessage && <div>{errorMessage}</div>}
              <button type="submit" className="registerbtn">
                Sign Up
              </button>
            </div>
          </form>
          <div className="signin">
            <p>
              Already have an account?{" "}
              <Link to="/users/signIn" className="signin-link">
                Sign in
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignupPage;

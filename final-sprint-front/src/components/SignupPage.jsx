import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <main>
      <div className="outer-container1">
        <div className="inner-container">
          <form action="/users/signUp" method="post">
            <div className="container">
              <h1>New User Sign Up</h1>

              <label htmlFor="username">
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter user's first and last name (ex. Jane Doe)"
                name="username"
                id="username"
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
                required
              />

              <label htmlFor="phone">
                <b>Phone Number</b>
              </label>
              <input
                type="text"
                placeholder="Enter company phone number (ex. 709-555-5555)"
                name="phone"
                id="phone"
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
                required
              />

              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                id="psw"
                required
              />

              <label htmlFor="psw-repeat">
                <b>Repeat Password</b>
              </label>
              <input
                type="password"
                placeholder="Repeat Password"
                name="psw_repeat"
                id="psw-repeat"
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

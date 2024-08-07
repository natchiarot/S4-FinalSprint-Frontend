import { Link } from "react-router-dom";

const SigninPage = () => {
  return (
    <main>
      <div className="outer-container">
        <div className="inner-container">
          <form action="/users/signIn" method="post">
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
                required
              />

              <label htmlFor="password">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                required
              />

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

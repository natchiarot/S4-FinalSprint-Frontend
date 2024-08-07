import { Link } from "react-router-dom";

const SigninPage = () => {
  return (
    <main>
      <div class="outer-container">
        <div class="inner-container">
          <form action="/users/signIn" method="post">
            <div class="container">
              <h1>Sign In</h1>
              <hr />
              <label for="username">
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter username"
                name="username"
                required
              />

              <label for="password">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                required
              />

              <button type="submit" class="registerbtn">
                Sign In
              </button>
            </div>

            <div class="signin">
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

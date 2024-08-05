const SignupPage = () => {
  return (
    <main>
      <div class="outer-container1">
        <div class="inner-container">
          <form action="/users/signUp" method="post">
            <div class="container">
              <h1>New User Sign Up</h1>

              <label for="username">
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter user's first and last name (ex. Jane Doe)"
                name="username"
                id="username"
                required
              />

              <label for="position">
                <b>Position</b>
              </label>
              <input
                type="text"
                placeholder=" Enter position at company (ex. Hiring Manager)"
                name="position"
                id="position"
                required
              />

              <label for="email">
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter company email"
                name="email"
                id="email"
                required
              />

              <label for="phone">
                <b>Phone Number</b>
              </label>
              <input
                type="text"
                placeholder="Enter company phone number (ex. 709-555-5555)"
                name="phone"
                id="phone"
                required
              />

              <label for="location">
                <b>Location</b>
              </label>
              <input
                type="text"
                placeholder="Enter primary office address (ex. 1234 Main St.)"
                name="location"
                id="location"
                required
              />

              <label for="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                id="psw"
                required
              />

              <label for="psw-repeat">
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
                By creating an account you agree to our
                <a href="#" class="signin-link">
                  Terms & Privacy
                </a>
                .
              </p>
              <button type="submit" class="registerbtn">
                Sign Up
              </button>
            </div>
          </form>
          <div class="container signin">
            <p>
              Already have an account?{" "}
              <a href="#" class="signin-link">
                Sign in
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignupPage;

const FrontPage = () => {
  return (
    <main>
      <div class="outer-container">
        <div class="inner-container1">
          <section class="welcome">
            <h2>Welcome to PrecisionHire Pro</h2>
            <p>
              Streamline your hiring process by quickly filtering through job
              applicants' resumes to find your ideal candidates.
            </p>
          </section>

          <section class="features">
            <h2>Key Features</h2>
            <ul>
              <li>Advanced Filtering Options</li>
              <li>Search by Skills, Experience, and More</li>
              <li>Quick Applicant Overview</li>
              <li>Secure Data Handling</li>
            </ul>
          </section>

          <section class="how-it-works">
            <h2>How It Works</h2>
            <div class="steps">
              <ol>
                <li>Sign in or sign up to create an account</li>
                <li>Navigate to the search page</li>
                <li>
                  Search for a resume by keyword(s), and/or filter by job id,
                  and/or filter by database.
                </li>
              </ol>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default FrontPage;

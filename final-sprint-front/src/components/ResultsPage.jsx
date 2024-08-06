import React from 'react';

const ResultsPage = ({ query, job, target, resumes }) => {
  return (
    <>
      <main>
        <div className="outer-container">
          <div className="inner-container1">
            <h2>Resumé Search</h2>
            <form action="/resumes/search" method="GET">
              <label className="searchLabel" htmlFor="search">Search by keyword:</label>
              <input type="text" id="search" name="query" defaultValue={query} /><br />
              <label className="searchLabel" htmlFor="search-job">Search by job ID:</label>
              <input type="text" id="search-job" name="job" defaultValue={job} /><br />
              <select id="database" name="target" defaultValue={target}>
                <option value="pg">PostgreSQL</option>
                <option value="m">MongoDB</option>
                <option value="all">Both</option>
              </select>
              <button type="submit">Search</button>
            </form>

            <span className="searchResults">Resumé Search Results:</span>
            {/* {resumes.length} results for '{query}':
            <ul>
              {resumes.map(resume => (
                <li key={resume.resume_id}>
                  #{resume.resume_id} {resume.applicantname} (source: {resume.source})<br />
                  <div className="searchResumeText">{resume.resumetext}</div>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default ResultsPage;

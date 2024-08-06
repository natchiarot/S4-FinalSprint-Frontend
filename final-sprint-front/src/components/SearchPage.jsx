import React from 'react';

const SearchPage = () => {
  return (
    <>
      <main>
        <div className="outer-container">
          <div className="inner-container1">
            <div className="inco1">
              <h2>Resumé Search</h2>
              <form action="/search" method="GET">
                <label htmlFor="search">Search by keyword:</label>
                <input type="text" id="search" name="query" />
                <label htmlFor="search-job">Search by job ID:</label>
                <input type="text" id="search-job" name="job" />
                <select id="database" name="database">
                  <option value="PostgreSQL">PostgreSQL</option>
                  <option value="MongoDB">MongoDB</option>
                  <option value="Both">Both</option>
                </select>
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SearchPage;

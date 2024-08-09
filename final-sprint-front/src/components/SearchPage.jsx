import { useAuth } from "../providers/AuthProvider";
import { useState } from "react";
import axios from "axios";

import { SERVER } from "../providers/Constants";

import SearchResults from "./SearchResults";

const SearchPage = () => {
  const { token } = useAuth();
  const [formData, setFormData] = useState({
    query: "",
    job: "",
    _token: token,
  });

  const [error, setError] = useState(null);
  const [resumes, setResumes] = useState(null);
  const [buttonDisable, setButtonDisable] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setButtonDisable("disabled");
      const response = await axios.post(SERVER + "/resumes/search", formData);
      setResumes(response.data);
      setButtonDisable(null);
    } catch (error) {
      setButtonDisable(null);
      if (error.response) setError(error.response.data);
    }
  };
  return (
    <main>
      <div className="outer-container">
        <div className="inner-container1">
          <div className="inco1">
            <h2>Resumé Search</h2>
            <form onSubmit={handleSubmit}>
              <label className="searchLabel" htmlFor="search">
                Search by keyword:
              </label>
              <input
                type="text"
                id="search"
                name="query"
                value={formData.query}
                onChange={handleChange}
              />
              <br />
              <br />
              <button type="submit" disabled={buttonDisable}>
                Search
              </button>
              {error && { error }}
            </form>
          </div>
          {resumes && <SearchResults resumes={resumes} />}
        </div>
      </div>
    </main>
  );
};

export default SearchPage;

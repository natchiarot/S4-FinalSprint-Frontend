import SingleResume from "./SingleResume";

const SearchResults = ({ resumes }) => {
  return (
    <ul>
      <hr />
      Got {resumes.length} results
      {resumes.map((resume, index) => {
        return <SingleResume resume={resume} key={index} />;
      })}
    </ul>
  );
};

export default SearchResults;

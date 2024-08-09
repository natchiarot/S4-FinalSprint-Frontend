const SingleResume = ({ resume }) => {
  return (
    <li>
      #{resume.resumeId}
      <br />
      {resume.applicant.applicantName}
      <br />
      {resume.applicant.address}
      <br />
      {resume.applicant.email}
      <div className="searchResumeText">{resume.resumeText}</div>
      <br />
    </li>
  );
};

export default SingleResume;

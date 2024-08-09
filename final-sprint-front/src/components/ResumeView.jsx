import React from "react";

const ResumeView = ({ resume }) => {
  return (
    <main>
      <div className="outer-container">
        <div className="inner-container1">
          <ul>
            <li>
              #{resume.resume_id} {resume.applicantname}
              <br />
              <div className="searchResumeText">{resume.resumetext}</div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ResumeView;

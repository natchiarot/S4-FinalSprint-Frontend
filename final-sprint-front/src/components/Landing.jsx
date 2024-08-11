import React from "react";

const Landing = (props) => {
  return (
    <main>
      <div className="outer-container">
        <div className="inner-container1">
          <div className="alert-div">
            <h2>{props.header}</h2>
            <p>{props.message}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;

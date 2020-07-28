import React from "react";

import "./job-detail.styles.scss";

import { selectCurrentJobDetail } from "../../Redux/job/job.selectors";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const JobDetail = ({
  currentJobDetail: { title, city, employer, requirements, tasks },
}) => {
   
  return (
    <div className="display-item">
      <h1 className="title">{title}</h1>
      <hr></hr>
      <h3>Location : {city}</h3>
      <h3>Employer : {employer}</h3>
      <h3>Requirements :</h3>
      { requirements !== "NA" ?
          requirements.map((item, index) => (
        <p key={index}>{item}</p>
      )): <p>NA</p>
    }
      <h3>Tasks :</h3>
      {
        tasks !== "NA" ?
          tasks.map((item, index) => (
        <p key={index}>{item}</p>
      )): <p>NA</p>
    
    }
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentJobDetail: selectCurrentJobDetail,
});

export default connect(mapStateToProps)(JobDetail);

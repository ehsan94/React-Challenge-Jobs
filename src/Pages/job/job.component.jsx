import React from "react";

import JOB_DATA from "./job.data";
import "./job.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleModalHidden } from "../../Redux/job/job.actions";
import { setCurrentJobs } from "../../Redux/job/job.actions";
import { selectJobItems } from "../../Redux/job/job.selectors";

import JobItem from "../../Components/job-preview/job-item.component";

class ShopPage extends React.Component {
  componentDidMount() {
    const { setCurrentJobs, jobList, toggleModalHidden } = this.props;
    if (jobList.length < 1) {
      toggleModalHidden();
      setCurrentJobs(JOB_DATA);
    }
  }

  render() {
    const { jobList } = this.props;
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="checkout-header">
            <span>Job Title</span>
          </div>
          <div className="checkout-header">
            <span>City</span>
          </div>
          <div className="checkout-header">
            <span>Employer</span>
          </div>

          <div className="checkout-header">
            <span></span>
          </div>
        </div>
        {jobList.map((job) => (
          <JobItem key={job._id} job={job} />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentJobs: (job) => dispatch(setCurrentJobs(job)),
  toggleModalHidden: () => dispatch(toggleModalHidden()),
});

const mapStateToProps = createStructuredSelector({
  jobList: selectJobItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

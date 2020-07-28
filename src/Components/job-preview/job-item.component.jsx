import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./job-item.styles.scss";
import { selectModalHidden } from "../../Redux/job/job.selectors";
import { toggleModalHidden } from "../../Redux/job/job.actions";
import { setCurrentUser } from "../../Redux/job/job.actions";
import { setCurrentJobDetail } from "../../Redux/job/job.actions";
import Modal from "../modal/modal.component";
import { withRouter } from "react-router-dom";

const JobItem = ({
  job: { _id, title, city, employer },
  hidden,
  toggleModalHidden,
  setCurrentUser,
  history,
  setCurrentJobDetail,
}) => {
  return (
    <div
      className="job-item"
      onClick={() => {
        history.push("/detail");
        setCurrentJobDetail(_id);
      }}
    >
      <span className="name">{title}</span>
      <span className="quantity">{city}</span>
      <span className="price">{employer}</span>
      <div className="remove-button">&#9998;</div>
      <div
        className="remove-button"
        onClick={() => {
          toggleModalHidden();
          setCurrentUser(_id);
        }}
      >
        &#10005;
      </div>
      {hidden ? null : <Modal />}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleModalHidden: () => dispatch(toggleModalHidden()),
  setCurrentUser: (_id) => dispatch(setCurrentUser(_id)),
  setCurrentJobDetail: (_id) => dispatch(setCurrentJobDetail(_id)),
});

const mapStateToProps = createStructuredSelector({
  hidden: selectModalHidden,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(JobItem)
);

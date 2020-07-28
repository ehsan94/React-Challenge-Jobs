import React from "react";
import CustomButton from "../custom-button/custom-button.component";

//import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect'

import { toggleModalHidden } from "../../Redux/job/job.actions";
import { removeCurrentJob } from "../../Redux/job/job.actions";
import { selectCurrentUser } from "../../Redux/job/job.selectors";


import "./modal.styles.scss";

const Modal = ({  toggleModalHidden,  currentJob, removeCurrentJob}) => {
  
    return(
  <div className="cart-dropdown">
  <h5 className='empty-message'>Confirm to delete</h5>
 
    <CustomButton
      onClick={() => {
        removeCurrentJob(currentJob);
        toggleModalHidden();
      }}
    >
     Yes
    </CustomButton>
    <CustomButton
      onClick={() => {
      
       toggleModalHidden();
      }}
    inverted>
    No
    </CustomButton>
    
  </div>
)}

const mapStateToProps = createStructuredSelector({
    currentJob: selectCurrentUser,
  });

  const mapDispatchToProps = (dispatch) => ({
    toggleModalHidden: () => dispatch(toggleModalHidden()),
    removeCurrentJob: (_id) => dispatch(removeCurrentJob(_id)),
    
  });
  
  


export default connect(mapStateToProps, mapDispatchToProps)(Modal);

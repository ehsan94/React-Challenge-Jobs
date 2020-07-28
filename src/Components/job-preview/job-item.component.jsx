import React from 'react';

import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect'


import './job-item.styles.scss';
import {selectModalHidden} from '../../Redux/job/job.selectors'
import {toggleModalHidden} from '../../Redux/job/job.actions'
import {setCurrentUser} from '../../Redux/job/job.actions'
import Modal from '../modal/modal.component'

const JobItem = ({job: {_id, title, city, employer},hidden, toggleModalHidden , setCurrentUser}) =>   
   { 
    
   
     return(<div className="checkout-item">
   
      <span className="name" >{title}</span>
      <span className="quantity" >{city}</span>
      <span className="price" >{employer}</span>
      <div className='remove-button'>&#9998;</div>
    <div className='remove-button' onClick={()=>  {
       toggleModalHidden();
      setCurrentUser(_id); } }>&#10005;</div>
    {hidden ? null : <Modal />} 
  </div>)
  }
    


const mapDispatchToProps = (dispatch) => ({
  toggleModalHidden: () => dispatch(toggleModalHidden()),
  setCurrentUser: (_id) => dispatch(setCurrentUser(_id)),
  
});

const mapStateToProps = createStructuredSelector({
  hidden: selectModalHidden,
});


export default connect(mapStateToProps, mapDispatchToProps)(JobItem);


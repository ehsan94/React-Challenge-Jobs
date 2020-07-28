import React from 'react';

import './job-item.styles.scss';


const JobItem = ({job: {title, city, employer}}) => (

    
    <div className="checkout-item">
   
      <span className="name" >{title}</span>
      <span className="quantity" >{city}</span>
      <span className="price" >{employer}</span>
      <div className='remove-button'>&#9998;</div>
    <div className='remove-button'>&#10005;</div>
  </div>
  
    
)

export default JobItem;


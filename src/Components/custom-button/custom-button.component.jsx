import React from 'react';


import './custom-button.styles.scss';

const CustomButton = ({children, onClick, inverted, saveButton, ...otherProps}) =>(
    <button onClick={onClick} className={`${inverted? 'inverted': ''}  ${saveButton ? 'save-button' : '' } custom-button`} {...otherProps} >
    {children}
    </button>
);

export default CustomButton;






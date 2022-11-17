import React from 'react';
import { style } from 'typestyle';
const buttonStyle = style({backgroundColor:'green'})
const MyButton = ({children, ...props}) => {
    return (
        <button className={buttonStyle} {...props}>{children}</button>
    );
};

export default MyButton;

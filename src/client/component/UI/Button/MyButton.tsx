import React from 'react';
import {style} from 'typestyle';
import * as csx from 'csx';
import * as csstips from 'csstips';

const buttonStyle = style({
    backgroundColor: '#326ec8',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '10px',

    })
const MyButton = ({children, ...props}) => {
    return (
        <button className={buttonStyle} {...props}>{children}</button>
    );
};

export default MyButton;

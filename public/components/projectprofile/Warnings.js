import React from 'react';

const Warnings = (props) =>{
    return(
        <span className="warning-msg">
            <i className="fa fa-exclamation" aria-hidden="true"/>
            {props.message}
            </span>
    )
};

export default Warnings;
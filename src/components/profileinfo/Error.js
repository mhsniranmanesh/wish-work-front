import React from 'react';

const Error = (props) => {
    return (

            <span className="error-msg">
                                <i className="fa fa-times" aria-hidden="true"/>
                {props.message}
            </span>

    )
};

export default Error ;

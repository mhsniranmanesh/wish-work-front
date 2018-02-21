import React from 'react';

const HelpForCP = (props) => {
    return (
        <li className="contact">
            <div className="wrap d-flex flex-row">
                <img src={require('../../../static/img/logo-redesign-03.png')} style={{height:45}}/>
                <div className="meta">
                    <p className="name">راهنمای کنترل پروژه ویش ورک</p>
                </div>
            </div>
        </li>
    )
};

export default HelpForCP;

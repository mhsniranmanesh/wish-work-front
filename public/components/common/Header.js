import React from 'react';
import { NavLink } from 'react-router-dom';
import  {PropTypes} from 'prop-types';
import {connect} from 'react-redux';


class Header extends React.Component {

    render() {
        return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
        <a className="navbar-brand" href="http://wishwork.ir">
            <img src="img/nav-logo.png" height="30" className="d-inline-block align-top" alt="our logo. A shake hand that is like two wings too means that we fly high together"/>
                <span style="font-family:elham;color:#018abe;font-size:22px;">ویش ورک</span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav navbar-right">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarUserDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img className="rounded-circle" src="http://via.placeholder.com/50x50" width="30" height="30"/>
                            وحید علوی
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarUserDropdown">
                        <a className="dropdown-item" href="#">پنل کاربری</a>
                        <a className="dropdown-item" href="#">خروج</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>
            )
    }
}

export default Header;

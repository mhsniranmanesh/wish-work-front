import React from 'react';
import { NavLink } from 'react-router-dom';
import  {PropTypes} from 'prop-types';
import {connect} from 'react-redux';


class Header extends React.Component {
constructor(props){
    super(props);
    this.state ={profile_picture: "http://via.placeholder.com/50x50"}
}

componentWillReceiveProps(nextProps){
        if(this.props.profileInfo != nextProps.profileInfo ) {
            //console.log(nextProps.profileDetail);
            //inja az halate bler dar biad
            this.setState({profile_picture: nextProps.profileInfo.profile_picture});
        }
}


    render() {
        return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
        <a className="navbar-brand" href="http://wishwork.ir">
            <img src={require('../../../static/img/nav-logo.png')} height="30"
                 className="d-inline-block align-top" alt="nav-logo"/>
            <img src={require('../../../static/img/wishworkFontLogo.jpg')} height="30"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav navbar-right">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarUserDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img className="rounded-circle" src={this.state.profile_picture} width="30" height="30"/>
                        {(this.props.profileInfo.first_name || '') + ' ' + (this.props.profileInfo.last_name || '')}
                        </a>
                    <div className="dropdown-menu" aria-labelledby="navbarUserDropdown">
                        <NavLink className="dropdown-item" to='/dashboard'>پنل کاربری</NavLink>
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

function mapStateToProps(state , ownProps) {
    return {
        profileInfo: state.profileInfo
    }
}


export default connect(mapStateToProps)(Header);

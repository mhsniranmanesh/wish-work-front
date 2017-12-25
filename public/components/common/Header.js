import React from 'react';
import { NavLink } from 'react-router-dom';
import  PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Greeting from './Greeting';

class Header extends React.Component {
constructor(props){
    super(props);
    this.state ={profile_picture: "http://via.placeholder.com/50x50" , isLoggedIn:false };
    this.SignUp = this.SignUp.bind(this);
    this.GoToDashboard = this.GoToDashboard.bind(this)
}

SignUp(event){
    event.preventDefault();
    this.context.router.history.push('/signup');
}
GoToDashboard(event){
    event.preventDefault();
    this.context.router.history.push('/dashboard');
}

componentWillReceiveProps(nextProps){
        if(this.props.profileInfo != nextProps.profileInfo ) {

            //console.log(nextProps.profileDetail);
            //inja az halate bler dar biad
            this.setState({profile_picture: nextProps.profileInfo.profile_picture , isLoggedIn:true});
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

                            <Greeting isLoggedIn={this.state.isLoggedIn}
                                      profileInfo={this.props.profileInfo}
                                      profilePic={this.state.profile_picture}
                                      SignUp={this.SignUp}
                                      GoToDashboard={this.GoToDashboard}
                            />
                            {/*{pleaseRegister ?  {<a className="nav-link dropdown-toggle" href="http://example.com" id="navbarUserDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                                {/*<img className="rounded-circle" src={this.state.profile_picture} width="30" height="30"/>*/}
                                {/*{(this.props.profileInfo.first_name || '') + ' ' + (this.props.profileInfo.last_name || '')}*/}
                            {/*</a>} : {<p>hi:D</p>}}*/}

                    </ul>
                </div>
            </div>
        </nav>
                    )
            }
        }

Header.contextTypes = {
    router: PropTypes.object.isRequired
};


function mapStateToProps(state , ownProps) {
    return {
        profileInfo: state.profileInfo
    }
}


export default connect(mapStateToProps)(Header);

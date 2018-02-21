import React from 'react';
import { NavLink } from 'react-router-dom';
import  PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Greeting from './Greeting';

class Header extends React.Component {
constructor(props){
    super(props);
    this.state ={profile_picture: "" , isLoggedIn:false , Image:"" , colorCode:0 , colorBackground:0 };
    this.SignUp = this.SignUp.bind(this);
    this.GoToDashboard = this.GoToDashboard.bind(this);
    this.size = this.size.bind(this);
}
size(obj) {
        let x = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) x++;
        }
        return x;
    };
SignUp(event){
    event.preventDefault();
    // this.context.router.history.push('/signup');
    window.location.assign('http://wishworkstage.ir/signup/');
    // window.location.assign('http://wishwork.ir/signup/');
}
GoToDashboard(event){
    event.preventDefault();
    // this.context.router.history.push('/dashboard');
    window.location.assign('http://wishworkstage.ir/dashboard/');
    // window.location.assign('http://wishwork.ir/dashboard/');
}
    componentWillMount(){
        let x = this.size(this.props.profileInfo);
        if(x>0){
            let Image ;
            // console.log(Image , 'IMMMAAAGEEE');
            var colorBackground = -1;
            var colorCode;
            if((this.props.profileInfo.profile_picture != null) || (this.props.profileInfo.profile_picture != undefined)){
                if(this.props.profileInfo.profile_picture == '/media/'){
                    Image = require("../../../static/img/profile_pic/" + this.props.profileInfo[x-1].first_name[0].charCodeAt() + ".png");
                    colorBackground = this.props.profileInfo.first_name[0].charCodeAt()%5;
                }
                else {
                    Image = this.props.profileInfo.profile_picture;
                    // console.log("/media/", Image);
                }
            }
            else{
                Image= require("../../../static/img/profile_pic/" + this.props.profileInfo.first_name[0].charCodeAt() + ".png");
                colorBackground = this.props.profileInfo.first_name[0].charCodeAt()%5;
            }
            if(colorBackground === 0){
                colorCode = '#018abe'
            }
            else if(colorBackground === 1){
                colorCode = '#014762'
            }
            else if(colorBackground === 2){
                colorCode = '#69144F'
            }
            else if(colorBackground === 3){
                colorCode = '#c96929'
            }
            else if(colorBackground === 4){
                colorCode = '#707117'
            }
            this.setState({colorBackground: colorBackground , colorCode:colorCode , Image:Image});
            // console.log(nextProps.profileInfo[0]);
            // this.setState({profileInfo: Object.assign({}, nextProps.profileInfo[0])});
        }
    }

componentWillReceiveProps(nextProps){
    let x = this.size(nextProps.profileInfo);
    if(this.props.profileInfo != nextProps.profileInfo ) {
                let Image ;
                this.setState({isLoggedIn: true});
                // console.log(Image , 'IMMMAAAGEEE');
                var colorBackground = -1;
                var colorCode;
                if((nextProps.profileInfo.profile_picture != null) || (nextProps.profileInfo.profile_picture != undefined)){
                    if(nextProps.profileInfo[x-1].profile_picture == '/media/'){
                        Image = require("../../../static/img/profile_pic/" + nextProps.profileInfo.first_name[0].charCodeAt() + ".png");
                        colorBackground = nextProps.profileInfo.first_name[0].charCodeAt()%5;
                    }
                    else {
                        Image = nextProps.profileInfo[x-1].profile_picture;
                        // console.log("/media/", Image);
                    }
                }
                else{
                    Image= require("../../../static/img/profile_pic/" + nextProps.profileInfo.first_name[0].charCodeAt() + ".png");
                    colorBackground = nextProps.profileInfo.first_name[0].charCodeAt()%5;
                }
                if(colorBackground === 0){
                    colorCode = '#018abe'
                }
                else if(colorBackground === 1){
                    colorCode = '#014762'
                }
                else if(colorBackground === 2){
                    colorCode = '#69144F'
                }
                else if(colorBackground === 3){
                    colorCode = '#c96929'
                }
                else if(colorBackground === 4){
                    colorCode = '#707117'
                }
                this.setState({colorBackground: colorBackground , colorCode:colorCode , Image:Image});
                console.log(nextProps.profileInfo ,' HaHaHa!');
                this.setState({profileInfo: Object.assign({}, nextProps.profileInfo)});
            //console.log(nextProps.profileDetail);
            //inja az halate bler dar biad
            // this.setState({profile_picture: nextProps.profileInfo.profile_picture , isLoggedIn:true});
        }
}


    render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="http://wishwork.ir">
                    <img src={require('../../../static/img/IMG_2665.jpg')} height="30"
                         className="d-inline-block align-top" alt="nav-logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav navbar-right">

                            <Greeting isLoggedIn={this.state.isLoggedIn}
                                      profileInfo={this.state.profileInfo}
                                      profilePic={this.state.Image}
                                      SignUp={this.SignUp}
                                      colorCode={this.state.colorCode}
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

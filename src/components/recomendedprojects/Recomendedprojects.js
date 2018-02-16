import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ProjectsList from './ProjectsList';

class Recomendedprojects extends React.Component{
    constructor(props){
        super(props);
        this.state = {profileInfo:""};
        this.goToProjectProfile = this.goToProjectProfile.bind(this);
        this.size = this.size.bind(this);

    }
    size (obj) {
        let x = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) x++;
        }
        return x;
    };
    goToProjectProfile(slug){
        window.location.assign('http://wishworkstage.ir/projects/' + slug);
        // window.location.assign('http://wishwork.ir/projects/' + slug);

    }
    componentWillMount(){
        var x = this.size(this.props.profileInfo);
        if (x > 0) {
            // this.setState({loading: false});
            this.setState({profileInfo: this.props.profileInfo[x - 1]});
        }
    }
    componentWillReceiveProps(nextProps) {
        var size = this.size(nextProps.profileInfo);
        if (this.props.profileInfo != nextProps.profileInfo) {
            console.log(nextProps.profileInfo[0]);
            //inja az halate bler dar biad
            this.setState({profileInfo: Object.assign({}, nextProps.profileInfo[size - 1])});
        }
    }
    //TODO button more for more suggested projects
  render(){
    return(
      <div>
      <div className="content-wrapper py-3">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-sm-8 d-block mx-auto">
                      <div className="dash-con dash-new-project con-body mb-4">
                          <h5 className="form-title-fontsize">پروژه های پیشنهادی برای شما</h5>
                          <div className="dash-divider"/>
                          <ProjectsList
                              goToProjectProfile={this.goToProjectProfile}
                              Projects={this.state.profileInfo.suggested_projects}/>
                          {/**/}
                          {/*<button type="submit" className="btn btn-primary btn-rec">*/}
                              {/*تمام پروژه ها*/}
                          {/*</button>*/}
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
    );
  }
}
Recomendedprojects.contextTypes = {
    router: PropTypes.object.isRequired
};

Recomendedprojects.PropTypes = {
  recomendedProject : PropTypes.object.isRequired,
};
function mapStateToProps(state, ownProps) {
    return {
        recomendedProject: state.recomendedProject,
        profileInfo : state.profileInfo
    }
}

export default connect(mapStateToProps)(Recomendedprojects);

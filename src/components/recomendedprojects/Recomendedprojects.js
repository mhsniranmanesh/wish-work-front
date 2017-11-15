import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ProjectsList from './ProjectsList';

class Recomendedprojects extends React.Component{
    constructor(props){
        super(props);
    }


  render(){
    return(
      <div>
      <div className="content-wrapper py-3">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-sm-8 d-block mx-auto">
                      <div className="dash-con dash-new-project con-body mb-4">
                          <h5>پروژه های پیشنهادی برای شما</h5>
                          <div className="dash-divider"/>
                          <ProjectsList Projects={this.props.recomendedProject}/>

                          <button type="submit" className="btn btn-primary btn-rec">
                              تمام پروژه ها
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
    );
  }
}

Recomendedprojects.PropTypes = {
  recomendedProject : PropTypes.object.isRequired,
};
function mapStateToProps(state, ownProps) {
    return {
        recomendedProject: state.recomendedProject
    }
}

export default connect(mapStateToProps)(Recomendedprojects);

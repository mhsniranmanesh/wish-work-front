import React from 'react' ;
import PropTypes from 'prop-types';
import FreelancerInfos from './FreelancerInfos';
import FreelancerInviteFollow from './FreelancerInviteFollow';
import FreelancerSampleProjectsList from './FreelancerSampleProjectsList';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {ProjectsDone} from "../../actions/ProjectsDone";

class FreelancerProfile extends React.Component {
    render(){
        return(
            <section className="profile">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">

                            <FreelancerInfos/>
                            <FreelancerSampleProjectsList ProjectsList={this.props.ProjectsDone}/>

                        </div>

                        <FreelancerInviteFollow/>

                    </div>
                </div>
            </section>
        )
    }
}
FreelancerProfile.PropTypes = {
    actions: PropTypes.object.isRequired,
    ProjectsDone: PropTypes.object.isRequired
};

function mapStateToProps(state , ownProps) {
    return {
        ProjectsDone: state.ProjectsDone
    }
}

function mapDispatchToProps(dispatch) {
    return{
        actions : bindActionCreators(ProjectsDone , dispatch)
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(FreelancerProfile);
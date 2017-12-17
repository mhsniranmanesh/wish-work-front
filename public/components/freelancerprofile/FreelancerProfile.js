import React from 'react' ;
import PropTypes from 'prop-types';
import FreelancerInfos from './FreelancerInfos';
import FreelancerInviteFollow from './FreelancerInviteFollow';
import FreelancerSampleProjectsList from './FreelancerSampleProjectsList';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as ProjectsDone from "../../actions/ProjectsDone";
import * as freelancerActions from '../../actions/freelancerDetail';

class FreelancerProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {freelancerDetail: Object.assign({} , props.freelancerDetail)}
    }
    componentWillMount(){
        console.log('this.props:' ,this.props.location.pathname.slice(10));
        //this.setState({});
        this.props.actions.freelancerDetail(this.props.location.pathname.slice(10));
    }
    componentWillReceiveProps(nextProps){
        if(this.props.freelancerDetail != nextProps.freelancerDetail ) {
            console.log(nextProps.freelancerDetail);
            //inja az halate bler dar biad
            this.setState({freelancerDetail: Object.assign({}, nextProps.freelancerDetail)});
        }
    }
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
        ProjectsDone: state.ProjectsDone,
        freelancerDetail : state.freelancerDetail
    }
}

function mapDispatchToProps(dispatch) {
    return{
        actions : bindActionCreators(ProjectsDone ,freelancerActions , dispatch)
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(FreelancerProfile);
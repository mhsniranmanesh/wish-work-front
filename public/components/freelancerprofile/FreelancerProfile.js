import React from 'react' ;
import PropTypes from 'prop-types';
import FreelancerInfos from './FreelancerInfos';
import FreelancerInviteFollow from './FreelancerInviteFollow';
import FreelancerSampleProjectsList from './FreelancerSampleProjectsList';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
//import * as ProjectsDone from "../../actions/ProjectsDone";
import * as freelancerActions from '../../actions/freelancerDetail';
import NameOfFreelancer from './NameOfFreelancer';

class FreelancerProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {freelancerDetail: "" ,
            projectDetail:"" , showNameOrReturn:true , skills:"" , showSkills:false , numberOfProjects:0};
        this.goToProjectProfile = this.goToProjectProfile.bind(this);
        this.size = this.size.bind(this);
        this.checkExistOrLengthOfProjectDetail = this.checkExistOrLengthOfProjectDetail.bind(this);
    }
    size(obj) {
        let x = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) x++;
        }
        return x;
    };
    checkExistOrLengthOfProjectDetail(){
        let x = this.size(this.props.projectDetail);
        if(x>0){
            this.setState({projectDetail: Object.assign({} , this.props.projectDetail[x-1].general)} , () => {this.goToProjectProfile()})
        }
    }
    goToProjectProfile(){
            this.context.router.history.push({
                pathname: '/projects/' + this.state.projectDetail.slug,
            });
        }

    componentWillMount(){
        console.log('this.props.location:' ,this.props.location.pathname.slice(10));
        //this.setState({});
        this.props.actions.freelancerDetail(this.props.location.pathname.slice(10));
        var Size = this.size(this.props.projectDetail);
        if(Size > 0){
            console.log(this.state.showNameOrReturn);
            this.setState({showNameOrReturn : false});
        }
    }
    componentWillReceiveProps(nextProps){
        if(this.props.freelancerDetail != nextProps.freelancerDetail ) {
            console.log(nextProps.freelancerDetail);
            //inja az halate bler dar biad
            this.setState({skills: nextProps.freelancerDetail.skills});
            this.setState({freelancerDetail: Object.assign({}, nextProps.freelancerDetail)});
            this.setState({showSkills : true});
            var numberOfProjects = this.size(nextProps.freelancerDetail.freelancer_projects)
            if(numberOfProjects > 0){
                this.setState({numberOfProjects: numberOfProjects })
            }
        }
    }
    render(){
        return(
            <section className="profile">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">

                            <FreelancerInfos freelancerDetail={this.state.freelancerDetail}
                                             Skills={this.state.skills} showSkills={this.state.showSkills}
                            />
                            <FreelancerSampleProjectsList ProjectsList={this.state.freelancerDetail.freelancer_projects}/>

                        </div>
                        {this.state.showNameOrReturn ?
                            <NameOfFreelancer numberOfProjects={this.state.numberOfProjects}
                            /> :
                            <FreelancerInviteFollow
                                numberOfProjects={this.state.numberOfProjects}
                                checkExistOrLengthOfProjectDetail={this.checkExistOrLengthOfProjectDetail}/>
                        }
                    </div>
                </div>
            </section>
        )
    }
}

FreelancerProfile.contextTypes = {
    router: PropTypes.object.isRequired
};

FreelancerProfile.PropTypes = {
    actions: PropTypes.object.isRequired,
    ProjectsDone: PropTypes.object.isRequired
};

function mapStateToProps(state , ownProps) {
    return {
        ProjectsDone: state.ProjectsDone,
        freelancerDetail : state.freelancerDetail,
        projectDetail : state.projectDetail
    }
}

function mapDispatchToProps(dispatch) {
    return{
        actions : bindActionCreators(freelancerActions , dispatch)
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(FreelancerProfile);
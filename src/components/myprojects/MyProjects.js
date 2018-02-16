import React from 'react';
import {connect} from 'react-redux';
import AsFreelancerOrClient from './AsFreelancerOrClient';
import Filter from './Filter';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import ProjectsList from './ProjectsList';
import * as projectActions from '../../actions/projectSubmit.js';
//import ProjectTemplate from './ProjectTemplate';


class MyProjects extends React.Component {
    constructor(props){
        super(props);
        this.state={ClientProjects:"" , showClient:true , FreelancerProjects:""};
        this.size = this.size.bind(this);
        this.onClick = this.onClick.bind(this);
        this.goToProjectAuctionPage = this.goToProjectAuctionPage.bind(this);
        this.goToTender = this.goToTender.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
        this.changeToFreelancerOrClientProjects = this.changeToFreelancerOrClientProjects.bind(this);
        this.goToCP = this.goToCP.bind(this);
    }

    goToCP(){
        this.context.router.history.push({
            pathname: '/project/control',
        });
    }
    changeToFreelancerOrClientProjects(){
        this.setState(prevState => ({showClient:!prevState.showClient}))
    }
    deleteProject(id){
        this.props.actions.deleteProject(id);
    }
    goToTender(y){
        let slug = y.toString();
        window.location.assign('http://wishworkstage.ir/projects/' + slug);
        // window.location.assign('http://wishwork.ir/projects/' + slug);

    }
    size (obj) {
        let x = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) x++;
        }
        return x;
    };
    componentWillReceiveProps(nextProps) {
        var size = this.size(nextProps.profileInfo);
        if(this.props.profileInfo[size-1] != nextProps.profileInfo[size-1]){
            this.setState({ClientProjects : nextProps.profileInfo[size-1].client_projects});
            this.setState({FreelancerProjects: nextProps.profileInfo[size-1].freelancer_projects})
        }
    }
    goToProjectAuctionPage(slug){
        this.context.router.history.push('projects/' + slug)
    }
    componentWillMount(){
        var x = this.size(this.props.profileInfo);
        if(x > 0) {
            this.setState({ClientProjects: this.props.profileInfo[x - 1].client_projects});
            this.setState({FreelancerProjects: this.props.profileInfo[x-1].freelancer_projects})

        }
        //console.log('HI PF' , this.state.ClientProjects)
    }
    onClick(event){
        event.preventDefault();
        this.context.router.history.push('/project/control');
    };

    render(){
        var ClickableFunc = this.state.ClickableFunc;
        return(
            <div className="content-wrapper py-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8 d-block mx-auto nav-pills">
                            <AsFreelancerOrClient changeToFreelancerOrClientProjects={this.changeToFreelancerOrClientProjects}/>
                            <Filter/>
                            { this.state.showClient ?
                                <ProjectsList ClientProjects={this.state.ClientProjects}
                                              onClick={this.onClick}
                                              goToTender={this.goToTender}
                                              deleteProject={this.deleteProject}
                                              goToCP={this.goToCP}

                                /> : <ProjectsList FreelancerProjects={this.state.FreelancerProjects}
                                                   goToCP={this.goToCP}
                                />
                            }

                        </div>
                    </div>
                </div>
            </div>

    );
    }
}
MyProjects.contextTypes = {
    router: PropTypes.object.isRequired
};



function mapStateToProps(state , ownProps) {
    return{
        profileInfo : state.profileInfo
    }
}

function mapDispatchToProps(dispatch) {
    return{
        actions: bindActionCreators(projectActions, dispatch)

    }
}

export default connect(mapStateToProps , mapDispatchToProps )(MyProjects);


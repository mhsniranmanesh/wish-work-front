import React from 'react';
import ProjectDetail from './ProjectDetail'
import AddBid from './AddBid'
import BidsList from './BidsList';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Bids} from '../../actions/Bids';
import * as projectActions from '../../actions/projectDetail';


class ProjectProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {projectDetail:Object.assign({} , props.projectDetail)}
    }
    componentWillMount(){
        console.log('this.props:' ,this.props.location.pathname.slice(10));
        this.setState({});
        this.props.actions.projectDetail(this.props.location.pathname.slice(10));
    }
    componentWillReceiveProps(nextProps){
        if(this.props.projectDetail != nextProps.projectDetail ) {
            console.log(nextProps.profileDetail);
            //inja az halate bler dar biad
            this.setState({projectDetail: Object.assign({}, nextProps.projectDetail)});
        }
    }
    render(){
        return(
            <section className="profile">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <ProjectDetail Detail={this.state.projectDetail}/>
                            <div className="con mb-4">
                                <BidsList Bids={this.props.Bids}/>
                            </div>
                        </div>
                        <AddBid/>
                    </div>
                </div>
            </section>
        )
    }
}

ProjectProfile.contextTypes = {
    router: PropTypes.object.isRequired
};

ProjectProfile.PropTypes = {
  Bids : PropTypes.object.isRequired  ,
  actions : PropTypes.object.isRequired,
    projectActions : PropTypes.array.isRequired,
};

function mapStateToProps(state , ownProps) {
    const projectSlug = ownProps.location.pathname.slice(10); // from the path `/projects/:id`
    console.log('ownProps' , projectSlug);
    return {
        Bids: state.Bids,
        projectDetail : state.projectDetail
    }
}

function mapDispatchToProps(dispatch){
    return{
    actions : bindActionCreators(projectActions, dispatch)
    }
}





export default connect(mapStateToProps , mapDispatchToProps)(ProjectProfile);
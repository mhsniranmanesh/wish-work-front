import React from 'react';
import ProjectDetail from './ProjectDetail'
import AddBid from './AddBid'
import BidsList from './BidsList';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Bids} from '../../actions/Bids';


class ProjectProfile extends React.Component {
    render(){
        return(
            <section className="profile">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <ProjectDetail/>
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

ProjectProfile.PropTypes = {
  Bids : PropTypes.object.isRequired  ,
  actions : PropTypes.object.isRequired
};

function mapStateToProps(state , ownProps) {
    return {
        Bids: state.Bids
    }
}

function mapDispatchToProps(dispatch){
    return{
    actions : bindActionCreators(Bids , dispatch)
    }
}





export default connect(mapStateToProps , mapDispatchToProps)(ProjectProfile);
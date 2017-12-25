import React from 'react';
import ProjectDetail from './ProjectDetail'
import AddBid from './AddBid'
import BidsList from './BidsList';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import {Bids} from '../../actions/Bids';
import * as projectActions from '../../actions/projectDetail';

class ProjectProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {projectDetail:Object.assign({} , props.projectDetail),
                      amountOfMileStones:0 , Length:0, bid_description:'',
                      bid_price:'' , ModalState:'' , showError:false , profileInfo :Object.assign({} , props.profileInfo),
                      isLoggedIn:false , delivery_duration:10,
                      };
        // delivery_duration: Array [ "This field is required." ]
        // number_of_milestones: Array [ "This field is required." ]
        // price: Array [ "This field is required." ]
    this.valueOfMileStones = this.valueOfMileStones.bind(this);
    this.CheckLength = this.CheckLength.bind(this);
    this.BidPrice = this.BidPrice.bind(this);
    this.BidDescription = this.BidDescription.bind(this);
    this.ModalSubmit = this.ModalSubmit.bind(this);
    this.FinalSubmitBid = this.FinalSubmitBid.bind(this);
    }

    FinalSubmitBid(){
        this.state.Length = Number(this.state.Length);
        var senData = {
            project_id : this.state.projectDetail.uuid,
            number_of_milestones : this.state.Length,
            price : this.state.bid_price,
            delivery_duration : this.state.delivery_duration,
            is_default_project_controller : false,
        };
        this.props.actions.addBidToProject(senData).then(
            this.setState({showError:false , ModalState:'modal'})
        )
    }

    ModalSubmit(){
        if(this.state.bid_description === ''){
            this.setState({showError:true , message:"توضیحی در رابطه با پیشنهاد خود بدهید، این بخش برای مشتری بسیار تاثیر گذار است"});
        }
        else if(this.state.bid_price ===''){
            this.setState({showError:true , message:"لطفا قیمت پیشنهادی خود را ارائه دهید."});
        }
        else if(this.state.Length < 2){
            this.setState({showError:true , message:"لطفا تعداد بازه های زمانی را بیشتر از ۲ انتخاب کنید!"});
        }
        else {
            this.state.bid_price = Number(this.state.bid_price);
            this.FinalSubmitBid()
        }
    }
    BidDescription(event){
        this.setState({bid_description : event.target.value})
    }
    BidPrice(event){
        this.setState({bid_price : event.target.value})
    }
    CheckLength(){
        if(this.state.amountOfMileStones < 2){
            this.setState({showError:true , message:"لطفا تعداد بازه های زمانی را بیشتر از ۲ انتخاب کنید!"});
        }
        else if(this.state.amountOfMileStones > 4){
            this.setState({showError:true , message:"تعداد بازه های زمانی نباید بیشتر از ۴ باشد."});
        }
        else {

            this.setState({showError:false , Length: this.state.amountOfMileStones});
        }
    }
    valueOfMileStones(event){
        this.setState({amountOfMileStones : event.target.value})
    }
    // componentDidUpdate(prevProps, prevState) {
    //     if(prevState.Length != this.state.Length){
    //         return 1
    //     }
    // }
    componentWillMount(){
        console.log('this.props:' ,this.props.location.pathname.slice(10));
        this.setState({});
        this.props.actions.projectDetail(this.props.location.pathname.slice(10));
    }
    componentWillReceiveProps(nextProps){
        if(this.props.projectDetail != nextProps.projectDetail ) {
            console.log(nextProps.profileDetail);
            //inja az halate bler dar biad
            if(this.props.profileInfo.username == nextProps.projectDetail.client){
                this.setState({isLoggedIn : true});
            }
            this.setState({projectDetail: Object.assign({}, nextProps.projectDetail)});
        }
        if(this.props.profileInfo != nextProps.profileInfo) {

            this.setState({profileInfo: Object.assign({} , nextProps.profileInfo)});
            if(nextProps.profileInfo.username == this.props.projectDetail.client){
                this.setState({isLoggedIn : true});

            }
        }

    }
    componentDidMount(){
    }
    render(){

        return(
            <section className="profile">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <ProjectDetail Detail={this.state.projectDetail}/>
                            <div className="con mb-4">
                                <BidsList isLoggedIn={this.state.isLoggedIn} Bids={this.props.Bids}/>
                            </div>
                        </div>
                        <AddBid TimeLimit={this.state.projectDetail.time_limit}
                                amountOfMileStones={this.state.amountOfMileStones}
                                valueOfMileStones={this.valueOfMileStones}
                                Length={this.state.Length}
                                CheckLength={this.CheckLength}
                                ModalState={this.state.ModalState}
                                BidDescription={this.BidDescription}
                                BidPrice={this.BidPrice}
                                ModalSubmit={this.ModalSubmit}
                                message={this.state.message}
                                showError={this.state.showError}
                        />
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
        projectDetail : state.projectDetail,
        profileInfo : state.profileInfo
    }
}

function mapDispatchToProps(dispatch){
    return{
    actions : bindActionCreators(projectActions, dispatch)
    }
}





export default connect(mapStateToProps , mapDispatchToProps)(ProjectProfile);
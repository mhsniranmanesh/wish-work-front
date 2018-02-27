import React from 'react';
import AddedBidsMileStone from './AddedBidsMileStone';
import PropTypes from 'prop-types';
import {Row , Col} from 'reactstrap';


const BidTemplate = ({Bid , isLoggedIn , ownerOfProject, number , mileStoneX ,
                         goToCash , priceForCash, cashinModalState, modalCashEnough, priceOfMileStoneForCash,
                         acceptBid, profileInfo , deleteBid , prices , goToFreelancerProfile , toPersianNum,
                         numberOfMileStonesOfEachFreelancer ,freelancerIsSelected , numberOfPages , is_freelancer_selected}) => {
    console.log(ownerOfProject , 'ownerOfProject2');
    var bidOfFreelancer = false;
    let Image ;
    var colorBackground = -1;
    var colorCode;
    if ((Bid.freelancer.profile_picture != null) || (Bid.freelancer.profile_picture != undefined)) {
        Image = Bid.freelancer.profile_picture;
         console.log('Hello', Image);
    }
    else {
        // Image = "http://via.placeholder.com/125x125";
        // console.log('Hi', Image);
        Image = require("../../../static/img/profile_pic/" + Bid.freelancer.first_name[0].charCodeAt() + ".png");
        // Image = "http://via.placeholder.com/125x125";
        colorBackground = Bid.freelancer.first_name[0].charCodeAt()%5;
        console.log('Bid.profile_picture', Bid.freelancer.profile_picture);
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
    if(isLoggedIn) {
        if((profileInfo.first_name == Bid.freelancer.first_name) && (Bid.freelancer.last_name == profileInfo.last_name)){
            bidOfFreelancer = true;
        }

        //console.log(Bid , 'Bid Bid Bid :D');
        if(ownerOfProject){
            if(!is_freelancer_selected) {
                return (
                <div>
                    <div className="fl-list">
                            <div className="fl-wrap media mb-1">
                                <img className="d-flex  ml-3 rounded-circle clickable-img" src={Image}
                                     style={ {height:60 , width:60 , backgroundColor:colorCode}} onClick={(event) => {
                                    goToFreelancerProfile(Bid.freelancer.username);
                                }}  />
                               <div className="bid-subject" >
                                   <div onClick={(event) => {
                                       goToFreelancerProfile(Bid.freelancer.username);
                                   }}>
                                 <a href='#' className="fl-name">{Bid.freelancer.first_name} {Bid.freelancer.last_name} </a>
                                   </div>
                                 <button id="accBiddingBtn" type="submit" className="btn btn-primary float-left btn-rec btn-handshake"
                                         data-toggle="modal" data-target={"#" + (number*10) }>
                                     <i className="fa fa-handshake-o"/>
                                 </button>
                               </div>
                            </div>
                            <Row>
                                <span className="fl-discript  fl-discript-not-owner mt-2 mr-4">{Bid.description} </span>
                            </Row>
                            <Row>
                                <Col className="owner-bidding-price mt-2"> <span>{toPersianNum(Bid.price*1000)} تومان </span><span></span></Col>
                                <Col className="owner-bidding-price mt-2"> {toPersianNum(Bid.delivery_duration)} روز </Col>
                                <Col className="owner-bidding-price mt-2"> {toPersianNum(Bid.number_of_milestones)} مرحله </Col>
                            </Row>
                    </div>

                        <AddedBidsMileStone number_of_milestones={Bid.number_of_milestones}
                                            delivery_duration={Bid.delivery_duration}
                                            toPersianNum={toPersianNum}
                                            price_of_bid={Bid.price}
                                            key={Bid.uuid}
                                            number={number}
                                            mileStoneX={mileStoneX}
                                            goToCash={goToCash}
                                            priceForCash={priceForCash}
                                            cashinModalState={cashinModalState}
                                            modalCashEnough={modalCashEnough}
                                            balance={profileInfo.balance}
                                            prices={prices}
                                            acceptBid={acceptBid}
                                            id={Bid.uuid}
                                            numberOfMileStonesOfEachFreelancer={numberOfMileStonesOfEachFreelancer}
                                            priceOfMileStoneForCash={priceOfMileStoneForCash}
                                            numberOfPages={numberOfPages}

                        />


                        <div className="divider"/>

                    </div>

                )
            }
            else {
                return (
                    <div>
                        <div className="fl-list">
                            <div className="fl-wrap media mb-1">
                                <img className="d-flex  ml-3 rounded-circle clickable-img" src={Image}
                                     style={{height: 60, width: 60 , backgroundColor:colorCode}} onClick={(event) => {
                                    goToFreelancerProfile(Bid.freelancer.username);
                                }}/>


                                <div className="bid-subject" onClick={(event)=>{goToFreelancerProfile(Bid.freelancer.username);}}>
                                    <a href='#'
                                       className="fl-name">{Bid.freelancer.first_name} {Bid.freelancer.last_name} </a>
                                </div>
                            </div>
                            <Row>
                                <span className="fl-discript  fl-discript-not-owner mt-2 mr-2">{Bid.description} </span>
                            </Row>
                            <Row>
                                <Col className="owner-bidding-price mt-2"> <span>{toPersianNum(Bid.price*1000)} تومان </span></Col>
                                <Col className="owner-bidding-price mt-2"> {toPersianNum(Bid.delivery_duration)} روز </Col>
                                <Col className="owner-bidding-price mt-2"> {toPersianNum(Bid.number_of_milestones)} مرحله </Col>
                            </Row>


                            {/*<div className="sub-heading">*/}
                            {/*<a className="tag" href="#">#فارسی_به_انگلیسی</a>*/}
                            {/*<a className="tag" href="#">#علمی</a>*/}
                            {/*<a className="tag" href="#">#زیست_شناسی</a>*/}
                            {/*<a className="tag" href="#">#میکرو_بیولوژی</a>*/}
                            {/*<a className="tag" href="#">#فوری</a>*/}
                            {/*</div>*/}


                        </div>
                        <div className="divider"/>
                    </div>
                )
            }
        }
        else {
            if(bidOfFreelancer){
                return (
                    <div>
                        <div className="fl-list fl-wrap-self-bid">
                            <div className="fl-wrap media mb-1">
                                <img className="d-flex  ml-3 rounded-circle clickable-img" src={Image}
                                     style={ {height:60 , width:60 , backgroundColor:colorCode} } onClick={(event)=>{goToFreelancerProfile(Bid.freelancer.username);
                                }}/>

                               <div className="bid-subject" onClick={(event)=>{goToFreelancerProfile(Bid.freelancer.username);}}>
                                  <a  href='#' className="fl-name">{Bid.freelancer.first_name} {Bid.freelancer.last_name} </a>
                               </div>
                               {freelancerIsSelected ? (null) :
                                   <i className="fa fa-trash-o delete-self-bid" aria-hidden="true"
                                      onClick={(event) => {
                                          deleteBid(Bid.uuid)
                                      }}/>
                               }
                              </div>
                                  <Row>
                                      <span className="fl-discript  fl-discript-not-owner mt-2 mr-4">{Bid.description} </span>
                                  </Row>
                                  <Row>

                                       <Col className="owner-bidding-price mt-2 mr-4">{toPersianNum(Bid.price * 1000)} تومان</Col>
                                       <Col className="owner-bidding-price mt-2 mr-4"> {toPersianNum(Bid.delivery_duration)} روز </Col>
                                       <Col className="owner-bidding-price mt-2 mr-4"> {toPersianNum(Bid.number_of_milestones)} مرحله </Col>

                                  </Row>

                                    {/*<button id="accBiddingBtn" type="submit" className="btn btn-primary float-left btn-rec"*/}
                                    {/*data-toggle="modal" data-target="#accBiddingModal">*/}
                                    {/*<i className="fa fa-handshake-o"/>*/}
                                    {/*</button>*/}


                                    {/*<div className="sub-heading">*/}
                                        {/*<a className="tag" href="#">#فارسی_به_انگلیسی</a>*/}
                                        {/*<a className="tag" href="#">#علمی</a>*/}
                                        {/*<a className="tag" href="#">#زیست_شناسی</a>*/}
                                        {/*<a className="tag" href="#">#میکرو_بیولوژی</a>*/}
                                        {/*<a className="tag" href="#">#فوری</a>*/}
                                    {/*</div>*/}

                        </div>
                        <div className="divider"/>


                    </div>
                )
            }
            else {


                return (
                    <div>
                        <div className="fl-list">
                            <div className="fl-wrap media mb-1">
                                <img className="d-flex  ml-3 rounded-circle clickable-img" src={Image}
                                     style={ {height:60 , width:60 , backgroundColor:colorCode} } onClick={(event)=>{goToFreelancerProfile(Bid.freelancer.username);}}/>
                                 <div className="bid-subject" onClick={(event)=>{goToFreelancerProfile(Bid.freelancer.username);}}>
                                    <a href="#"
                                       className="fl-name">{Bid.freelancer.first_name} {Bid.freelancer.last_name} </a>
                                     <span className="bidding-price">{toPersianNum(Bid.price * 1000)} تومان</span>
                                    {/*<button id="accBiddingBtn" type="submit" className="btn btn-primary float-left btn-rec"*/}
                                    {/*data-toggle="modal" data-target="#accBiddingModal">*/}
                                    {/*<i className="fa fa-handshake-o"/>*/}
                                    {/*</button>*/}
                                </div>
                              </div>
                                    {/*<span className="fl-discript  fl-discript-not-owner">{Bid.description} </span>*/}
                                    {/*<div className="sub-heading">*/}
                                        {/*<a className="tag" href="#">#فارسی_به_انگلیسی</a>*/}
                                        {/*<a className="tag" href="#">#علمی</a>*/}
                                        {/*<a className="tag" href="#">#زیست_شناسی</a>*/}
                                        {/*<a className="tag" href="#">#میکرو_بیولوژی</a>*/}
                                        {/*<a className="tag" href="#">#فوری</a>*/}
                                    {/*</div>*/}


                        </div>
                        <div className="divider"/>
                    </div>
                )
            }
        }
    }
    else {
        return(
            <div>
                <div className="fl-list">
                    <div className="fl-wrap media mb-1">
                        <img className="d-flex  ml-3 rounded-circle clickable-img" src={Image}
                             style={ {height:60 , width:60 , backgroundColor:colorCode} } onClick={(event)=>{goToFreelancerProfile(Bid.freelancer.username);}}/>
                        <div className="bid-subject" onClick={(event)=>{goToFreelancerProfile(Bid.freelancer.username);}}>
                            <a href="#"
                               className="fl-name">{Bid.freelancer.first_name} {Bid.freelancer.last_name} </a>
                            <span className="bidding-price">{toPersianNum(Bid.price * 1000)} تومان</span>
                            {/*<button id="accBiddingBtn" type="submit" className="btn btn-primary float-left btn-rec"*/}
                            {/*data-toggle="modal" data-target="#accBiddingModal">*/}
                            {/*<i className="fa fa-handshake-o"/>*/}
                            {/*</button>*/}
                        </div>
                    </div>
                    {/*<span className="fl-discript  fl-discript-not-owner">{Bid.description} </span>*/}
                    {/*<div className="sub-heading">*/}
                    {/*<a className="tag" href="#">#فارسی_به_انگلیسی</a>*/}
                    {/*<a className="tag" href="#">#علمی</a>*/}
                    {/*<a className="tag" href="#">#زیست_شناسی</a>*/}
                    {/*<a className="tag" href="#">#میکرو_بیولوژی</a>*/}
                    {/*<a className="tag" href="#">#فوری</a>*/}
                    {/*</div>*/}


                </div>
                <div className="divider"/>
            </div>
        )
    }
};
BidTemplate.PropTypes = {
    Bid : PropTypes.object.isRequired
};


export default BidTemplate;


//TODO bishtar... ro bayad hatman gozasht ke vaghti mipashim tu safhe yeho ziad nayad!

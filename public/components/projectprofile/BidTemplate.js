import React from 'react';
import AddedBidsMileStone from './AddedBidsMileStone';
import PropTypes from 'prop-types';

const BidTemplate = ({Bid , isLoggedIn , ownerOfProject, number , mileStoneX ,
                         goToCash , priceForCash, cashinModalState, modalCashEnough,
                         acceptBid, profileInfo , deleteBid , prices , goToFreelancerProfile}) => {
    console.log(ownerOfProject , 'ownerOfProject2');
    var bidOfFreelancer = false;
    let Image ;
    if ((Bid.freelancer.profile_picture != null) || (Bid.freelancer.profile_picture != undefined)) {
        Image = Bid.freelancer.profile_picture;
         console.log('Hello', Image);
    }
    else {
        Image = "http://via.placeholder.com/125x125";
        console.log('Hi', Image);
        console.log('Bid.profile_picture', Bid.freelancer.profile_picture);
    }
    if(isLoggedIn) {
        if((profileInfo.first_name == Bid.freelancer.first_name) && (Bid.freelancer.last_name == profileInfo.last_name)){
            bidOfFreelancer = true;
        }
        //console.log(Bid , 'Bid Bid Bid :D');
        if(ownerOfProject){
            return (
                <div>
                    <div className="fl-list">
                        <div className="fl-wrap media">
                            <img className="d-flex  ml-3 rounded-circle" src={Image}
                                 style={ {height:60 , width:60} } onClick={(event)=>{goToFreelancerProfile(Bid.freelancer.username);}}/>
                            <div className="media-body">
                                <a href="#" className="fl-name">{Bid.freelancer.first_name} {Bid.freelancer.last_name} </a>
                                <span className="bidding-price">{Bid.price} تومان</span>
                                <button id="accBiddingBtn" type="submit" className="btn btn-primary float-left btn-rec"
                                        data-toggle="modal" data-target={"#" + (number*10) }>
                                    <i className="fa fa-handshake-o"/>
                                </button>

                                <span className="fl-discript"> <a href="#"
                                                                  className="more">بیشتر...</a></span>
                                <div className="sub-heading">
                                    <a className="tag" href="#">#فارسی_به_انگلیسی</a>
                                    <a className="tag" href="#">#علمی</a>
                                    <a className="tag" href="#">#زیست_شناسی</a>
                                    <a className="tag" href="#">#میکرو_بیولوژی</a>
                                    <a className="tag" href="#">#فوری</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AddedBidsMileStone number_of_milestones={Bid.number_of_milestones}
                                        delivery_duration={Bid.delivery_duration}
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

                    />


                    <div className="divider"/>
                </div>
            )
        }
        else {
            if(bidOfFreelancer){
                return (
                    <div>
                        <div className="fl-list">
                            <div className="fl-wrap media fl-wrap-self-bid">
                                <img className="d-flex  ml-3 rounded-circle" src="http://via.placeholder.com/50x50" width="60"
                                     height="60"/>
                                <div className="media-body ">
                                    <a href="#" className="fl-name">{Bid.freelancer.first_name} {Bid.freelancer.last_name} </a>
                                    <span className="bidding-price">{Bid.price} تومان</span>
                                    <i className="fa fa-trash-o delete-self-bid" aria-hidden="true" onClick={(event)=>{deleteBid(Bid.uuid)}}/>

                                    {/*<button id="accBiddingBtn" type="submit" className="btn btn-primary float-left btn-rec"*/}
                                    {/*data-toggle="modal" data-target="#accBiddingModal">*/}
                                    {/*<i className="fa fa-handshake-o"/>*/}
                                    {/*</button>*/}

                                    <span className="fl-discript">{Bid.Describtion} <a href="#"
                                                                                       className="more">بیشتر...</a></span>
                                    <div className="sub-heading">
                                        <a className="tag" href="#">#فارسی_به_انگلیسی</a>
                                        <a className="tag" href="#">#علمی</a>
                                        <a className="tag" href="#">#زیست_شناسی</a>
                                        <a className="tag" href="#">#میکرو_بیولوژی</a>
                                        <a className="tag" href="#">#فوری</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="divider"/>
                    </div>
                )
            }
            else {


                return (
                    <div>
                        <div className="fl-list">
                            <div className="fl-wrap media">
                                <img className="d-flex  ml-3 rounded-circle" src={Image}
                                     style={ {height:60 , width:60} } onClick={(event)=>{goToFreelancerProfile(Bid.freelancer.username);}}/>
                                <div className="media-body ">
                                    <a href="#"
                                       className="fl-name">{Bid.freelancer.first_name} {Bid.freelancer.last_name} </a>
                                     <span className="bidding-price">{Bid.price} تومان</span>
                                    {/*<button id="accBiddingBtn" type="submit" className="btn btn-primary float-left btn-rec"*/}
                                    {/*data-toggle="modal" data-target="#accBiddingModal">*/}
                                    {/*<i className="fa fa-handshake-o"/>*/}
                                    {/*</button>*/}

                                    <span className="fl-discript">{Bid.Describtion} <a href="#"
                                                                                       className="more">بیشتر...</a></span>
                                    <div className="sub-heading">
                                        <a className="tag" href="#">#فارسی_به_انگلیسی</a>
                                        <a className="tag" href="#">#علمی</a>
                                        <a className="tag" href="#">#زیست_شناسی</a>
                                        <a className="tag" href="#">#میکرو_بیولوژی</a>
                                        <a className="tag" href="#">#فوری</a>
                                    </div>
                                </div>
                            </div>
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
                <div className="fl-wrap media">
                    <img className="d-flex  ml-3 rounded-circle" src={Image}
                         style={ {height:60 , width:60} } onClick={(event)=>{goToFreelancerProfile(Bid.freelancer.username);}}/>
                    <div className="media-body">
                        <a href="#" className="fl-name">{Bid.freelancer.first_name}</a>
                        <span className="badge badge-orange bidding-price">{Bid.price} تومان</span>
                        {/*<button id="accBiddingBtn" type="submit" className="btn btn-primary float-left btn-rec"*/}
                                {/*data-toggle="modal" data-target="#accBiddingModal">*/}
                            {/*<i className="fa fa-handshake-o"/>*/}
                        {/*</button>*/}

                        <span className="fl-discript">{Bid.Describtion} <a href="#"
                                                                           className="more">بیشتر...</a></span>
                        <div className="sub-heading">
                            <a className="tag" href="#">#فارسی_به_انگلیسی</a>
                            <a className="tag" href="#">#علمی</a>
                            <a className="tag" href="#">#زیست_شناسی</a>
                            <a className="tag" href="#">#میکرو_بیولوژی</a>
                            <a className="tag" href="#">#فوری</a>
                        </div>
                    </div>
                </div>
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

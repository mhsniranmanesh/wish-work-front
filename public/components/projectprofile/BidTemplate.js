import React from 'react';
import AddedBidsMileStone from './AddedBidsMileStone';

const BidTemplate = ({Bid , isLoggedIn}) => {
    if(isLoggedIn) {
        return (
            <div>
                <div className="fl-list">
                    <div className="fl-wrap media">
                        <img className="d-flex  ml-3 rounded-circle" src="http://via.placeholder.com/50x50" width="40"
                             height="40"/>
                        <div className="media-body">
                            <a href="#" className="fl-name">{Bid.name}</a>
                            <span className="bidding-price">{Bid.BidPrice}</span>
                            <button id="accBiddingBtn" type="submit" className="btn btn-primary float-left btn-rec"
                                    data-toggle="modal" data-target="#accBiddingModal">
                                <i className="fa fa-handshake-o"/>
                            </button>

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
                <AddedBidsMileStone/>
                <div className="divider"/>
            </div>
        )
    }
    else {
        return(
        <div>
            <div className="fl-list">
                <div className="fl-wrap media">
                    <img className="d-flex  ml-3 rounded-circle" src="http://via.placeholder.com/50x50" width="40"
                         height="40"/>
                    <div className="media-body">
                        <a href="#" className="fl-name">{Bid.name}</a>
                        <span className="bidding-price">{Bid.BidPrice}</span>
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
            <AddedBidsMileStone/>
            <div className="divider"/>
        </div>
        )
    }
};

export default BidTemplate;


//TODO bishtar... ro bayad hatman gozasht ke vaghti mipashim tu safhe yeho ziad nayad!
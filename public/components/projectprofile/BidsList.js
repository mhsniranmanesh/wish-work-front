import React from 'react';
import BidTemplate from './BidTemplate';

const BidsList = ({Bids}) => {
    return(
        <div>
            <h5 className="project-title">
                    فریلنسرها
            </h5>
            <div className="dropdown float-left">
                <button className="btn btn-secondary btn-rec btn-small dropdown-toggle" id="sortingBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                ترتیب
                </button>
                <div className="dropdown-menu dropdown-menu-left" aria-labelledby="sortingBtn">
                <a className="dropdown-item" href="#">قیمت</a>
                <a className="dropdown-item" href="#">امتیاز فریلنسر</a>
                </div>
            </div>
            <div className="divider"/>
            {Bids.map(Bid =>
            <BidTemplate key={Bid.id} Bid={Bid}/>)}
        </div>
    )
};

export default BidsList ;
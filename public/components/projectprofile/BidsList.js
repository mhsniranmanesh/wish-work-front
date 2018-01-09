import React from 'react';
import BidTemplate from './BidTemplate';
import PropTypes from 'prop-types';

const BidsList = ({Bids , isLoggedIn , ownerOfProject , priceForCash , goToCash, cashinModalState, modalCashEnough }) => {
    var BidT = [] ;
    var mileStoneX = {};
    for(var i = 0 ; i < Bids.length ; i++){
        BidT.push(<BidTemplate key={Bids[i].uuid}
                               Bid={Bids[i]}
                               ownerOfProject={ownerOfProject}
                               isLoggedIn={isLoggedIn}
                               number={i}
                               mileStoneX={mileStoneX}
                               priceForCash={priceForCash}
                               goToCash={goToCash}
                               cashinModalState={cashinModalState}
                               modalCashEnough={modalCashEnough}
        />);
        console.log(BidT , 'BidT');
    }
    console.log(cashinModalState,'modal state 2')
        return (
            <div>
                <h5 className="project-title">
                    فریلنسرها
                </h5>
                <div className="dropdown float-left">
                    <button className="btn btn-secondary btn-rec btn-small dropdown-toggle"
                            id="sortingBtn"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                        ترتیب
                    </button>
                    <div className="dropdown-menu dropdown-menu-left" aria-labelledby="sortingBtn">
                        <a className="dropdown-item" href="#">قیمت</a>
                        <a className="dropdown-item" href="#">امتیاز فریلنسر</a>
                    </div>
                </div>
                <div className="divider"/>
                {/*{Bids.map(Bid =>*/}
                    {/*<BidTemplate key={Bid.uuid || Bid.id} Bid={Bid} ownerOfProject={ownerOfProject} isLoggedIn={isLoggedIn}/>)}*/}
                {BidT}
            </div>
        )

};
BidsList.PropTypes ={
  goToCash : PropTypes.func.isRequired,
  modalCashEnough : PropTypes.func.isRequired
};

export default BidsList ;

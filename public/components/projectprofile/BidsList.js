import React from 'react';
import BidTemplate from './BidTemplate';

const BidsList = ({Bids , isLoggedIn , ownerOfProject}) => {
    var BidT = [] ;
    for(var i = 0 ; i < Bids.length ; i++){
        BidT.push(<BidTemplate key={Bids[i].uuid}
                               Bid={Bids[i]}
                               ownerOfProject={ownerOfProject}
                               isLoggedIn={isLoggedIn}
        />);
        console.log(Bids[i] , 'Bids[i]');
    }
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

export default BidsList ;
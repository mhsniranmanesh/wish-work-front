import React from 'react';
class WishCoin extends React.Component {
    render() {
        return (
            <div>
                <div className="content-wrapper py-3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-8 d-block mx-auto">
                                <div className="dash-con dash-new-project con-body mb-4">
                                    <h5>ویش‌کوین‌های من</h5>
                                    <div className="dash-divider"></div>
                                    <div className="row">
                                        <div className="col-sm-4 col-sm-offset-4">
                                            <div className="circle">
                                                <a href="#"><h2>120</h2></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dash-con dash-new-project con-body mb-4 d-flex">
                                    <div className="dash-divider"></div>
                                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                        <div className="db-wrapper">
                                            <div className="db-pricing-eleven bg-danger">
                                                <div className="price bg-danger">
                                                    10
                                                    <span className="sup">ویش‌کوین</span>
                                                </div>
                                                <div className="type bg-dark">
                                                    <sup>$</sup>99
                                                </div>
                                                <div className="pricing-footer">
                                                    <a href="#" className="btn btn-rec btn-light">خرید</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                        <div className="db-wrapper">
                                            <div className="db-pricing-eleven bg-primary popular">
                                                <div className="price bg-primary">
                                                    20
                                                    <span className="sup">ویش‌کوین</span>
                                                </div>
                                                <div className="type bg-dark">
                                                    <sup>$</sup>99
                                                </div>
                                                <div className="pricing-footer">
                                                    <a href="#" className="btn btn-rec btn-light">خرید</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                        <div className="db-wrapper">
                                            <div className="db-pricing-eleven bg-warning">
                                                <div className="price bg-warning">
                                                    30
                                                    <span className="sup">ویش‌کوین</span>
                                                </div>
                                                <div className="type bg-dark">
                                                    <sup>$</sup>99
                                                </div>
                                                <div className="pricing-footer">
                                                    <a href="#" className="btn btn-rec btn-light">خرید</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default WishCoin;
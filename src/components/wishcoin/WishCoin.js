import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class WishCoin extends React.Component {
  constructor(props){
    super(props);
    this.state = {cashEnough: false, cashNotEnough:false, profileInfo:"" ,
        wishCoinSubscription1:false , enoughForSubs1: false , enoughForSubs2:false , enoughForSubs3: false};

    this.modalCashEnough = this.modalCashEnough.bind(this);
    this.modalCashNotEnough = this.modalCashNotEnough.bind(this);
    this.size = this.size.bind(this);
    this.wishCoinSubscription1 = this.wishCoinSubscription1.bind(this);
  };
    wishCoinSubscription1(){
        this.setState({wishCoinSubscription1: true})
    }
    size (obj) {
        let x = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) x++;
        }
        return x;
    };
  modalCashEnough(){
    this.setState({
      cashEnough: !this.state.cashEnough,
    });
  }
    componentWillReceiveProps(nextProps){
        var x = this.size(nextProps.profileInfo);
        if(this.props.profileInfo != nextProps.profileInfo ) {
            console.log(nextProps.profileInfo[0]);
            //inja az halate bler dar biad
            this.setState({profileInfo: Object.assign({}, nextProps.profileInfo[x-1])});
            if(nextProps.profileInfo[x-1].balance >= 5){
                this.setState({enoughForSubs1: true})
            }
            if(nextProps.profileInfo[x-1].balance >= 10){
                this.setState({enoughForSubs2: true})
            }
            if(nextProps.profileInfo[x-1].balance >= 15){
                this.setState({enoughForSubs3: true})
            }
        }
    }
    componentWillMount() {
// aval bler bashe
        var x = this.size(this.props.profileInfo);
        if (x > 0) {
            this.setState({profileInfo: Object.assign({}, this.props.profileInfo[x-1])});
        }
    }

  modalCashNotEnough(){
      this.setState({
        cashNotEnough: !this.state.cashNotEnough,
      });
  }

    render() {
        return (
            <div>
                <div className="content-wrapper py-3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-10 d-block mx-auto">

                                      <div className="dash-con dash-new-project con-body mb-4">
                                          <h5>ویش‌کوین‌های من</h5>
                                          {/*<div className="dash-divider"/>*/}
                                          <div className="row">
                                            <div className="col-sm-3">
                                              {/*<div className="form-header-fontsize">موجودی ویش کوین</div>*/}
                                                <div className="circle">
                                                    <a href="#"><h2 className="form-header-fontsize">{this.state.profileInfo.wish_coins}</h2></a>
                                                </div>
                                            </div>
                                            <div className="col-sm-9 wishcoin-descript">
                                                <h4>ویش کوین چیست؟</h4>
                                                <p>با ویش کوین می توانید از قابلیت های پلتفرم ویش ورک استفاده کنید. این قابلیت ها در حال حاضر شامل شرکت در مناقاصات و ثبت پروژه می باشد</p>
                                            </div>
                                          </div>
                                       </div>

                                <div className="dash-con dash-new-project con-body mb-4">
                                    <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                        <div className="db-wrapper">
                                            <div className="db-pricing-eleven bg-danger">
                                                <div className="price bg-danger">
                                                    50
                                                    <span className="sup">ویش‌کوین</span>
                                                </div>
                                                <div className="type bg-dark">
                                                    <sup>تومان</sup>5000
                                                </div>
                                                <div className="pricing-footer">
                                                    <btn href="#" className="btn btn-rec btn-light" onClick={this.wishCoinSubscription1}>خرید</btn>
                                                    <Modal isOpen={this.state.wishCoinSubscription1} toggle={this.wishCoinSubscription1}>
                                                        {<ModalBody>
                                                            <div className="notenough-modalbody1">
                                                                برای شروع پروژه باید مبلغ <span
                                                                className="notenough-project-price">۲۵۰۰۰۰ تومان</span>
                                                                بپردازید.
                                                            </div>
                                                            <div className="notenough-modalbody2">
                                                                لطفاً موجودی حساب خود را برای انجام این تراکنش افزایش
                                                                دهید.
                                                            </div>
                                                        </ModalBody>
                                                        }
                                                      <ModalFooter>
                                                        <btn onClick={this.modalCashEnough} id="notenough-cashin-button" className="btn btn-rec btn-primary"> افزایش موجودی</btn>
                                                        <btn onClick={this.modalCashEnough} id="notenouhg-cancel-button" className="btn btn-rec btn-secondary">انصراف</btn>
                                                      </ModalFooter>
                                                    </Modal>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                        <div className="db-wrapper">
                                            <div className="db-pricing-eleven bg-primary popular">
                                                <div className="price bg-primary">
                                                    100
                                                    <span className="sup">ویش‌کوین</span>
                                                </div>
                                                <div className="type bg-dark">
                                                    <sup>تومان</sup>10000
                                                </div>
                                                <div className="pricing-footer">
                                                    <btn href="#" className="btn btn-rec btn-light" onClick={this.modalCashNotEnough}>خرید</btn>
                                                    <Modal isOpen={this.state.cashNotEnough} toggle={this.modalCashNotEnough}>
                                                      <ModalBody>
                                                        <div className="enough-modalbody1">
                                                          برای شروع پروژه باید مبلغ <span className="enough-project-price">۲۵۰۰۰۰ تومان</span>  بپردازید.
                                                        </div>
                                                        <div className="enough-modalbody2">
                                                          در صورت تأیید این مبلغ از موجودی شما کسر شده و پروژه به صورت خودکار شروع می شود
                                                        </div>
                                                      </ModalBody>
                                                      <ModalFooter>
                                                        <btn onClick={this.modalCashNotEnough} id="enough-approve-button" className="btn btn-rec btn-primary">تأیید</btn>
                                                        <btn onClick={this.modalCashNotEnough} id="enough-cancel-button" className="btn btn-rec btn-secondary">انصراف</btn>
                                                      </ModalFooter>
                                                    </Modal>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                        <div className="db-wrapper">
                                            <div className="db-pricing-eleven bg-warning">
                                                <div className="price bg-warning">
                                                    150
                                                    <span className="sup">ویش‌کوین</span>
                                                </div>
                                                <div className="type bg-dark">
                                                    <sup>تومان</sup>15000
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
            </div>
        )
    }
}
function mapStateToProps(state , ownProps){

    return{
        profileInfo : state.profileInfo,

    };
}
function mapDispatchToProps(dispatch){
    return{
        //actions2 : bindActionCreators(x , dispatch)
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(WishCoin);

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';


class WishCoin extends React.Component {
  constructor(props){
    super(props);
    this.state = {cashEnough: false, cashNotEnough:false, profileInfo:"" ,
        wishCoinSubscription1:false , enoughForSubs1: false , enoughForSubs2:false , priceForCoin:0,
        enoughForSubs3: false, wishCoinSubscription2:false , wishCoinSubscription3:false};

    this.modalCashEnough = this.modalCashEnough.bind(this);
    this.modalCashNotEnough = this.modalCashNotEnough.bind(this);
    this.size = this.size.bind(this);
    this.wishCoinSubscription1 = this.wishCoinSubscription1.bind(this);
    this.wishCoinSubscription2 = this.wishCoinSubscription2.bind(this);
    this.wishCoinSubscription3 = this.wishCoinSubscription3.bind(this);
    this.buyWishCoinSubscription1 = this.buyWishCoinSubscription1.bind(this);
    this.buyWishCoinSubscription2 = this.buyWishCoinSubscription2.bind(this);
    this.buyWishCoinSubscription3 = this.buyWishCoinSubscription3.bind(this);
    this.goToCashIn = this.goToCashIn.bind(this);
    this.toPersianNum = this.toPersianNum.bind(this);
  };
    toPersianNum( num, dontTrim ) {

        var i = 0,

            dontTrim = dontTrim || false,

            num = dontTrim ? num.toString() : num.toString().trim(),
            len = num.length,

            res = '',
            pos,

            persianNumbers = typeof persianNumber == 'undefined' ?
                ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'] :
                persianNumbers;

        for (; i < len; i++)
            if (( pos = persianNumbers[num.charAt(i)] ))
                res += pos;
            else
                res += num.charAt(i);

        return res;

    }
    goToCashIn(){
        let price = this.state.priceForCoin.toString();
        console.log(price , 'price');
        this.context.router.history.push({
            pathname: '/account/cash',
            search: price
        })
    };
    buyWishCoinSubscription3(){
        this.props.actions.reduceBalanceForWishCoin(3).then(
            () => this.wishCoinSubscription3
        ).catch(err => {throw(err)})
//action
        //TODO action for wishcoin reduce
    }
    buyWishCoinSubscription2(){
        this.props.actions.reduceBalanceForWishCoin(2).then(
            () => this.wishCoinSubscription2
        ).catch(err=>{throw (err)})

//action
    }
    buyWishCoinSubscription1(){
        this.props.actions.reduceBalanceForWishCoin(1).then(
            () => this.wishCoinSubscription1
        ).catch(err=>{throw (err)})

//action
    }
    wishCoinSubscription3(){
        this.setState({priceForCoin: 15});
        this.setState({wishCoinSubscription3: !this.state.wishCoinSubscription3})
    }
    wishCoinSubscription2(){
        this.setState({priceForCoin: 10});
        this.setState({wishCoinSubscription2: !this.state.wishCoinSubscription2})
    }
    wishCoinSubscription1(){
        this.setState({priceForCoin: 5});
        this.setState({wishCoinSubscription1: !this.state.wishCoinSubscription1})
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
            if(this.props.profileInfo[x-1].balance >= 5){
                this.setState({enoughForSubs1: true})
            }
            if(this.props.profileInfo[x-1].balance >= 10){
                this.setState({enoughForSubs2: true})
            }
            if(this.props.profileInfo[x-1].balance >= 15){
                this.setState({enoughForSubs3: true})
            }
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
                                                    <a href="#"><h2 className="form-header-fontsize">{this.toPersianNum(this.state.profileInfo.wish_coins)}</h2></a>
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
                                            <img className="img-responsive wish-coin-sub-image" src={require("../../../static/img/wish cards-04.png")} onClick={this.wishCoinSubscription1}/>
                                                    <Modal isOpen={this.state.wishCoinSubscription1 && this.state.enoughForSubs1} toggle={this.wishCoinSubscription1}>
                                                        <ModalBody>
                                                            <div className="notenough-modalbody1">
                                                                برای خرید باید مبلغ <span
                                                                className="notenough-project-price">۵۰۰۰ تومان </span>
                                                                بپردازید.
                                                            </div>
                                                            <div className="notenough-modalbody2">
                                                                شما موجودی کافی دارید، برای خرید بر روی تایید کلیک کنید
                                                            </div>
                                                        </ModalBody>

                                                      <ModalFooter>
                                                        <btn onClick={this.buyWishCoinSubscription1} id="notenough-cashin-button" className="btn btn-rec btn-primary">تایید</btn>
                                                        <btn onClick={this.wishCoinSubscription1} id="notenouhg-cancel-button" className="btn btn-rec btn-secondary">انصراف</btn>
                                                      </ModalFooter>
                                                    </Modal>
                                            <Modal isOpen={this.state.wishCoinSubscription1 && (!this.state.enoughForSubs1)} toggle={this.wishCoinSubscription1}>
                                                <ModalBody>
                                                    <div className="notenough-modalbody1">
                                                        برای خرید باید مبلغ <span
                                                        className="notenough-project-price">۵۰۰۰ تومان </span>
                                                        بپردازید.
                                                    </div>
                                                    <div className="notenough-modalbody2">
                                                        شما موجودی کافی ندارید، برای افزایش موجودی بر روی افزایش موجودی کلیک کنید
                                                    </div>
                                                </ModalBody>

                                                <ModalFooter>
                                                    <btn onClick={this.goToCashIn} id="notenough-cashin-button" className="btn btn-rec btn-primary">افزایش موجودی</btn>
                                                    <btn onClick={this.wishCoinSubscription1} id="notenouhg-cancel-button" className="btn btn-rec btn-secondary">انصراف</btn>
                                                </ModalFooter>
                                            </Modal>

                                                {/*</div>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                        <div className="db-wrapper">
                                            <br/>
                                            <img className="img-responsive wish-coin-sub-image" src={require("../../../static/img/wish cards-03.png")} onClick={this.wishCoinSubscription2}/>
                                            <Modal isOpen={this.state.wishCoinSubscription2 && this.state.enoughForSubs2} toggle={this.wishCoinSubscription2}>
                                                <ModalBody>
                                                    <div className="notenough-modalbody1">
                                                        برای خرید باید مبلغ <span
                                                        className="notenough-project-price">۱۰۰۰۰ تومان </span>
                                                        بپردازید.
                                                    </div>
                                                    <div className="notenough-modalbody2">
                                                        شما موجودی کافی دارید، برای خرید بر روی تایید کلیک کنید
                                                    </div>
                                                </ModalBody>

                                                <ModalFooter>
                                                    <btn onClick={this.buyWishCoinSubscription2} id="notenough-cashin-button" className="btn btn-rec btn-primary">تایید</btn>
                                                    <btn onClick={this.wishCoinSubscription2} id="notenouhg-cancel-button" className="btn btn-rec btn-secondary">انصراف</btn>
                                                </ModalFooter>
                                            </Modal>
                                            <Modal isOpen={this.state.wishCoinSubscription2 && (!this.state.enoughForSubs2)} toggle={this.wishCoinSubscription2}>
                                                <ModalBody>
                                                    <div className="notenough-modalbody1">
                                                        برای خرید باید مبلغ <span className="notenough-project-price">۱۰۰۰۰ تومان </span>بپردازید.
                                                    </div>
                                                    <div className="notenough-modalbody2">
                                                        شما موجودی کافی ندارید، برای افزایش موجودی بر روی افزایش موجودی کلیک کنید
                                                    </div>
                                                </ModalBody>

                                                <ModalFooter>
                                                    <btn onClick={this.goToCashIn} id="notenough-cashin-button" className="btn btn-rec btn-primary">افزایش موجودی</btn>
                                                    <btn onClick={this.wishCoinSubscription2} id="notenouhg-cancel-button" className="btn btn-rec btn-secondary">انصراف</btn>
                                                </ModalFooter>
                                            </Modal>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                        <div className="db-wrapper">
                                            <img className="img-responsive wish-coin-sub-image" src={require("../../../static/img/wish cards-02.png")} onClick={this.wishCoinSubscription3}/>
                                            <Modal isOpen={this.state.wishCoinSubscription3 && this.state.enoughForSubs3} toggle={this.wishCoinSubscription3}>
                                                <ModalBody>
                                                    <div className="notenough-modalbody1">
                                                        برای خرید باید مبلغ <span
                                                        className="notenough-project-price">۱۵۰۰۰ تومان </span>
                                                        بپردازید.
                                                    </div>
                                                    <div className="notenough-modalbody2">
                                                        شما موجودی کافی دارید، برای خرید بر روی تایید کلیک کنید
                                                    </div>
                                                </ModalBody>

                                                <ModalFooter>
                                                    <btn onClick={this.buyWishCoinSubscription3} id="notenough-cashin-button" className="btn btn-rec btn-primary">تایید</btn>
                                                    <btn onClick={this.wishCoinSubscription3} id="notenouhg-cancel-button" className="btn btn-rec btn-secondary">انصراف</btn>
                                                </ModalFooter>
                                            </Modal>
                                            <Modal isOpen={this.state.wishCoinSubscription3 && (!this.state.enoughForSubs3)} toggle={this.wishCoinSubscription3}>
                                                <ModalBody>
                                                    <div className="notenough-modalbody1">
                                                        برای خرید باید مبلغ <span className="notenough-project-price">۱۵۰۰۰ تومان </span>بپردازید.
                                                    </div>
                                                    <div className="notenough-modalbody2">
                                                        شما موجودی کافی ندارید، برای افزایش موجودی بر روی افزایش موجودی کلیک کنید
                                                    </div>
                                                </ModalBody>

                                                <ModalFooter>
                                                    <btn onClick={this.goToCashIn} id="notenough-cashin-button" className="btn btn-rec btn-primary">افزایش موجودی</btn>
                                                    <btn onClick={this.wishCoinSubscription3} id="notenouhg-cancel-button" className="btn btn-rec btn-secondary">انصراف</btn>
                                                </ModalFooter>
                                            </Modal>
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
WishCoin.contextTypes = {
    router: PropTypes.object.isRequired
};

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

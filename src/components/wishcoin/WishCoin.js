import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class WishCoin extends React.Component {
  constructor(props){
    super(props);
    this.state = {cashEnough: false, cashNotEnough:false, }

    this.modalCashEnough = this.modalCashEnough.bind(this);
    this.modalCashNotEnough = this.modalCashNotEnough.bind(this);
  };

  modalCashEnough(){
    this.setState({
      cashEnough: !this.state.cashEnough,
    });
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
                                                    <btn href="#" className="btn btn-rec btn-light" onClick={this.modalCashEnough}>خرید</btn>
                                                    <Modal isOpen={this.state.cashEnough} toggle={this.modalCashEnough}>
                                                      <ModalBody>
                                                        <div className="notenough-modalbody1">
                                                        برای شروع پروژه باید مبلغ <span className="notenough-project-price">۲۵۰۰۰۰ تومان</span>  بپردازید.
                                                        </div>
                                                        <div className="notenough-modalbody2">
                                                          لطفاً موجودی حساب خود را برای انجام این تراکنش افزایش دهید.
                                                        </div>
                                                      </ModalBody>
                                                      <ModalFooter>
                                                        <btn onClick={this.modalCashEnough} id="notenough-cashin-button" className="btn btn-rec btn-primary"> افزایش موجودی</btn>
                                                        <btn onClick={this.modalCashEnough} id="notenouhg-cancel-button" className="btn btn-rec btn-secondary">انصراف</btn>
                                                      </ModalFooter>
                                                    </Modal>
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

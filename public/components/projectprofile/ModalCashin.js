import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Button} from 'reactstrap';
import PropTypes from 'prop-types';

const ModalCashin = (props) => {

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

}

export default ModalCashin;

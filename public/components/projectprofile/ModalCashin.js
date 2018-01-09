import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

const ModalCashin = (props) => {

console.log(props.cashinModalState,'modal cash in TorF')

  return(

    <Modal isOpen={props.cashinModalState} toggle={props.modalCashEnough}>
      <ModalBody>
        <div className="enough-modalbody1">
          برای شروع پروژه باید مبلغ <span className="enough-project-price">۲۵۰۰۰۰ تومان</span>  بپردازید.
        </div>
        <div className="enough-modalbody2">
          در صورت تأیید این مبلغ از موجودی شما کسر شده و پروژه به صورت خودکار شروع می شود
        </div>
      </ModalBody>
      <ModalFooter>
        <btn onClick={props.modalCashEnough} id="enough-approve-button" className="btn btn-rec btn-primary">تأیید</btn>
        <btn onClick={props.modalCashEnough} id="enough-cancel-button" className="btn btn-rec btn-secondary">انصراف</btn>
      </ModalFooter>
    </Modal>
  )



};

ModalCashin.PropTypes ={
  modalCashEnough: PropTypes.func.isRequired
}

export default ModalCashin;

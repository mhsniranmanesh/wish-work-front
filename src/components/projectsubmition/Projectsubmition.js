import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectSubmit from '../../actions/projectSubmit.js';
import Error from './Errors';
import {Button , Modal , ModalHeader , ModalBody , ModalFooter , Form, FormGroup, Label, Input, FormText , Row , Col} from 'reactstrap';
import Select from 'react-select';
import SelectPicker from 'react-select-picker';
// import SelectPicker from 'react-select-picker';


class Projectsubmition extends React.Component{
    constructor(props , context){
        super(props);

        this.state={ modal: false , translationFatherTag:"",translationFrom:"", translationTo:"" ,projectTitle:"" , projectDescription:"", submitProjectPrice:"" , submitProjectTime:"" , requiredTags:[] , response:[],
                     message:"" ,showError : false,
        };

        this.toggle = this.toggle.bind(this);
        this.translationToState = this.translationToState.bind(this);
        this.translationFromState = this.translationFromState.bind(this);
        this.projectTitleState = this.projectTitleState.bind(this);
        this.projectDescriptionState = this.projectDescriptionState.bind(this);
        this.submitProjectTimeState = this.submitProjectTimeState.bind(this);
        this.submitProjectPriceState = this.submitProjectPriceState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.translationFatherTagState = this.translationFatherTagState.bind(this);
        this.dragDrop = this.dragDrop.bind(this);
    }

    toggle(){
      this.setState({
      modal: !this.state.modal
      });
    }
    dragDrop(event){
        this.readFile(event);
        event.target.value = null;
    }

    translationFatherTagState(event){
        this.setState({translationFatherTag: event.target.value});
    }
    translationFromState(event){
        this.setState({translationFrom: event.target.value});
    }
    translationToState(event){
        this.setState({translationTo: event.target.value});
    }
    projectDescriptionState(event){
        this.setState({projectDescription: event.target.value});
    }
    submitProjectTimeState(event){
        this.setState({submitProjectTime: event.target.value});
        console.log('state:' ,this.state);
        console.log('length:' , this.state.translationFatherTag.length);
    }
    submitProjectPriceState(event){
        this.setState({submitProjectPrice: event.target.value})
    }
    projectTitleState(event){
        this.setState({projectTitle: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
            console.log('state is:' , this.state);
        if(!this.state.projectTitle.length){
            this.setState({showError: true});
            this.setState({message:"لطفا عنوان پروژه ی خود را وارد کنید!"});
        }
        else if(!this.state.translationFatherTag.length){
            //farghesh ba this.state = hamun moghe avaz mikone!
            this.setState({showError : true});
            this.setState({message:"لطفا زمینه ی ترجمه ی خود را وارد کنید!"});
        }
        else if(!this.state.projectDescription.length){
            this.setState({showError: true});
            this.setState({message:"لطفا توضیحاتی در رابطه با پروژه ی خود ارائه دهید."});
        }
        else if(!this.state.translationTo.length){
            this.setState({showError: true});
            this.setState({message:"لطفا زبان مبدا ترجمه ی خود را مشخص کنید."})
        }
        else if(!this.state.translationFrom.length){
            this.setState({showError: true});
            this.setState({message:"لطفا زبان مقصد خود را مشخص کنید"})
        }
        else{
          toggle();
        }

        // else if(!this.state.translationTo.length){
        //     this.setState({showError: true});
        //     this
        // }
        //this.porps.actions.submitProject(this.state);
        // if(this.state.response){
        // this.context.router.history.push('/')
        //}
        //else if(this.state.response === "sth"){
        //error show
    }

  render(){
        //const showError = this.state.translationFatherTagError ;
        // const showErrorProjectTitle = this.state.projectTitleError;
      const showError = this.state.showError;
    return(
      <div>
      <div className="content-wrapper py-3">
      <div className="container-fluid">
          <div className="row">
              <div className="col-sm-6 d-block mx-auto">
                  <div className="dash-con dash-new-project con-body mb-4">
                      <h5>ایجاد پروژه جدید</h5>
                      <errorFatherTag/>
                      <div className="dash-divider"/>
                      <form>
                        <div className="form-group">
                          <input type="text" className="form-control" id="" placeholder="عنوان پروژه" value={this.state.projectTitle} onChange={this.projectTitleState}/>
                        </div>
                        <div className="input-group">
                          <FormGroup tag="fieldset">
                              <legend>زمینه ترجمه تان را انتخاب کنید</legend>
                                <Row>
                                  <Col>
                                    <FormGroup check>
                                      <Label check>
                                        <Input className="btn-radio btn-success" type="radio" name="radio1" />
                                      </Label>
                                        عمومی
                                    </FormGroup>
                                  </Col>
                                  <Col>
                                    <FormGroup check>
                                      <Label check>
                                        <Input type="radio" name="radio1" />
                                      </Label>
                                      فنی
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <FormGroup check>
                                      <Label check>
                                        <Input type="radio" name="radio1" />
                                      </Label>
                                      پزشکی
                                    </FormGroup>
                                  </Col>
                                  <Col>
                                    <FormGroup check>
                                      <Label check>
                                        <Input type="radio" name="radio1" />
                                      </Label>
                                        حقوقی
                                    </FormGroup>
                                  </Col>
                                </Row>
                            </FormGroup>
                        </div>
                        <Row>
                          <Col>
                            <div className="input-group">
                                {/* <select className="selectpicker" data-style="form-control" id="" title="از زبان ..." value={this.state.translationFrom} onChange={this.translationFromState}>
                                    <option>فارسی</option>
                                    <option>انگلیسی</option>
                                    <option>فرانسوی</option>
                                    <option>عربی</option>
                                    <option>اسپانیایی</option>
                                </select> */}
                                <Form>
                                    {/* <Label for="fromLanguage">از زبان ...</Label> */}
                                    <Input type="select" name="select" id="fromLanguage" value={this.state.translationFrom} onChange={this.translationFromState}>
                                      <option>فارسی</option>
                                      <option>انگلیسی</option>
                                      <option>فرانسوی</option>
                                      <option>عربی</option>
                                      <option>اسپانیایی</option>
                                    </Input>
                                  </Form>
                              </div>
                            </Col>
                            <Col>
                              <div className="input-group">
                                {/* <select className="selectpicker" data-style="form-control" id="" title="به زبان ..." value={this.state.translationTo} onChange={this.translationToState}>
                                    <option>فارسی</option>
                                    <option>انگلیسی</option>
                                    <option>فرانسوی</option>
                                    <option>عربی</option>
                                    <option>اسپانیایی</option>
                                </select> */}
                                <Form>

                                    {/* <Label for="toLanguage"></Label> */}
                                    <Input type="select" name="select" id="toLanguage" value={this.state.translationTo} onChange={this.translationToState}>
                                      <option>به زبان ...</option>
                                      <option>فارسی</option>
                                      <option>انگلیسی</option>
                                      <option>فرانسوی</option>
                                      <option>عربی</option>
                                      <option>اسپانیایی</option>
                                    </Input>
                                  </Form>
                            </div>
                          </Col>
                        </Row>
                        <div className="form-group">
                          <textarea type="text" className="form-control" id="" placeholder="توضیحاتی را در مورد پروژه بنویسید." value={this.state.projectDescription} onChange={this.projectDescriptionState}/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" id="" placeholder="مهارت های لازم فریلنسر." />
                          <button type="submit" className="btn btn-success btn-rec">
                            <i className="fa fa-plus"/>افزودن مهارت
                          </button>
                          <span className="sub-heading mt-2">
                            <a className="tag" href="#">علمی</a>
                            <a className="tag" href="#">زیست شناسی</a>
                            <a className="tag" href="#">میکرو بیولوژی</a>
                            <a className="tag" href="#">فوری</a>
                            <a className="tag" href="#">علمی</a>
                            <a className="tag" href="#">زیست شناسی</a>
                            <a className="tag" href="#">میکرو بیولوژی</a>
                          </span>
                        </div>

            <div className="form-group drag-drop mt-2 mb-4">
                <label className="col-form-label">فایل های مربوط به پروژه را آپلود کنید.</label>
                <label className="sub-label"><i className="fa fa-quote-left" aria-hidden="true"/> برای این منظور تنها کافیست که فایل را بگیرید و در محل زیر رها کنید.</label>
                <input type="file" className="form-control-file" id="inputFile" onChange={this.dragDrop} data-title="فایل را بگیرید و اینجا رها کنید." multiple="" accept=
                    "application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*"/>
              </div>

                        <div className="form-group">
                          <label htmlFor="" className="col-form-label">
                              بودجه ی خود را مشخص کنید.
                          </label>
                          <input type="text" className="form-control" id="priceInput" value={this.state.submitProjectPrice} onChange={this.submitProjectPriceState}/>
                          <div id="price-range"/>
                          <span className="price-msg">
                              <i className="fa fa-exclamation-triangle" aria-hidden="true"/>
                              نارنجی: بودجه تعیین شده به نسبت ارزش پروژه کمتر است! ویش ورک پیشنهاد می کند که برای بالا بردن شانس انجام پروژه ی با کیفیت، کف بودجه را افزایش دهید.
                          </span>
                        </div>
                        <div className="form-group">
                          <label htmlFor="" className="col-form-label">
                              زمان دلخواه خود را مشخص کنید.
                          </label>
                          <input type="text" className="form-control" id="timeInput" value={this.state.submitProjectTime} onChange={this.submitProjectTimeState}/>
                          <div id="time-range"/>
                          <span className="time-msg">
                              <i className="fa fa-exclamation-triangle" aria-hidden="true"/>
                              آبی: مقدار زمان طلب شده به نسبت اندازه ی پروژه مطلوب می باشد!
                          </span>
                        </div>
                        {/* <button type="submit" className="btn btn-primary btn-rec" >
                          ایجاد پروژه
                        </button> */}
                          {/*error show */}
                          {/*{this.state.response ? <Error/> : (null || true)}*/}
                          {showError ? <Error message={this.state.message}/> : (true)}
                          <div>
                            <Button color="primary" className = "btn btn-rec btn-primary" onClick={this.handleSubmit}>ایجاد پروژه</Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                              <ModalHeader toggle={this.toggle}>نحوه نمایش پروژه</ModalHeader>
                              <ModalBody>
                                <span className="prices">
                                  <div>
                                    <svg width="5px" height="8vh">
                                      <rect className="price-good" width="5px" height="8vh" />
                                    </svg>
                                  </div>
                                  <div>
                                    <svg width="5px" height="8vh">
                                      <rect className="price-low" width="5px" height="8vh"/>
                                    </svg>
                                  </div>
                                </span>
                                <div>
                                    <a href="#">
                                        <h6><strong>متن آکادمیک فوری، در حوزه ی زیست شناسی</strong></h6>
                                    </a>
                                    <span className="sub-heading">
                                        <a className="tag" href="#">#فارسی_به_انگلیسی</a>
                                        <a className="tag" href="#">#علمی</a>
                                        <a className="tag" href="#">#زیست_شناسی</a>
                                        <a className="tag" href="#">#میکرو_بیولوژی</a>
                                        <a className="tag" href="#">#فوری</a>
                                      </span>
                                    <span className="sub-heading">
                                          <i className="fa fa-user"></i> <a href="#">4/5</a>
                                          <i className="fa fa-usd"></i> 2,000,000 تومان
                                          <i className="fa fa-clock-o"></i> دو ساعت قبل
                                      </span>
                                </div>
                              </ModalBody>
                              <ModalFooter>
                                <Button color="secondary" className = "btn btn-secondary btn-rec" onClick={this.toggle}>اصلاح</Button>
                                <Button color="primary" className = "btn btn-primary btn-rec" onClick={this.toggle}>تأیید</Button>{' '}
                              </ModalFooter>
                            </Modal>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
      </div>
    );
}
}

Projectsubmition.contextTypes = {
    router: PropTypes.object.isRequired
};

Projectsubmition.PropTypes = {
    actions : PropTypes.object.isRequired
};

function mapStateToProps(state , ownProps){
    return{
    };
}
function mapDispatchToProps(dispatch){
    return {
            actions: bindActionCreators(projectSubmit, dispatch)
    };
}

export default connect(mapStateToProps , mapDispatchToProps)(Projectsubmition);

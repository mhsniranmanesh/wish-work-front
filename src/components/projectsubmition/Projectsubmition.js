import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectSubmit from '../../actions/projectSubmit.js';
import Error from './Errors';


class Projectsubmition extends React.Component{
    constructor(props , context){
        super(props);

        this.state={ translationFatherTag:"",translationFrom:"", translationTo:"" ,projectTitle:"" , projectDescription:"", submitProjectPrice:"" , submitProjectTime:"" , requiredTags:[] , response:[],
                     message:"" ,showError : false,
        };

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
        else {
            this.context.router.history.push('/');
        }
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
                      <form className="" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <input type="text" className="form-control" id="" placeholder="عنوان پروژه" value={this.state.projectTitle} onChange={this.projectTitleState}/>
                        </div>
                        <div className="input-group">
                            <select className="selectpicker" data-style="form-control" id="" title="زمینه ترجمه را انتخاب کنید." value={this.state.translationFatherTag} onChange={this.translationFatherTagState}>

                                <option>عمومی</option>
                                <option>حقوقی</option>
                                <option>پزشکی</option>
                                <option>فنی</option>
                            </select>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="input-group">
                                <select className="selectpicker" data-style="form-control" id="" title="از زبان ..." value={this.state.translationFrom} onChange={this.translationFromState}>
                                    <option>فارسی</option>
                                    <option>انگلیسی</option>
                                    <option>فرانسوی</option>
                                    <option>عربی</option>
                                    <option>اسپانیایی</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="input-group">
                                <select className="selectpicker" data-style="form-control" id="" title="به زبان ..." value={this.state.translationTo} onChange={this.translationToState}>
                                    <option>فارسی</option>
                                    <option>انگلیسی</option>
                                    <option>فرانسوی</option>
                                    <option>عربی</option>
                                    <option>اسپانیایی</option>
                                </select>
                            </div>
                          </div>
                        </div>
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
                        <button type="submit" className="btn btn-primary btn-rec" >
                          ایجاد پروژه
                        </button>
                          {/*error show */}
                          {/*{this.state.response ? <Error/> : (null || true)}*/}
                          {showError ? <Error message={this.state.message}/> : (true)}
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

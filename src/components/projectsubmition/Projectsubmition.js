import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectSubmit from '../../actions/projectSubmit.js';
// import Error Component for showing ;)


class Projectsubmition extends React.Component{
    constructor(props , context){
        super(props);

        this.state={ translationFatherTag:"",translationFrom:"", translationTo:"" ,projectTitle:"" , projectDescription:"", submitProjectPrice:"" , submitProjectTime:"" , requiredTags:[] , response:[]};

        this.projectTitleState = this.projectTitleState.bind(this);
        this.projectDescriptionState = this.projectDescriptionState.bind(this);
        this.submitProjectTimeState = this.submitProjectTimeState.bind(this);
        this.submitProjectPriceState = this.submitProjectPriceState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.translationFatherTagState = this.translationFatherTagState.bind(this);
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
    }
    submitProjectPriceState(event){
        this.setState({submitProjectPrice: event.target.value})
    }
    projectTitleState(event){
        this.setState({projectTitle: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        this.porps.actions.submitProject(this.state);
        // if(this.state.response){
        // this.context.router.history.push('/')
        //}
        //else if(this.state.response === "sth"){
        //error show
        this.context.router.history.push('/');
    }

  render(){
    return(
      <div>
      <div className="content-wrapper py-3">
      <div className="container-fluid">
          <div className="row">
              <div className="col-sm-6 d-block mx-auto">
                  <div className="dash-con dash-new-project con-body mb-4">
                      <h5>ایجاد پروژه جدید</h5>
                      <div className="dash-divider"/>
                      <form className="" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <input type="text" className="form-control" id="" placeholder="عنوان پروژه" value={this.state.projectTitle} onChange={this.projectTitleState}/>
                        </div>
                        <div className="input-group">
                            <select className="selectpicker" data-style="form-control" id="" title="زمینه ترجمه را انتخاب کنید." value={this.state.translationFatherTag} onChange={this.translationFatherTagState}>

                                <option>پزشکی</option>
                                <option>ادبی</option>
                                <option>سیاسی</option>
                                <option>ریاضی</option>
                                <option>شیمی</option>
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
                <input type="file" className="form-control-file" id="inputFile" onChange="dragDrop(this)" data-title="فایل را بگیرید و اینجا رها کنید." multiple=""></input>
              </div>

                        <div className="form-group">
                          <label htmlFor="" className="col-form-label">
                              بودجه ی خود را مشخص کنید.
                          </label>
                          <input type="text" className="form-control" id="priceInput" value={this.state.submitProjectPrice} onChange={this.submitProjectPriceState}/>
                          <div id="price-range"></div>
                          <span className="price-msg">
                              <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                              نارنجی: بودجه تعیین شده به نسبت ارزش پروژه کمتر است! ویش ورک پیشنهاد می کند که برای بالا بردن شانس انجام پروژه ی با کیفیت، کف بودجه را افزایش دهید.
                          </span>
                        </div>
                        <div className="form-group">
                          <label htmlFor="" className="col-form-label">
                              زمان دلخواه خود را مشخص کنید.
                          </label>
                          <input type="text" className="form-control" id="timeInput" value={this.state.submitProjectTime} onChange={this.submitProjectTimeState}/>
                          <div id="time-range"></div>
                          <span className="time-msg">
                              <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                              آبی: مقدار زمان طلب شده به نسبت اندازه ی پروژه مطلوب می باشد!
                          </span>
                        </div>
                        <button type="submit" className="btn btn-primary btn-rec" >
                          ایجاد پروژه
                        </button>
                          {/*error show */}
                          {/*{this.state.response ? <Error/> : (null || true)}*/}
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

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as profileInfo from '../../actions/profileInfo.js';
import {Input,Row,Col,InputGroupAddon , Button} from 'reactstrap';
import Select from 'react-select';
const LANGUAGES = require('./Datas/Languages.js');
import deepEqual from 'deep-equal';

class Profileinfo extends React.Component{
    constructor(props){
        super(props);
        this.state = { bioReadOnly : true , jobReadOnly : true , degreeReadOnly : true, universityReadOnly : true , profileInfo:"" , profilepicture: "" ,
             selectValueTF :"" , selectValueTT : "" , saving : false };

        // bio: props.profileInfo.bio , job:props.profileInfo.job , degree:props.profileInfo.degree,
        //     university:props.profileInfo.university,

        this.updateValueTF = this.updateValueTF.bind(this);
        this.updateValueTT = this.updateValueTT.bind(this);
        this.redirect = this.redirect.bind(this);
         //this.state.bio = this.props.profileInfo.bio;
        // this.state.job = this.props.profileInfo.job;
        // this.state.profile_picture = this.props.profile_picture ;
        // this.state.degree = this.props.profileInfo.degree;
        // this.state.university = this.props.profileInfo.university;
        this.changeBioInput = this.changeBioInput.bind(this);
        this.changeJobInput = this.changeJobInput.bind(this);
        this.changeDegreeInput = this.changeDegreeInput.bind(this);
        this.changeUniversityInput = this.changeUniversityInput.bind(this);
        this.changeBioOnChange = this.changeBioOnChange.bind(this);
        this.changeJobOnChange = this.changeJobOnChange.bind(this);
        this.changeDegreeOnChange = this.changeDegreeOnChange.bind(this);
        this.changeUniversityOnChange = this.changeUniversityOnChange.bind(this);
        this.submitChanges = this.submitChanges.bind(this);
        this.size = this.size.bind(this);
    }
    updateValueTT (newValue) {
    	this.setState({
    		selectValueTT: newValue
  		});
	  }
    updateValueTF(newValue) {
      this.setState({
        selectValueTF: newValue
      });
    }
    changeBioInput(){
        this.setState(prevState => ({bioReadOnly: !prevState.bioReadOnly}))

    };
    changeJobInput(){
        this.setState(prevState => ({jobReadOnly: !prevState.jobReadOnly}))
    }
    changeDegreeInput(){
        this.setState(prevState => ({degreeReadOnly : !prevState.degreeReadOnly}) )
    }
    changeUniversityInput(){
        this.setState(prevState => ({universityReadOnly : !prevState.universityReadOnly}))
    }
    changeBioOnChange(event) {
        let profileInfo = Object.assign({} , this.state.profileInfo);
        profileInfo.bio = event.target.value;
        this.setState({profileInfo});
    }
    changeJobOnChange(event){
        let profileInfo = Object.assign({} , this.state.profileInfo);
        profileInfo.job = event.target.value;
        this.setState({profileInfo});

    }
    changeDegreeOnChange(event){
        let profileInfo = Object.assign({} , this.state.profileInfo);
        profileInfo.degree = event.target.value;
        this.setState({profileInfo});

    }
    changeUniversityOnChange(event){
        let profileInfo = Object.assign({} , this.state.profileInfo);
        profileInfo.university = event.target.value;
        this.setState({profileInfo});

    }

    // shouldComponentUpdate(nextProps){
    //     return deepEqual( nextProps , this.props)
    // }

    submitChanges(){
        //action from redux

        var sendData = {
            bio: this.state.profileInfo.bio,
            degree: this.state.profileInfo.degree,
            email: this.state.profileInfo.email,
            job: this.state.profileInfo.job,
            title: this.state.profileInfo.title,
            university: this.state.profileInfo.university,
            // client_rate: this.state.profileInfo.client_rate,
            // client_score: this.state.profileInfo.client_score,
            // date_joined: this.state.profileInfo.date_joined,
            // first_name: this.state.profileInfo.first_name,
            // freelancer_rate: this.state.profileInfo.freelancer_rate,
            // freelancer_score: this.state.profileInfo.freelancer_score,
            // is_active: this.state.profileInfo.is_active,
            // is_email_verified: this.state.profileInfo.is_email_verified,
            // last_name: this.state.profileInfo.last_name,
            // phone_number: this.state.profileInfo.phone_number,
            // profile_picture: this.state.profileInfo.profile_picture,
            // username: this.state.profileInfo.username,
            // uuid: this.state.profileInfo.uuid,
            // wish_coins: this.state.profileInfo.wish_coins
        };
        console.log(this.state.profileInfo);
        console.log(sendData);
        this.setState({bioReadOnly : true , jobReadOnly : true , degreeReadOnly: true , universityReadOnly: true});
        this.props.actions.updateInformations(sendData).then(
            () => this.redirect())
            .catch(error => {
                console.log(error);
                this.setState({saving: false});
            });
    }

    redirect() {
        this.setState({saving: true});
        this.context.router.history.push('/dashboard');
    }
    size (obj) {
        let x = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) x++;
        }
        return x;
    };
    //age safhe ro refresh konim doros ejra mishe vali moghe taghir mirine tu khodesh!!!!!!!
    componentWillReceiveProps(nextProps) {
        console.log('nextProps' ,nextProps);
        var size = this.size(nextProps.profileInfo);
        console.log("size of profileInfo in nextProps" , size);
        if (this.props.profileInfo[size-1] != nextProps.profileInfo[size-1]) {
            console.log('nextProps.profileInfo[size-1]' ,nextProps.profileInfo[size-1]);
            this.setState({profileInfo: nextProps.profileInfo[size-1]});
            this.setState({profilepicture: nextProps.profileInfo[0].profile_picture})
            console.log('nextProps.profileInfo',nextProps.profileInfo);
            console.log('PRofileInfo' ,this.state.profileInfo);
        }
    }



    componentWillMount(){
        //console.log('componentWillMount PRofileInfo' , this.state.profileInfo);
        var x = this.size(this.props.profileInfo);
        if(x > 0) {
            this.setState({profileInfo: this.props.profileInfo[x - 1]});
            console.log('componentWillMount PRofileInfo' , this.state.profileInfo);
        }
    }
    // componentWillReceiveProps(nextProps){
    //         console.log(this.props);
    //         console.log(nextProps);
    //     if(this.props != nextProps){
    //         this.setState({job : nextProps.job});
    //         console.log(nextProps);
    //     }
    // }
    render(){
        var options1 = LANGUAGES.AVAILABLETOLANGUAGES;
    var options2 = LANGUAGES.AVAILABLEFROMLANGUAGES;
    return (
      <div>
      <div className="content-wrapper py-3">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 d-block mx-auto">
                    <div className="dash-con dash-profile-info con-body mb-4">

                        <span className="projectinfo">
                          <i className="fa fa-camera" aria-hidden="true"/>
                        </span>
                        <span className="projectinfo">
                          <h5 style={{display:'inline'}}>تغییر عکس پروفایل</h5>
                        </span>

                        <div className="dash-divider"/>
                        <form className="">
                            <div className="media">
                                <a href="#" className="">
                                    <img className="rounded-circle d-flex ml-3" src={this.state.profilepicture}  style={ {height:125 , width:125} }/>
                                    <i className="fa fa-camera"/>
                                </a>
                                <div className="media-body">
                                    <label htmlFor="" className="col-form-label">
                                            برای تغییر عکس پروفایل، روی عکس خود کلیک کنید.
                                    </label>
                                    <label htmlFor="" className="col-form-label sub-label">
                                        <span className="quote justify">
                                          <i className="fa fa-quote-left" aria-hidden="true"/> فریلنسر هایی که برای خود عکسی با ظاهری دوستانه و حرفه ای انتخاب می کنند، تا 5 برابر شانس بیشتری برای پروژه انجام دادن دارند.
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-rec">
                                <i className="fa fa-check"/>آپلود عکس
                            </button>
                        </form>
                    </div>
                    <div className="dash-con dash-profile-info con-body mb-4">

                      <span className="projectinfo">
                        <i className="fa fa-user" aria-hidden="true"/>
                        <h5 style={{display:'inline'}}>تغییر اطلاعات شخصی</h5>
                      </span>

                        <div className="dash-divider"/>
                        <form>
                            <div id="" className="form-group">
                                <label htmlFor="" className="col-form-label">
                                  <span className="point">

                                    <i className="fa fa-exclamation point" aria-hidden="true"/>
                                      برای تغییر هر مورد روی آن دوبار کلیک کنید.

                                  </span>
                                </label>
                                <div>
                                <label htmlFor="" className="col-form-label">
                                    عنوان حرفه ای کوتاه
                                </label>
                              </div>
                                <input type="text" className="form-control form-control-danger" id="" value="مترجم رسمی فارسی به انگلیسی" readOnly />
                            </div>
                            <div className="form-group">
                              <div>
                                <label htmlFor="" className="col-form-label">
                                    توضیح کامل در مورد من.
                                </label>
                              </div>
                                <Input type="textarea" className="form-control" id="" value={this.state.profileInfo.bio || ''} onDoubleClick={this.changeBioInput} onChange={this.changeBioOnChange} readOnly={this.state.bioReadOnly}/>
                            </div>


                            <div className="form-group">
                                <label htmlFor="" className="col-form-label">
                                    شغل
                                </label>
                                <Input className="form-control" id="" value={this.state.profileInfo.job || ''} onDoubleClick={this.changeJobInput} onChange={this.changeJobOnChange} readOnly={this.state.jobReadOnly}/>
                                <label htmlFor="" className="col-form-label">
                                    مدرک تحصیلی
                                </label>
                                <Input className="form-control" id="" value={this.state.profileInfo.degree ||  ''} onDoubleClick={this.changeDegreeInput} onChange={this.changeDegreeOnChange} readOnly={this.state.degreeReadOnly}/>
                                <label htmlFor="" className="col-form-label">
                                    دانشگاه
                                </label>
                                <Input className="form-control" id="" value={this.state.profileInfo.university || ''} onDoubleClick={this.changeUniversityInput} onChange={this.changeUniversityOnChange} readOnly={this.state.universityReadOnly}/>
                            </div>



                            <Button color="primary" className="btn btn-primary btn-rec" onClick={this.submitChanges}>
                                <i className="fa fa-check" />ثبت تغییرات
                            </Button>
                        </form>
                    </div>
                    <div className="dash-con dash-profile-info con-body mb-4">


                      <span className="projectinfo">
                        <i className="fa fa-wrench" aria-hidden="true"/>

                        <h5 style={{display:'inline'}}>تغییر تخصص ها</h5>
                      </span>
                        <div className="dash-divider"/>
                        <form className="">
                            <div className="input-group">

                                <div className="input-group">
                                      <legend>
                                        <label htmlFor="skillType" className="col-form-label">
                                            <h6>در چه رشته هایی از ترجمه تخصص دارید؟</h6>
                                        </label>
                                      </legend>
                                        <Row className= "fields">
                                          <Col>
                                            <label>
                                              <input className="btn-radio" type="checkbox" name="rb" id="rb1" />
                                                <span htmlFor="rb1" className="checkbox-text">عمومی</span>
                                            </label>
                                        </Col>
                                        <Col>
                                          <label>
                                            <input className="btn-radio" type="checkbox" name="rb" id="rb2" />
                                            <span htmlFor="rb2" className="checkbox-text">فنی</span>
                                        </label>
                                        </Col>
                                      </Row>
                                        <Row className="fields">
                                          <Col>
                                            <label>
                                              <input className="btn-radio" type="checkbox" name="rb" id="rb3" />
                                              <span htmlFor="rb3" className="checkbox-text">پزشکی</span>
                                            </label>
                                        </Col>
                                        <Col>
                                          <label>
                                            <input className="btn-radio" type="checkbox" name="rb" id="rb4" />
                                            <span htmlFor="rb4" className="checkbox-text">حقوقی</span>
                                          </label>
                                        </Col>
                                        </Row>
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="skillLangs" className="col-form-label">
                                    توانایی ترجمه ی چه زبان هایی را دارید؟
                                </label>
                                <Row>
                                  <Col>
                                      <div className="section">
                                          <Select
                                            className="customPicker"
                                            ref="fromLanguage"
                                            placeholder="از زبان ..."
                                            options={options1}
                                            name="select-language"
                                            value={this.state.selectValueTF}
                                            onChange={this.updateValueTF}
                                            labelKey="name"
                                            valueKey="name"
                                          />
                                      </div>
                                    </Col>
                                    <Col>
                                          <Select
                                            placeholder="به زبان ..."
                                            className="customPicker section"
                                            ref="toLanguage"
                                            options={options2}
                                            simpleValue
                                            clearable
                                            name="select-language"
                                            value={this.state.selectValueTT}
                                            onChange={this.updateValueTT}
                                            searchable
                                            labelKey="name"
                                            valueKey="name"
                                          />
                                  </Col>
                                </Row>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success btn-rec">
                                        <i className="fa fa-plus"/>افزودن
                                    </button>
                                </div>
                                <label htmlFor="" className="col-form-label sub-label">
                                    <i className="fa fa-quote-left" aria-hidden="true"/> برای حذف موارد انتخاب شده روی آن ها کلیک کنید.
                                </label>
                                <div className="sub-heading" >
                                    <a className="tag" href="#">علمی</a>
                                    <a className="tag" href="#">زیست شناسی</a>
                                    <a className="tag" href="#">میکرو بیولوژی</a>
                                    <a className="tag" href="#">فوری</a>
                                    <a className="tag" href="#">علمی</a>
                                    <a className="tag" href="#">زیست شناسی</a>
                                    <a className="tag" href="#">میکرو بیولوژی</a>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-rec">
                                        <i className="fa fa-check"/>ثبت تغییرات
                                    </button>
                                </div>
                                </div>
                            </form>
                        </div>

                    <div className="dash-con dash-profile-info con-body mb-4">

                      <span className="projectinfo">
                        <i className="fa fa-unlock-alt" aria-hidden="true"/>
                      </span>
                      <span className="projectinfo">
                      <h5 style={{display:'inline'}}>تغییر رمز عبور</h5>

                      </span>
                        <div className="dash-divider"/>
                        <form className="">
                            <div id="" className="form-group">
                                <input type="password" className="form-control form-control-danger" id="" placeholder="رمز عبور فعلی"/>
                                <div id="form-control-feedback-username" className="form-control-feedback" >رمز عبور فعلی صحیح نمیباشد!</div>
                            </div>
                            <div id="" className="form-group">
                                <input type="password" className="form-control form-control-danger" id="" placeholder="رمز عبور جدید"/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-rec">
                                <i className="fa fa-check"/>ثبت تغییر
                            </button>
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

Profileinfo.contextTypes = {
    router: PropTypes.object.isRequired
};


Profileinfo.PropTypes = {
    profileInfo: PropTypes.array.isRequired,
    actions : PropTypes.object.isRequired,
    //action for changing information :
    updateInformations : PropTypes.func.isRequired
};

function mapStateToProps(state , ownProps){
    return{
        profileInfo : state.profileInfo,
    };
}
function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators(profileInfo  , dispatch)
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Profileinfo);

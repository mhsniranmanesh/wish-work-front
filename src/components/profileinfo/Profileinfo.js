import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as profileInfo from '../../actions/profileInfo.js';
import {Input, Button} from 'reactstrap';
import ProfileSkills from './ProfileSkills';
import ProfilePic from './ProfilePic';
import ResetPassword from './ResetPassword';

class Profileinfo extends React.Component{
    constructor(props){
        super(props);
        this.state = { bioReadOnly : true , jobReadOnly : true , degreeReadOnly : true, universityReadOnly : true ,
            profileInfo:"" , profilepicture: null , selectValueTF :"" , selectValueTT : "" , saving : false,
            translationFatherTag : false , is_general: false , is_medical : false , is_technical : false , is_legal : false,
            skills:'' , showSkills:false , language_set:{} , file:"" , imagePreviewUrl:"" , showError:false , imageSizeValidation: false , TTSkills:[]
        };

        this.updateValueTF = this.updateValueTF.bind(this);
        this.updateValueTT = this.updateValueTT.bind(this);
        this.redirect = this.redirect.bind(this);
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
        this.IsLaw = this.IsLaw.bind(this);
        this.IsMedical = this.IsMedical.bind(this);
        this.IsTechnical = this.IsTechnical.bind(this);
        this.IsGeneral = this.IsGeneral.bind(this);
        this.submitSkillChanges = this.submitSkillChanges.bind(this);
        this.showSkills = this.showSkills.bind(this);
        this.addSkills = this.addSkills.bind(this);
        this.picUploader = this.picUploader.bind(this);
        this.sendPicToServer = this.sendPicToServer.bind(this);
        this.deleteSkills = this.deleteSkills.bind(this);
        this.add = this.add.bind(this);

    }

    deleteSkills(id){
        console.log("Hi");
        delete this.state.skills[0].translation_skill.language_set[id];
        this.state.skills[0].translation_skill.language_set.map(function( i,item){
            // if(i>=id){
            //     this.state.skills[0].translation_skill.language_set[i-1] = this.state.skills[0].translation_skill.language_set[i]
            // }
            console.log(item , 'item');
        });
        console.log(this.state.skills[0].translation_skill.language_set);
        console.log('id', id);
        console.log(this.state.TTSkills , 'props.TTSkills');
        //delete this.state.TTSkills[id];
        // this.state.skills[0].translation_skill.language_set.length = this.state.skills[0].translation_skill.language_set.length - 1

    }
    sendPicToServer(){
        var SendData = {
          profile_picture : this.state.file
        };
        this.props.actions.updateInformations(SendData)
    }

    picUploader(e){
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        console.log(file);
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        };

        reader.readAsDataURL(file);
        console.log(file.type);
        if(e.target.files[0].type.includes("image") === true){
            this.setState({showError : false})
        }
        if (e.target.files[0].size <= 1000000) {
            this.setState({imageSizeValidation : false})
        }
        if (e.target.files[0].size > 1000000) {
            this.setState({imageSizeValidation : true})
        }
        if(e.target.files[0].type.includes("image") === false) {
            this.setState({showError: true})
        }
    }

    addSkills(){
        let from_language = this.state.selectValueTF;
        let to_language = this.state.selectValueTT;
        this.setState({language_set:{from_language , to_language}}, this.add);


    }
    add(){
        this.state.skills[0].translation_skill.language_set.push(this.state.language_set);

    }
    showSkills(){
        this.setState({showSkills: true});

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
    IsTechnical(){
        this.setState({is_technical: true });
        this.state.skills[0].translation_skill.is_technical = true ;
    }

    IsGeneral(){
        this.setState({is_general: true });
        this.state.skills[0].translation_skill.is_general = true ;
    }

    IsMedical(){
        this.setState({is_medical: true });
        this.state.skills[0].translation_skill.is_medical = true ;
        console.log(this.state.skills)
    }

    IsLaw(){
        this.setState({is_legal: true });
        this.state.skills[0].translation_skill.is_legal= true;
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

    submitSkillChanges(){
        console.log('this.state.language_set' , this.state.language_set.from_language);
        console.log(this.state.skills);
        // if(this.state.language_set.from_language != undefined) {
        //     console.log('!!!!');
        // }
        var sendSkills = {
            is_general : this.state.skills[0].translation_skill.is_general,
            is_medical : this.state.skills[0].translation_skill.is_medical,
            is_technical : this.state.skills[0].translation_skill.is_technical,
            is_legal : this.state.skills[0].translation_skill.is_legal,
            language_set : this.state.skills[0].translation_skill.language_set
        };
        console.log('sendSkills' ,sendSkills);
        this.props.actions.updateSkills(sendSkills).then(
            () => this.redirect())
            .catch(error => {
                console.log(error);
                this.setState({saving: false});
            })

    }
    submitChanges(){
        //action from redux

        var sendDataInfos = {
            bio: this.state.profileInfo.bio,
            degree: this.state.profileInfo.degree,
            email: this.state.profileInfo.email,
            job: this.state.profileInfo.job,
            title: this.state.profileInfo.title,
            university: this.state.profileInfo.university
        };
        console.log(this.state.profileInfo);
        this.setState({bioReadOnly : true , jobReadOnly : true , degreeReadOnly: true , universityReadOnly: true});
        this.props.actions.updateInformations(sendDataInfos).then(
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
    componentWillReceiveProps(nextProps) {
       // console.log('nextProps' ,nextProps);
        var size = this.size(nextProps.profileInfo);
       // console.log("size of profileInfo in nextProps" , size);
        if (this.props.profileInfo[size-1] != nextProps.profileInfo[size-1]) {
          //  console.log('nextProps.profileInfo[size-1]', nextProps.profileInfo[size - 1]);
            this.setState({profileInfo: nextProps.profileInfo[size - 1]});
            this.setState({profilepicture: nextProps.profileInfo[size-1].profile_picture});
            if(nextProps.profileInfo[size-1].skills[0]) {
                this.setState({skills: nextProps.profileInfo[size - 1].skills});
                this.setState({showSkills: true});
            }
            console.log('this.state.skills',this.state.skills);
            if(!nextProps.profileInfo[size-1].skills[0]){
                //console.log('HIBITCH!');
              var translation_skills = {
                  translation_skill: {
                      is_general: false,
                      is_medical: false,
                      is_technical: false,
                      is_legal: false,
                      language_set: []

                  }
            };
              var newSkills = {
                  0 :  translation_skills
              };
                this.setState({skills: newSkills});
                this.setState({showSkills: true});
            }
        }
        if(this.state.skills){
            this.setState({showSkills: true});
        }
        // else if(this.state.profileInfo.is_freelancer )

    }
    // componentDidMount(){
    //     if(this.state.profileInfo) {
    //         this.setState({showSkills: true});
    //     }
    // }


    componentWillMount(){
        //console.log('componentWillMount PRofileInfo' , this.state.profileInfo);
        if(x > 0) {
            var x = this.size(this.props.profileInfo);
            this.setState({profilepicture: this.props.profileInfo[x - 1].profile_picture});
            this.setState({profileInfo: this.props.profileInfo[x - 1]});
            //this.setState({skills : this.props.profileInfo[x - 1].skills});
            this.setState({showSkills : true});
            if(this.props.profileInfo[x-1].skills[0]) {
                this.setState({skills: this.props.profileInfo[size - 1].skills});
                this.setState({showSkills: true});
            }
            console.log('this.state.skills',this.state.skills);
            if(!this.props.profileInfo[x-1].skills[0]){
                var translation_skills = {
                    translation_skill: {
                        is_general: false,
                        is_medical: false,
                        is_technical: false,
                        is_legal: false,
                        language_set: []

                    }
                };
                var newSkills = {
                    0 :  translation_skills
                };
                this.setState({skills: newSkills});
                this.setState({showSkills: true});
            }
            if(this.state.skills){
                this.setState({showSkills: true});
            }
            console.log('this.state.skills',this.state.skills);
        }


          //  console.log('componentWillMount PRofileInfo' , this.state.profileInfo);
         //   console.log('STATIC_DATAS.AVAILABLEFROMLANGUAGES.index',STATIC_DATAS.AVAILABLEFROMLANGUAGES)
        }




    render(){

    return (
      <div>
      <div className="content-wrapper py-3">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 d-block mx-auto">


                    <ProfilePic Picture={this.state.profileInfo.profile_picture}
                                picUploader={this.picUploader}
                                imagePreviewUrl={this.state.imagePreviewUrl}
                                showError={this.state.showError}
                                imageSizeValidation = {this.state.imageSizeValidation}
                                sendPicToServer={this.sendPicToServer}
                    />

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
                    { this.state.showSkills ?
                        <ProfileSkills updateValueTT={this.updateValueTT}
                                       updateValueTF={this.updateValueTF}
                                       selectValueTF={this.state.selectValueTF}
                                       selectValueTT={this.state.selectValueTT}
                                       IsTechnical={this.IsTechnical}
                                       IsGeneral={this.IsGeneral}
                                       IsLaw={this.IsLaw}
                                       IsMedical={this.IsMedical}
                                       is_general={this.state.is_general}
                                       is_technical={this.state.is_technical}
                                       is_medical={this.state.is_medical}
                                       is_legal={this.state.is_legal}
                                       Skills={this.state.skills}
                                       formSubmitted={this.submitSkillChanges}
                                       addSkills={this.addSkills}
                                       deleteSkills={this.deleteSkills}
                                       TTSkills={this.state.TTSkills}
                        /> : (null)
                    }
                    <ResetPassword/>
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

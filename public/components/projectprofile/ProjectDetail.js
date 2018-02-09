import React from 'react';
import PropTypes from 'prop-types';
import {Badge} from 'reactstrap';
import DownLoadTemplate from './DownloadTemplate';
import Flag from 'react-world-flags'
const ProjectDetail = (props) => {
    var badge;
    var fromLanguageCode;
    var toLanguageCode,
        from,
        to,
        fatherTag,
        fatherTagLogo;
    if (props.Files) {
        var Files = props.Files.map((files, index) => <DownLoadTemplate key={index} fileATC={files}
                                                                        Describtion={props.Detail.title}/>);
    }
    if(props.Field){
        if(props.Field === 1){
            fatherTag = 'عمومی';
            fatherTagLogo = <i className="fa fa-balance-scale"/>
        }
        else if(props.Field === 2){
            fatherTag = 'حقوقی' ;
            fatherTagLogo = <i className="fa fa-globe"/>
        }
        else if(props.Field === 3){
            fatherTag = 'پزشکی';
            fatherTagLogo = <i className="fa  fa-heartbeat"/>
        }
        else if(props.Field === 4){
            fatherTag = 'فنی';
            fatherTagLogo = <i className="fa fa-cogs"/>
        }
    }
    if (props.FromLanguage) {
        if (props.FromLanguage === 1) {
            fromLanguageCode = 'IRN';
            from = 'فارسی' ;
        }
        else if (props.FromLanguage === 2) {
            fromLanguageCode = 'US';
            from = 'انگلیسی'
        }
        else if (props.FromLanguage === 3) {
            fromLanguageCode = 'FR';
            from = 'فرانسوی'
        }
        else if (props.FromLanguage === 4) {
            fromLanguageCode = 'SA';
            from = 'عربی'
        }
        else if (props.FromLanguage === 5) {
            fromLanguageCode = 'ES';
            from = 'اسپانیایی'
        }
        else if (props.FromLanguage === 6) {
            fromLanguageCode = 'DE';
            from = 'آلمانی'
        }
    }
    if (props.ToLanguage) {
        if (props.ToLanguage === 1) {
            toLanguageCode = 'IRN';
            to = 'فارسی'
        }
        else if (props.ToLanguage === 2) {
            toLanguageCode = 'US';
            to = 'انگلیسی'
        }
        else if (props.ToLanguage === 3) {
            toLanguageCode = 'FR';
            to = 'فرانسوی'
        }
        else if (props.ToLanguage === 4) {
            toLanguageCode = 'SA';
            to = 'عربی'
        }
        else if (props.ToLanguage === 5) {
            toLanguageCode = 'ES';
            to = 'اسپانیایی'
        }
        else if (props.ToLanguage === 6) {
            toLanguageCode = 'DE';
            to = 'آلمانی'
        }
    }
    if (props.Detail) {
        if (!props.Detail.is_verified) {
            badge = <Badge color="secondary" pill>در انتظار تایید</Badge>
        }
        else if ((!props.Detail.is_started) && props.Detail.is_verified) {
            badge = <Badge color="info">در حال مناقصه</Badge>
        }
        else if (props.Detail.is_started && (!props.Detail.is_completed)) {
            badge = <Badge color="success">در حال انجام</Badge>
        }
    }
    if (props.FromLanguage) {
        return (
            <div className="con mb-4">
                {/* <span className="price-badge"><i className="fa fa-usd"/></span>
              <span className="time-badge"><i className="fa fa-calendar-o"/></span> */}
              <span>
                <h5 className="project-title"> </h5>
              </span>
              <span>
                  <span>  {props.Detail.title} </span>
                  <span className="project-header-flag">
                    <span> <Flag code={toLanguageCode} height="12"/> </span>به <span> <Flag code={fromLanguageCode} height="12"/> </span>
                  </span>
              </span>


                {badge}
                <div className="divider"/>


                <h6 className="project-discript">
                    {props.Detail.description}
                </h6>

                {/*<div className="download-file">*/}
                {/*<span  id="download-symbol"><a href="#"> <i className="fa fa-download " aria-hidden="true"></i> </a></span>*/}
                {/*<span  ><a href="#" id="file-name"> فایل۲ - پروژه به شدت ازدواجی آروین  </a></span>*/}
                {/*</div>*/}

                {/*<div className="download-file">*/}
                {/*<span  id="download-symbol"><a href="#"> <i className="fa fa-download " aria-hidden="true"></i> </a></span>*/}
                {/*<span  ><a href="#" id="file-name"> فایل۳ - پروژه زیبا در جهت تأمین منافع و شخصیتهای بزرگ علمی   </a></span>*/}
                {/*</div>*/}
                {Files}
                <div className="tags" >
                    <li className='addedTag'>
                        <i className="fa fa-exchange"/> {to} به {from}
                    </li>
                    <li className='addedTag'>{fatherTagLogo} ترجمه ی متن {fatherTag}</li>
                </div>

            </div>
        )
    }
    else {
        return (
            <div className="con mb-4">
                {/* <span className="price-badge"><i className="fa fa-usd"/></span>
              <span className="time-badge"><i className="fa fa-calendar-o"/></span> */}
                {/*<h5 className="project-title">*/}
                    {/*{props.Detail.title} (<Flag code={toLanguageCode} height="16"/> به <Flag code={fromLanguageCode}*/}
                                                                                             {/*height="16"/>)*/}

                {/*</h5>*/}
                {badge}
                <div className="divider"/>


                <h6 className="project-discript">
                    {props.Detail.description}
                </h6>

                {Files}
                <br/>
                <br/>

                {/*<div className="download-file">*/}
                {/*<span  id="download-symbol"><a href="#"> <i className="fa fa-download " aria-hidden="true"></i> </a></span>*/}
                {/*<span  ><a href="#" id="file-name"> فایل۲ - پروژه به شدت ازدواجی آروین  </a></span>*/}
                {/*</div>*/}

                {/*<div className="download-file">*/}
                {/*<span  id="download-symbol"><a href="#"> <i className="fa fa-download " aria-hidden="true"></i> </a></span>*/}
                {/*<span  ><a href="#" id="file-name"> فایل۳ - پروژه زیبا در جهت تأمین منافع و شخصیتهای بزرگ علمی   </a></span>*/}
                {/*</div>*/}
                {/*<div className="flag">*/}
                    {/*<Flag code={toLanguageCode} height="16"/> به <Flag code={fromLanguageCode} height="16"/>*/}
                    {/*<br/>*/}
                    {/*<br/>*/}
                {/*</div>*/}
                {/*<div className="sub-heading">*/}
                    {/*<a className="tag" href="#">#فارسی_به_انگلیسی</a>*/}
                    {/*<a className="tag" href="#">#علمی</a>*/}
                    {/*<a className="tag" href="#">#زیست_شناسی</a>*/}
                    {/*<a className="tag" href="#">#میکرو_بیولوژی</a>*/}
                    {/*<a className="tag" href="#">#فوری</a>*/}
                {/*</div>*/}
            </div>
        )
    }

};
ProjectDetail.PropTypes = {
  Detail : PropTypes.object.isRequired
};


export default ProjectDetail;

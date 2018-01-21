import React from 'react';
import PropTypes from 'prop-types';
import {Badge} from 'reactstrap';
import DownLoadTemplate from './DownloadTemplate';
import Flag from 'react-world-flags'
const ProjectDetail = (props) =>{
    var badge;
    if(props.Files) {
        var Files = props.Files.map((files, index) => <DownLoadTemplate key={index} fileATC={files} Describtion={props.Detail.description}/>);
    }
    if(props.Detail) {
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
        return(
          <div className="con mb-4">
              {/* <span className="price-badge"><i className="fa fa-usd"/></span>
              <span className="time-badge"><i className="fa fa-calendar-o"/></span> */}
              <h5 className="project-title">
                  {props.Detail.title}  (<Flag code={'IRN'} height="16"/> به <Flag code={'US'} height="16"/>)

              </h5>
              <br/>
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
                <div className="flag">
                         <Flag code={'IRN'} height="16"/> به <Flag code={'US'} height="16"/>
                    <br/>
                                  <br/>
                </div>
              <div className="sub-heading">
                  <a className="tag" href="#">#فارسی_به_انگلیسی</a>
                  <a className="tag" href="#">#علمی</a>
                  <a className="tag" href="#">#زیست_شناسی</a>
                  <a className="tag" href="#">#میکرو_بیولوژی</a>
                  <a className="tag" href="#">#فوری</a>
              </div>
          </div>
  )
};

ProjectDetail.PropTypes = {
  Detail : PropTypes.object.isRequired
};


export default ProjectDetail;

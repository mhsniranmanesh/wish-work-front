import React from 'react';
const DownloadTemplate = (props) =>{
    console.log(props.fileATC , 'props.Link');
    return(
        <div className="download-file">
            <a download="wish-work-file" href={props.fileATC.file} target="_blank">
            <span  id="download-symbol"> <i className="fa fa-download " aria-hidden="true"/> </span>
            <span> فایل۱ - {props.Describtion}  </span>
            </a>
        </div>
    )
};

export default DownloadTemplate;
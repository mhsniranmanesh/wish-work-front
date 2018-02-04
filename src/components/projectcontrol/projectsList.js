import React from 'react' ;
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';

const ProjectsList = (props) => {
  return(
    <ul className="contact-list">
        <li className="contact active">
            <div className="wrap d-flex flex-row">
                <div className="meta">
                    <p className="name">پشتیبانی</p>
                    <span className="badge badge-pill badge-primary">۳</span>
                    <p className="time">۲۲:۳۰</p>
                    <p className="preview">لورم ایپسوم متن ساختگی با تولید سادگی نام...</p>
                </div>
            </div>
        </li>
      </ul>
)
};
export default ProjectsList;

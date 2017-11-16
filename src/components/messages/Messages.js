import React from 'react';
import PropTypes from 'prop-types';

class Messages extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="content-wrapper dash-msg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8 chat-section">
                            <div className="msg-holder">
                                <div className="chat-bubble me">
                                    <div className="my-mouth"/>
                                    <div className="content">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
                                    <div className="time">۲۲:۳۰</div>
                                </div>
                                <div className="chat-bubble you">
                                    <div className="your-mouth"/>
                                    <div className="content">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                                        ابزارهای کاربردی می باشد.</div>
                                    <div className="time">۲۲:۳۰</div>
                                </div>
                                <div className="chat-bubble me">
                                    <div className="my-mouth"/>
                                    <div className="content">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
                                    <div className="time">۲۲:۳۰</div>
                                </div>
                            </div>
                            <div className="input-holder">
                                <textarea></textarea>
                                <a href="#" className="send-btn text-center">
                                    <i className="fa fa-paper-plane"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-4 contacts-section">
                            <div className="search-holder">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="fa fa-search"/></span>
                                    <input type="text" className="form-control" placeholder="جستجوی مخاطبین..." aria-label="search"/>
                                </div>
                            </div>
                            <ul className="contact-list">
                                <li className="contact active">
                                    <div className="wrap d-flex flex-row">
                                        <img src="img/wish-avatar.jpg" alt=""/>
                                            <div className="meta">
                                                <p className="name">پشتیبانی</p>
                                                <span className="badge badge-pill badge-primary">۳</span>
                                                <p className="time">۲۲:۳۰</p>
                                                <p className="preview">لورم ایپسوم متن ساختگی با تولید سادگی نام...</p>
                                            </div>
                                    </div>
                                </li>
                                <li className="contact">
                                    <div className="wrap d-flex flex-row">
                                        <img src="img/hamid-avatar.jpg" alt=""/>
                                            <div className="meta">
                                                <p className="name">حمید تولیتی</p>
                                                <span className="badge badge-pill badge-primary">۳</span>
                                                <p className="time">۲۲:۳۰</p>
                                                <p className="preview">لورم ایپسوم متن ساختگی با تولید سادگی نام...</p>
                                            </div>
                                    </div>
                                </li>
                                <li className="contact">
                                    <div className="wrap d-flex flex-row">
                                        <img src="img/mohsen-avatar.jpg" alt=""/>
                                            <div className="meta">
                                                <p className="name">محسن ایرانمنش</p>
                                                <p className="time">۲۲:۳۰</p>
                                                <p className="preview">لورم ایپسوم متن ساختگی با تولید سادگی نام...</p>
                                            </div>
                                    </div>
                                </li>
                                <li className="contact">
                                    <div className="wrap d-flex flex-row">
                                        <img src="img/amir-avatar.jpg" alt=""/>
                                            <div className="meta">
                                                <p className="name">امیرحسین شیرانی</p>
                                                <p className="time">۲۲:۳۰</p>
                                                <p className="preview">لورم ایپسوم متن ساختگی با تولید سادگی نام...</p>
                                            </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Messages ;
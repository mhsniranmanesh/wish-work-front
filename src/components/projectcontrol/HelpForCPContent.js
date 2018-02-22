import React from 'react'

const HelpForCPContent = (props) =>{
    return(
        <div>
            <section className="design-process-section" id="process-tab">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <ul className="process-model more-icon-preocess" role="tablist">
                                <li role="presentation" className={props.anvaeBaze} onClick={props.onClickAnvaeBaze}><a  role="tab" ><i className="fa fa-map-pin" aria-hidden="true"/>
                                    <p>انواع بازه های زمانی</p>
                                </a></li>
                                <li role="presentation" className={props.mohlateErsal} onClick={props.onClickMohlateErsal}><a  role="tab" ><i className="fa fa-send-o" aria-hidden="true"/>
                                    <p>مهلت ارسال پروژه توسط فریلنسر</p>
                                </a></li>
                                <li role="presentation" className={props.mohlateBazNegari} onClick={props.onClickMohlateBazNegari}><a  role="tab" ><i className="fa fa-history" aria-hidden="true"/>
                                    <p>مهلت بازنگری و یا تایید برای کارفرما</p>
                                </a></li>
                                <li role="presentation" className={props.laghv} onClick={props.onClickLaghv}><a  role="tab" ><i className="fa fa-times-circle" aria-hidden="true"/>
                                    <p>لغو پروژه</p>
                                </a></li>
                                <li role="presentation" className={props.bishtar} onClick={props.onClickBishtar}><a  role="tab" ><i className="fa fa-clipboard" aria-hidden="true"/>
                                    <p>بیشتر</p>
                                </a></li>
                            </ul>
                            <div className="tab-content">
                                <div role="tabpanel" className={"tab-pane"+ props.anvaeBaze} id="discover">
                                    <div className="design-process-content">
                                        <h3 className="semi-bold">انواع بازه های زمانی</h3>
<div className="timeline-icon bg-success"></div>  : درحال انجام
<p>زرد : در انتظار بازنگری و تایید</p>
<p>سبز : پایان یافته</p>
<p>توسی : هنوز نرسیده</p>
                                    </div>
                                </div>
                                <div  className={"tab-pane"+ props.mohlateErsal} id="strategy">
                                    <div className="design-process-content">
                                        <h3 className="semi-bold">مهلت ارسال پروژه توسط فریلنسر</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat</p>
                                    </div>
                                </div>
                                <div  className={"tab-pane"+ props.mohlateBazNegari} id="optimization">
                                    <div className="design-process-content">
                                        <h3 className="semi-bold">مهلت بازنگری و یا تایید برای کارفرما</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat</p>
                                    </div>
                                </div>
                                <div  className={"tab-pane"+ props.laghv} id="content">
                                    <div className="design-process-content">
                                        <h3 className="semi-bold">لغو پروژه</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat</p>
                                    </div>
                                </div>
                                <div  className={"tab-pane"+ props.bishtar} id="reporting">
                                    <div className="design-process-content">
                                        <h3>بیشتر</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default HelpForCPContent;
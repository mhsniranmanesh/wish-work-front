import React from 'react'

const HelpForCPContent = (props) =>{
    return(
        <div>
            <section className="design-process-section" id="process-tab">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <ul className="process-model more-icon-preocess" role="tablist">
                                <li role="presentation" className="active"><a href="#discover" aria-controls="discover" role="tab" data-toggle="tab"><i className="fa fa-search" aria-hidden="true"></i>
                                    <p>انواع بازه های زمانی</p>
                                </a></li>
                                <li role="presentation"><a href="#strategy" aria-controls="strategy" role="tab" data-toggle="tab"><i className="fa fa-send-o" aria-hidden="true"></i>
                                    <p>مهلت ارسال پروژه توسط فریلنسر</p>
                                </a></li>
                                <li role="presentation"><a href="#optimization" aria-controls="optimization" role="tab" data-toggle="tab"><i className="fa fa-qrcode" aria-hidden="true"/>
                                    <p>مهلت بازنگری و یا تایید برای کارفرما</p>
                                </a></li>
                                <li role="presentation"><a href="#content" aria-controls="content" role="tab" data-toggle="tab"><i className="fa fa-newspaper-o" aria-hidden="true"/>
                                    <p>لغو پروژه</p>
                                </a></li>
                                <li role="presentation"><a href="#reporting" aria-controls="reporting" role="tab" data-toggle="tab"><i className="fa fa-clipboard" aria-hidden="true"/>
                                    <p>بیشتر</p>
                                </a></li>
                            </ul>
                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="discover">
                                    <div className="design-process-content">
                                        <h3 className="semi-bold">Discovery</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat</p>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="strategy">
                                    <div className="design-process-content">
                                        <h3 className="semi-bold">Strategy</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat</p>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="optimization">
                                    <div className="design-process-content">
                                        <h3 className="semi-bold">Optimization</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat</p>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="content">
                                    <div className="design-process-content">
                                        <h3 className="semi-bold">Content</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat</p>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="reporting">
                                    <div className="design-process-content">
                                        <h3>Reporting</h3>
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
import React from 'react'

const Addbid = ({props}) =>{
    return(
        <div className="col-sm-4">
            <div className="con mb-4">
                <h5 className="project-title">
                    درباره پروژه
                </h5>
                <div className="divider"></div>
                <div className="sub-heading">
                    <span className="not-inline"><i className="fa fa-user"/> <strong>امتیاز کارفرما:</strong> <a href="#">4/5</a></span>
                    <span className="not-inline"><i className="fa fa-usd"/> <strong>بودجه:</strong> 2,000,000 تومان</span>
                    <span className="not-inline"><i className="fa fa-calendar-o"/> <strong>مهلت:</strong> 3 ماه</span>
                    <span className="not-inline"><i className="fa fa-clock-o"/> <strong>زمان ثبت:</strong> دو ساعت قبل</span>
                </div>

                <div className="modal fade" id="biddingModal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="biddingModalLabel">فرم پیشنهاد مناقصه</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="signup-form" action="javascript:gotonext2();">
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-danger" id="" placeholder="قیمت پیشنهادی (تومان)" />
                                    </div>
                                    <div className="form-group">
                                        <textarea type="text" className="form-control" id="" placeholder="توضیحات"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="" placeholder="مهارت ها و ابزار هایی که قصد استفاده از آن ها را دارید."/>
                                        <button type="submit" className="btn btn-success btn-rec my-2">
                                            <i className="fa fa-plus"/>افزودن
                                        </button>
                                        <span className="sub-heading">
                                      <a className="tag" href="#">علمی</a>
                                      <a className="tag" href="#">زیست شناسی</a>
                                      <a className="tag" href="#">میکرو بیولوژی</a>
                                      <a className="tag" href="#">فوری</a>
                                      <a className="tag" href="#">علمی</a>
                                      <a className="tag" href="#">زیست شناسی</a>
                                      <a className="tag" href="#">میکرو بیولوژی</a>
                                    </span>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary btn-rec">ثبت پیشنهاد</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="con mb-4">
                <button id="biddingBtn" type="submit" className="btn btn-primary btn-rec" data-toggle="modal" data-target="#biddingModal">
                    پیشنهاد قیمت
                </button>
            </div>
        </div>
    )
};


export default Addbid
import React from 'react';

class MyProjects extends React.Component {
    render(){
        return(
            <div className="content-wrapper py-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8 d-block mx-auto nav-pills">
                            <div className="dash-con dash-new-project con-body mb-4">
                                <h5>لیست پروژه‌های من</h5>
                                <div className="dash-divider"/>
                                <ul className="nav justify-content-center mx-auto" id="depositTab" role="tablist" style={{width: 162}}>
                                    <li className="nav-item">
                                        <a className="nav-link active" id="deposit-tab" data-toggle="tab" href="#deposit" role="tab" aria-controls="deposit" aria-selected="true">فریلنسر</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="draw-tab" data-toggle="tab" href="#draw" role="tab" aria-controls="draw" aria-selected="false">کارفرما</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="dash-con dash-new-project con-body mb-4">
                                <div className="project-status mx-auto row">
                                  <span className=" boxes btn btn-primary btn-rec myproject-btn myproject-badge col-sm-4">
                                    <input type="checkbox" className="badgebox" id="ongoing"/>
                                    <label htmlFor="ongoing">در حال انجام</label>
                                  </span>

                                  <span className=" boxes btn btn-success btn-rec myproject-btn myproject-badge col-sm-4">
                                    <input type="checkbox" className="badgebox" id="did"/>
                                    <label htmlFor="did">انجام شده</label>
                                  </span>


                                  <span className=" boxes btn btn-danger btn-rec myproject-btn myproject-badge col-sm-4">
                                    <input type="checkbox" className="badgebox" id="canceled"/>
                                    <label htmlFor="canceled">کنسل شده</label>
                                  </span>

                                </div>
                            </div>
                            <div className="dash-con dash-new-project con-body mb-4">
                                <h6>
                                    <strong>متن آکادمیک فوری، در حوزه ی زیست شناسی</strong>
                                    <span className="badge badge-primary">در حال انجام</span>
                                </h6>

                                <h6 className="beauty-text dash-recom-item-discription">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد ...
                                </h6>
                                <span className="sub-heading">
                            <i className="fa fa-calendar"/> ۱۳۹۶/۵/۹
                        </span>
                                <button type="submit" className="btn btn-primary btn-rec">
                                    کنترل پروژه
                                </button>
                            </div>
                            <div className="dash-con dash-new-project con-body mb-4">
                                <h6>
                                    <strong>متن آکادمیک فوری، در حوزه ی زیست شناسی</strong>
                                    <span className="badge badge-success">انجام شده</span>
                                </h6>
                                <h6 className="beauty-text dash-recom-item-discription">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد ...
                                </h6>
                                <span className="sub-heading">
                            <i className="fa fa-calendar"/> ۱۳۹۶/۵/۹
                        </span>
                            </div>
                            <div className="dash-con dash-new-project con-body mb-4">
                                <h6>
                                    <strong>متن آکادمیک فوری، در حوزه ی زیست شناسی</strong>
                                    <span className="badge badge-danger">کنسل شده</span>
                                </h6>
                                <h6 className="beauty-text dash-recom-item-discription">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد ...
                                </h6>
                                <span className="sub-heading">
                            <i className="fa fa-calendar"/> ۱۳۹۶/۵/۹
                        </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
    }
}

export default MyProjects;

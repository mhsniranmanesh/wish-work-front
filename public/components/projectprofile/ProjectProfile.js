import React from 'react';
import ProjectDetail from './ProjectDetail'
import AddBid from './AddBid'

class ProjectProfile extends React.Component {
    render(){
        return(
            <section className="profile">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <ProjectDetail/>
                            <div className="con mb-4">
                                <h5 className="project-title">
                                    فریلنسرها
                                </h5>
                                <div className="dropdown float-left">
                                    <button className="btn btn-secondary btn-rec btn-small dropdown-toggle" id="sortingBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ترتیب
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-left" aria-labelledby="sortingBtn">
                                        <a className="dropdown-item" href="#">قیمت</a>
                                        <a className="dropdown-item" href="#">امتیاز فریلنسر</a>
                                    </div>
                                </div>
                                <div className="divider"/>
                                <div className="fl-list">
                                    <div className="fl-wrap media">
                                        <img className="d-flex  ml-3 rounded-circle" src="http://via.placeholder.com/50x50" width="40" height="40"/>
                                            <div className="media-body">
                                                <a href="#" className="fl-name">محسن ایرانمنش</a>
                                                <span className="bidding-price">2,000,000 تومان</span>
                                                <button id="" type="submit" className="btn btn-success float-left btn-rec">
                                                    <i className="fa fa-check"/>
                                                </button>
                                                <span className="fl-discript">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای <a href="#" className="more">بیشتر...</a></span>
                                                <div className="sub-heading">
                                                    <a className="tag" href="#">#فارسی_به_انگلیسی</a>
                                                    <a className="tag" href="#">#علمی</a>
                                                    <a className="tag" href="#">#زیست_شناسی</a>
                                                    <a className="tag" href="#">#میکرو_بیولوژی</a>
                                                    <a className="tag" href="#">#فوری</a>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className="fl-list">
                                    <div className="fl-wrap media">
                                        <img className="d-flex  ml-3 rounded-circle" src="http://via.placeholder.com/50x50" width="40" height="40"/>
                                            <div className="media-body">
                                                <a href="#" className="fl-name">محسن ایرانمنش</a>
                                                <span className="bidding-price">2,000,000 تومان</span>
                                                <button id="" type="submit" className="btn btn-success float-left btn-rec">
                                                    <i className="fa fa-check"/>
                                                </button>
                                                <span className="fl-discript">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای <a href="#" className="more">بیشتر...</a></span>
                                                <div className="sub-heading">
                                                    <a className="tag" href="#">#فارسی_به_انگلیسی</a>
                                                    <a className="tag" href="#">#علمی</a>
                                                    <a className="tag" href="#">#زیست_شناسی</a>
                                                    <a className="tag" href="#">#میکرو_بیولوژی</a>
                                                    <a className="tag" href="#">#فوری</a>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className="fl-list">
                                    <div className="fl-wrap media">
                                        <img className="d-flex  ml-3 rounded-circle" src="http://via.placeholder.com/50x50" width="40" height="40"/>
                                            <div className="media-body">
                                                <a href="#" className="fl-name">محسن ایرانمنش</a>
                                                <span className="bidding-price">2,000,000 تومان</span>
                                                <button id="" type="submit" className="btn btn-success float-left btn-rec">
                                                    <i className="fa fa-check"/>
                                                </button>
                                                <span className="fl-discript">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای <a href="#" className="more">بیشتر...</a></span>
                                                <div className="sub-heading">
                                                    <a className="tag" href="#">#فارسی_به_انگلیسی</a>
                                                    <a className="tag" href="#">#علمی</a>
                                                    <a className="tag" href="#">#زیست_شناسی</a>
                                                    <a className="tag" href="#">#میکرو_بیولوژی</a>
                                                    <a className="tag" href="#">#فوری</a>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className="fl-list">
                                    <div className="fl-wrap media">
                                        <img className="d-flex  ml-3 rounded-circle" src="http://via.placeholder.com/50x50" width="40" height="40"/>
                                            <div className="media-body">
                                                <a href="#" className="fl-name">محسن ایرانمنش</a>
                                                <span className="bidding-price">2,000,000 تومان</span>
                                                <button id="" type="submit" className="btn btn-success float-left btn-rec">
                                                    <i className="fa fa-check"/>
                                                </button>
                                                <span className="fl-discript">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای <a href="#" className="more">بیشتر...</a></span>
                                                <div className="sub-heading">
                                                    <a className="tag" href="#">#فارسی_به_انگلیسی</a>
                                                    <a className="tag" href="#">#علمی</a>
                                                    <a className="tag" href="#">#زیست_شناسی</a>
                                                    <a className="tag" href="#">#میکرو_بیولوژی</a>
                                                    <a className="tag" href="#">#فوری</a>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <AddBid/>

                    </div>
                </div>
            </section>
        )
    }
}


export default ProjectProfile;
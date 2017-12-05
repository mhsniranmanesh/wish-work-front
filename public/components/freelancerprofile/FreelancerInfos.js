import React from 'react';

const FreelancerInfos = ({props}) =>{
    return(
        <div>
            <div className="con fl-p mb-4">
                <div className="media">
                    <img className="d-flex  ml-3 rounded-circle" src="http://via.placeholder.com/100x100" width="100" height="100"/>
                    <div className="media-body">
                        <h5 className="name">محسن ایرانمنش</h5>
                        <h6 className="s-discript">مترجم رسمی انگلیسی به فارسی و فارسی به انگلیسی</h6>
                        <div className="divider"/>
                        <span className="discript">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                            </span>
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
    )
};

export default FreelancerInfos
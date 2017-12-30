import React from 'react';

const ProjectTemplate = ({ProjectSubmitted , onClick}) => {

    return (



    <div>
        <div className="dash-con dash-new-project con-body mb-4">
            <h6>
                {/*<strong>{ProjectSubmitted.title}</strong>*/}
                <strong>متن آکادمیک فوری، در حوزه ی زیست شناسی</strong>
                <span className="badge badge-primary">در حال انجام</span>
                {/*<span>{ProjectSubmitted.badge}</span>*/}
            </h6>

            <h6 className="beauty-text dash-recom-item-discription">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد ...
            </h6>
            {/*<h6 className="beauty-text dash-recom-item-discription">*/}
                {/*{ProjectSubmitted.description}*/}
            {/*</h6>*/}
            <span className="sub-heading">
                            <i className="fa fa-calendar"/> ۱۳۹۶/۵/۹
                        </span>
            {/*<span className="sub-heading">*/}
                            {/*<i className="fa fa-calendar"/> {ProjectSubmitted.ReleaseTime}*/}
                        {/*</span>*/}
            {/*<button type="submit" className="btn btn-primary btn-rec">*/}
                {/*کنترل پروژه*/}
            {/*</button>*/}
            <button type="submit" className="btn btn-primary btn-rec" onClick={onClick}>
                کنترل پروژه
            </button>
        </div>
    </div>
    )
};

export default ProjectTemplate;

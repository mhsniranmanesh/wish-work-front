import React from 'react';

const ProjectDetail = ({props}) =>{
  return(
      <div className="con mb-4">
          <span className="price-badge"><i className="fa fa-usd"/></span>
          <span className="time-badge"><i className="fa fa-calendar-o"/></span>
          <h5 className="project-title">
              ترجمه ی فوری متن تخصصی در زمینه ی زیست شناسی، گرایش میکروبیولوژی مولکولی، با تاکید بر چند چیز
          </h5>

          <div className="divider"/>
          <h6 className="project-discript">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </h6>
          <div className="sub-heading">
              <a className="tag" href="#">#فارسی_به_انگلیسی</a>
              <a className="tag" href="#">#علمی</a>
              <a className="tag" href="#">#زیست_شناسی</a>
              <a className="tag" href="#">#میکرو_بیولوژی</a>
              <a className="tag" href="#">#فوری</a>
          </div>
      </div>
  )
};


export default ProjectDetail ;
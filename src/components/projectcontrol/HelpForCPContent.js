import React from 'react'

const HelpForCPContent = (props) =>{
    return(
        <div>
            <section className="design-process-section" id="process-tab">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-14">
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

                             <span className="text-primary">آبی</span>
                                        : درحال انجام
<p>                            <span className="text-warning">زرد</span>
    : در انتظار بازنگری و تایید</p>
<p>                            <span className="text-success">سبز</span>
    : پایان یافته</p>
<p>                            <span className="text-secondary">توسی</span>
    : هنوز نرسیده</p>
<p>                            <span className="text-danger">لغو شده</span>
    : هنوز نرسیده</p>
                                        هنگامی که پروژه در حال انجام است برای فریلنسران قابلیت آپلود فایل وجود دارد
                                        هنگامی که پروژه در مرحله ی بازنگری و تایید است کارفرما ۲۴ ساعت فرصت دارد تا پروژه را به تایید خود برساند و مبلغ فاز بعدی را بپردازد تا فاز بعدی شروع شود
                                    </div>
                                </div>
                                <div  className={"tab-pane"+ props.mohlateErsal} id="strategy">
                                    <div className="design-process-content">
                                        <h3 className="semi-bold">مهلت ارسال پروژه توسط فریلنسر</h3>
                                        <p>در مرحله ی «انجام پروژه» ، فریلنسر مهلت پایانی زمان آپلود فایل خود را مشاهده می نماید، در صورت تاخیر بعد از زمان گفته شده ، پروژه به صورت خودکار لغو می گردد و وجه به حساب کارفرما باز خواهد گشت</p>
                                    </div>
                                </div>
                                <div  className={"tab-pane"+ props.mohlateBazNegari} id="optimization">
                                    <div className="design-process-content">
                                        <h3 className="semi-bold">مهلت بازنگری و یا تایید برای کارفرما</h3>
                                        <p>                                        هنگامی که پروژه در مرحله ی بازنگری و تایید است کارفرما ۲۴ ساعت فرصت دارد تا پروژه را به تایید خود برساند و مبلغ فاز بعدی را بپردازد تا فاز بعدی شروع شود، در صورت تاخیر در تایید و پرداخت فاز بعدی پروژه ، پروژه به صورت خودکار لغو شده و وجه به صورت کامل طی ۴۸ ساعت به حساب فریلنسر پرداخت می گردد
                                        </p>
                                    </div>
                                </div>
                                <div  className={"tab-pane"+ props.laghv} id="content">
                                    <div className="design-process-content">
                                        <h3 className="semi-bold">لغو پروژه</h3>
                                        <p>در صورت لغو پروژه توسط کارفرما، در صورتی که قبل از دریافت فایل(ها)ی خود باشد، وجه به صورت کامل طی ۴۸ ساعت به حسابش منتقل می شود، همچنین اگر فایل مورد نظر فاقد کیفیت مورد نظر بوده و نیز به تایید ویش ورک برسد وجه به صورت کامل به حساب کارفرما واریز می شود، در غیر این صورت ، وجه بازه های انجام شده به صورت کامل به حساب فریلنسر پرداخته می شود</p>
                                    </div>
                                </div>
                                <div  className={"tab-pane"+ props.bishtar} id="reporting">
                                    <div className="design-process-content">
                                        <h3>بیشتر</h3>
                                        <p>ویش ورک هیچ گونه مبلغی را از مبلغ پرداختی توسط کارفرما کاهش نمی دهد و صرفا واسطه می باشد، برای اطلاعات بیشتر با شماره ی زیر تماس حاصل فرمایید:</p>
                                        <p>۰۲۱-۸۸۴۶۶۹۵۹</p>
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
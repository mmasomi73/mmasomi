import React, {Component} from 'react';
import Avatar from '../../assets/images/user-avatar.png'
import '../../assets/css/cv.css'

class CurriculumVitae extends Component {


    render() {

        return (
            <div className="col-lg-10 offset-lg-1 rtl">
                <div className="card mb-5">
                    <div className="cv">
                        <div className="cv-left pull-left">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title">سوابق تحصیلی</div>
                                </div>
                                <div className="col-lg-12 detail-title">کارشناسی مهندسی کامپیوتر - نرم افزار</div>
                                <div className="col-lg-12 detail-value">دانشگاه تربیت دبیر شهیدرجایی تهران از سال 91 تا
                                    95
                                    دانشجوی ممتاز و جزوء استعدادهای درخشان
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-12">
                                    <div className="title">سوابق شغلی</div>
                                </div>
                                <div className="col-lg-12 detail-title">سایبان صنعت نوین</div>
                                <div className="col-lg-12 detail-value">توسعه دهنده و برنامه نویس ارشد شرکت بیمه ای
                                    سایبان صنعت
                                    نوین از سال 96 تا کنون
                                </div>
                                <div className="col-lg-12 detail-title">آموزش و پروش</div>
                                <div className="col-lg-12 detail-value">
                                    دبیر شاخه کامپیوتر فنی حرفه ایی در استان همدان
                                </div>
                                <div className="col-lg-12 detail-title">زربرگ تامین</div>
                                <div className="col-lg-12 detail-value">
                                    توسعه دهنده وب و برنامه نویس از سال 94 تا 95
                                </div>
                                <div className="col-lg-12 detail-title">فریلنسر</div>
                                <div className="col-lg-12 detail-value">
                                    انجام پروژه به صورت فریلنسر و به صورت گروهی و مشارکت در بیش از ده پروژه از سال 93 تا
                                    کنون
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-12">
                                    <div className="title">اهم پروژه ها</div>
                                </div>
                                <div className="col-lg-12 detail-title">KhashFood Food Delivery System</div>
                                <div className="col-lg-12 detail-value">
                                    مدیریت و توسعه سامانه سفارش غذای آنلاین خش فود در استان یزد
                                </div>
                                <div className="col-lg-12 detail-title">Bimegar Insurance Ordering</div>
                                <div className="col-lg-12 detail-value">
                                    سامانه مدیریت، ثبت بیمه و صدور بیمه، خرید و نرخ دهی آنلاین بیمه برای شرکت سایبان
                                    صنعت نوین
                                </div>
                                <div className="col-lg-12 detail-title">Golex Marketing System</div>
                                <div className="col-lg-12 detail-value">
                                    سامانه ثبت سفارش و مدیریت خرید و فروش شرکت زربرگ تامین
                                </div>
                                <div className="col-lg-12 detail-title">HamClassia LMS</div>
                                <div className="col-lg-12 detail-value">
                                    برنامه نویس ارشد و طراح سامانه مدیریت کلاس و آموزش مجازی همکلاسیا
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-12">
                                    <div className="title">اهم سوابق آموزشی پژوهشی</div>
                                </div>
                                <div className="col-lg-12 detail-title">تدریس برنامه نویسی در مرکز گسترش انفورماتیک
                                    ایران
                                </div>
                                <div className="col-lg-12 detail-value">
                                    سال 95
                                </div>
                                <div className="col-lg-12 detail-title">تدریس Mobile Application programming در دانشگاه
                                    تربیت دبیر شهید رجایی
                                </div>
                                <div className="col-lg-12 detail-value">
                                    سال 94
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-12">
                                    <div className="title">مهارت ها</div>
                                </div>
                                <div className="col-lg-3 cv-progress mt-2 text-center">
                                    مسلط به PHP
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "90%"}}/>
                                    </div>
                                </div>
                                <div className="col-lg-3 cv-progress mt-2 text-center">
                                    مسلط به Laravel
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "90%"}}/>
                                    </div>
                                </div>
                                <div className="col-lg-3 cv-progress mt-2 text-center">
                                    مسلط به JQuery
                                    <div className="progress">
                                        <div className="progress-bar" style={{width:"80%"}}/>
                                    </div>
                                </div>
                                <div className="col-lg-3 cv-progress mt-2 text-center">
                                    آشنایی با Composer
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "60%"}}/>
                                    </div>
                                </div>
                                <div className="col-lg-3 cv-progress mt-2 text-center">
                                    مسلط به #C
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "60%"}}/>
                                    </div>
                                </div>
                                <div className="col-lg-3 cv-progress mt-2 text-center">
                                    HTML/HTML5
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "100%"}}/>
                                    </div>
                                </div>
                                <div className="col-lg-3 cv-progress mt-2 text-center">
                                    Css/Css3
                                    <div className="progress">
                                        <div className="progress-bar" style={{width:"90%"}}/>
                                    </div>
                                </div>
                                <div className="col-lg-3 cv-progress mt-2 text-center">
                                    OOP
                                    <div className="progress">
                                        <div className="progress-bar" style={{width:"100%"}}/>
                                    </div>
                                </div>
                                <div className="col-lg-3 cv-progress mt-2 text-center">
                                    Design Patterns
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "50%"}}/>
                                    </div>
                                </div>
                                <div className="col-lg-3 cv-progress mt-2 text-center">
                                    SQL/MySql
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "70%"}}/>
                                    </div>
                                </div>
                                <div className="col-lg-3 cv-progress mt-2 text-center">
                                    مسلط به Javascript
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "85%"}}/>
                                    </div>
                                </div>
                                <div className="col-lg-3 cv-progress mt-2 text-center">
                                    Agile/Scrum
                                    <div className="progress">
                                        <div className="progress-bar" style={{width:"80%"}}/>
                                    </div>
                                </div>
                                <div className="col-lg-3 cv-progress mt-2 text-center">
                                    زبان انگلیسی
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "40%"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cv-right pull-right">
                            <div className="profile">
                                <img src={Avatar} alt=""/>
                            </div>
                            <div className="cv-title">میثم معصومی</div>
                            <div className="cv-detail">
                                <div className="cv-detail-title">سال تولد</div>
                                <div className="cv-detail-value">1370</div>
                            </div>
                            <div className="cv-detail">
                                <div className="cv-detail-title">وضعیت تاهل</div>
                                <div className="cv-detail-value">مجرد</div>
                            </div>
                            <div className="cv-detail">
                                <div className="cv-detail-title">جنسیت</div>
                                <div className="cv-detail-value">مرد</div>
                            </div>
                            <div className="cv-detail">
                                <div className="cv-detail-title">ایمیل</div>
                                <div className="cv-detail-value">mmasomi73@gmail.com</div>
                            </div>
                            {/*<div className="cv-detail cv-social ltr">*/}
                                {/*<div className=""><a href="javascript:void(0)"><i className="fab fa-linkedin fa-2x"/></a></div>*/}
                                {/*<div className=""><a href={null}><i className="fas fa-at fa-2x"/></a></div>*/}
                                {/*<div className=""><a href={null}><i className="fab fa-twitter-square fa-2x"/></a></div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>

    );
    }
}

export default CurriculumVitae;
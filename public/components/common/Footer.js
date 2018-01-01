import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div id="footer" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" style={{textAlign:"center"}}>
                            <ul className="social-button">
                                <li className="">
                                    <a href="https://twitter.com/work_wish" target="_blank">
                                    <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="https://t.me/WishWork" target="_blank">
                                    <i className="fa fa-paper-plane"></i>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="https://www.instagram.com/wish_work/" target="_blank">
                                    <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="https://www.linkedin.com/company/18127878/" target="_blank">
                                    <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                            <span className="footer-item copyright">
                                تمامی حقوق این سایت متعلق به ویش ورک می باشد.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default Footer;
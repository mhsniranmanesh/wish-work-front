import React from 'react';
import {connect} from 'react-redux';
import AsFreelancerOrClient from './AsFreelancerOrClient';
import Filter from './Filter';
import ProjectTemplate from './ProjectTemplate';
import PropTypes from 'prop-types';

class MyProjects extends React.Component {
    constructor(props){
        super(props);
        this.state={};
        this.size = this.size.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    size (obj) {
        let x = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) x++;
        }
        return x;
    };

    onClick(event){
        event.preventDefault();
        this.context.router.history.push('/project/control');
    };

    render(){
        return(
            <div className="content-wrapper py-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8 d-block mx-auto nav-pills">
                            <AsFreelancerOrClient/>
                            <Filter/>
                            <ProjectTemplate onClick={this.onClick}/>
                            {/*<div className="dash-con dash-new-project con-body mb-4">*/}
                                {/*<h6>*/}
                                    {/*<strong>متن آکادمیک فوری، در حوزه ی زیست شناسی</strong>*/}
                                    {/*<span className="badge badge-primary">در حال انجام</span>*/}
                                {/*</h6>*/}

                                {/*<h6 className="beauty-text dash-recom-item-discription">*/}
                                    {/*لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد ...*/}
                                {/*</h6>*/}
                                {/*<span className="sub-heading">*/}
                            {/*<i className="fa fa-calendar"/> ۱۳۹۶/۵/۹*/}
                        {/*</span>*/}
                                {/*<button type="submit" className="btn btn-primary btn-rec">*/}
                                    {/*کنترل پروژه*/}
                                {/*</button>*/}
                            {/*</div>*/}
                            {/*<div className="dash-con dash-new-project con-body mb-4">*/}
                                {/*<h6>*/}
                                    {/*<strong>متن آکادمیک فوری، در حوزه ی زیست شناسی</strong>*/}
                                    {/*<span className="badge badge-success">انجام شده</span>*/}
                                {/*</h6>*/}
                                {/*<h6 className="beauty-text dash-recom-item-discription">*/}
                                    {/*لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد ...*/}
                                {/*</h6>*/}
                                {/*<span className="sub-heading">*/}
                            {/*<i className="fa fa-calendar"/> ۱۳۹۶/۵/۹*/}
                        {/*</span>*/}
                            {/*</div>*/}
                            {/*<div className="dash-con dash-new-project con-body mb-4">*/}
                                {/*<h6>*/}
                                    {/*<strong>متن آکادمیک فوری، در حوزه ی زیست شناسی</strong>*/}
                                    {/*<span className="badge badge-danger">کنسل شده</span>*/}
                                {/*</h6>*/}
                                {/*<h6 className="beauty-text dash-recom-item-discription">*/}
                                    {/*لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد ...*/}
                                {/*</h6>*/}
                                {/*<span className="sub-heading">*/}
                            {/*<i className="fa fa-calendar"/> ۱۳۹۶/۵/۹*/}
                        {/*</span>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>

    );
    }
}
MyProjects.contextTypes = {
    router: PropTypes.object.isRequired
};



function mapStateToProps(state , ownProps) {
    return{
        projectSubmit : state.projectSubmit
    }
}

function mapDispatchToProps() {
    return{

    }
}

export default connect(mapStateToProps , mapDispatchToProps )(MyProjects);

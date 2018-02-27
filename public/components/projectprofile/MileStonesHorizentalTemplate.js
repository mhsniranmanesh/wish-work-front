import React from 'react';
import {Row , Col} from 'reactstrap';



const MileStonesHorizentalTemplate = (props) =>{
   // for(var x=0 ; x< props.number_of_milestones x++)
    // var numberDivided = Math.floor(numberDivided/)
    var end = props.a -1;
    var interval = props.a;
    console.log('intervalintervalinterval' , interval);

        if(interval == 1){
          return(
            <div className="col-sm-12">
                <div className="col-sm-10 col-xs-8">
                    <span className="cp-circle">
                      <i className="fa fa-caret-left cp-start-fa" aria-hidden="true"></i>
                    </span>
                    <span className="cp-connector-2"></span>
                </div>
                <div className="col-sm-2 col-xs-4">
                      <span className=" cp-circle">
                        <i className="fa fa-stop cp-finish-fa" aria-hidden="true"></i>
                      </span>
                </div>
            </div>
        );

        }
        else{
              if(props.i === 0){
                    if(interval == 2){
                      return(
                        <div className="col-sm-6 col-xs-2">
                            <div className="col-sm-6 col-xs-2">
                                <span className="cp-circle">
                                  <i className="fa fa-caret-left cp-start-fa" aria-hidden="true"></i>
                                </span>
                                <span className="cp-connector-2 "></span>
                            </div>
                            <div className="col-sm-6 col-xs-2 cp-beside-finish">
                              <span className="cp-public-text"> {props.toPersianNum(props.dayRemain)} روز </span>
                              <span className=" cp-circle"></span>
                              <span className="cp-connector"></span>
                              <span className="cp-public-text"> {props.toPersianNum(props.pageRemain)} صفحه</span>

                            </div>
                        </div>

                      )
                    }
                    else if(interval == 3){
                      return(
                        <div className="col-sm-5 col-xs-2">
                            <div className="col-sm-6 col-xs-2">
                                <span className="cp-circle">
                                  <i className="fa fa-caret-left cp-start-fa" aria-hidden="true"></i>
                                </span>
                                <span className="cp-connector"></span>
                            </div>
                            <div className="col-sm-6 col-xs-2  cp-beside-finish">
                              <span className="cp-public-text"> {props.toPersianNum(props.dayRemain)} روز </span>
                              <span className=" cp-circle"></span>
                              <span className="cp-connector"></span>
                              <span className="cp-public-text"> {props.toPersianNum(props.pageRemain)} صفحه</span>
                            </div>
                        </div>
                      )
                    }
                    else if(interval == 4){
                      return(
                        <div className="col-sm-4 col-xs-2">
                            <div className="col-sm-6 col-xs-2">
                                <span className="cp-circle">
                                  <i className="fa fa-caret-left cp-start-fa" aria-hidden="true"></i>
                                </span>
                                <span className="cp-connector"></span>
                            </div>
                            <div className="col-sm-6 col-xs-2  cp-beside-finish">
                              <span className="cp-public-text"> {props.toPersianNum(props.dayRemain)} روز </span>
                              <span className=" cp-circle"></span>
                              <span className="cp-connector"></span>
                              <span className="cp-public-text">{props.toPersianNum(props.pageRemain)}</span><span className="cp-public-text-4"> صفحه</span>
                            </div>
                        </div>
                      )
                    }
                    else{
                      return(
                        <div></div>
                      )
                    }

              }
              else if(props.i === end){
                    if(interval == 2){
                      return(
                        <div className="col-sm-6 col-xs-2">
                            <div className="col-sm-6 col-xs-2  cp-beside-start">
                              <span className="cp-public-text"> {props.toPersianNum(props.dayRemain)} روز </span>
                              <span className=" cp-circle"></span>
                              <span className="cp-connector-2"></span>
                              <span className="cp-public-text"> {props.toPersianNum(props.pageRemain)} صفحه</span>
                            </div>
                            <div className="col-sm-6 col-xs-2 cp-start">
                              <span className=" cp-circle">
                                <i className="fa fa-stop cp-finish-fa" aria-hidden="true"></i>

                              </span>
                            </div>
                         </div>
                      )
                    }
                    else if(interval == 3){
                      return(
                          <div className="col-sm-5 col-xs-2">
                              <div className="col-sm-6 col-xs-2  cp-beside-start">
                                <span className="cp-public-text"> {props.toPersianNum(props.dayRemain)} روز </span>
                                <span className=" cp-circle"></span>
                                <span className="cp-connector"></span>
                                <span className="cp-public-text"> {props.toPersianNum(props.pageRemain)} صفحه</span>
                              </div>
                              <div className="col-sm-6 col-xs-2 cp-start">
                                <span className=" cp-circle">
                                  <i className="fa fa-stop cp-finish-fa" aria-hidden="true"></i>

                                </span>
                              </div>
                           </div>
                      )
                    }
                    else if( interval == 4 ){
                      return(
                          <div className="col-sm-4 col-xs-2">
                              <div className="col-sm-6 col-xs-2  cp-beside-start">
                                <span className="cp-public-text"> {props.toPersianNum(props.dayRemain)} روز </span>
                                <span className=" cp-circle"></span>
                                <span className="cp-connector"></span>
                                <span className="cp-public-text">{props.toPersianNum(props.pageRemain)}</span><span className="cp-public-text-4"> صفحه</span>
                              </div>
                              <div className="col-sm-6 col-xs-2 cp-start">
                                <span className=" cp-circle">
                                  <i className="fa fa-stop cp-finish-fa" aria-hidden="true"></i>

                                </span>
                              </div>
                           </div>
                         )
                    }
                    else{
                      return(
                        <div></div>
                      )
                    }
              }
              else if((props.i % 2 !== 0) && (props.i !== end)){
                    if(interval == 2){
                      return(
                          <div className="col-sm-3 col-xs-2  cp-between">
                            <span className="cp-public-text"> {props.toPersianNum(props.dayRemain)} روز </span>
                            <span className=" cp-circle"></span>
                            <span className="cp-connector-2"></span>
                            <span className="cp-public-text"> {props.toPersianNum(props.pageRemain)} صفحه</span>
                          </div>
                      )
                    }
                    else if(interval == 3){
                      return(
                          <div className="col-sm-2 col-xs-2  cp-between">
                            <span className="cp-public-text"> {props.toPersianNum(props.dayRemain)} روز </span>
                            <span className=" cp-circle"></span>
                            <span className="cp-connector"></span>
                            <span className="cp-public-text"> {props.toPersianNum(props.pageRemain)} صفحه</span>
                          </div>
                      )
                    }
                    else if(interval == 4){
                      return(
                        <div className="col-sm-2 col-xs-2  cp-between">
                          <span className="cp-public-text"> {props.toPersianNum(props.dayRemain)} روز </span>
                          <span className=" cp-circle"></span>
                          <span className="cp-connector"></span>
                          <span className="cp-public-text">{props.toPersianNum(props.pageRemain)}</span><span className="cp-public-text-4"> صفحه</span>
                        </div>
                      )
                    }
                    else{
                      return(
                        <div></div>
                      )
                    }
              }
              else{
                    if(interval == 2){
                      return(
                          <div className="col-sm-3 col-xs-2  cp-between">
                            <span className="cp-public-text"> {props.toPersianNum(props.dayRemain)} روز </span>
                            <span className=" cp-circle"></span>
                            <span className="cp-connector-2"></span>
                            <span className="cp-public-text"> {props.toPersianNum(props.pageRemain)} صفحه</span>
                          </div>
                      )
                    }
                    else if(interval == 3){
                      return(
                          <div className="col-sm-2 col-xs-2  cp-between">
                            <span className="cp-public-text"> {props.toPersianNum(props.dayRemain)} روز </span>
                            <span className=" cp-circle"></span>
                            <span className="cp-connector"></span>
                            <span className="cp-public-text"> {props.toPersianNum(props.pageRemain)} صفحه</span>
                          </div>
                      )
                    }
                    else if(interval == 4){
                      return(
                        <div className="col-sm-2 col-xs-2 cp-between">
                          <span className="cp-public-text"> {props.toPersianNum(props.dayRemain)} روز </span>
                          <span className=" cp-circle"></span>
                          <span className="cp-connector"></span>
                          <span className="cp-public-text">{props.toPersianNum(props.pageRemain)}</span><span className="cp-public-text-4"> صفحه</span>
                        </div>
                      )
                    }
                    else {
                      return(
                        <div></div>
                      )
                    }

              }
        }





  };

    export default MileStonesHorizentalTemplate;

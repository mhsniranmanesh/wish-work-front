import React from 'react';
import {Row , Col} from 'reactstrap';

const MileStonesHorizentalTemplate = (props) =>{
   // for(var x=0 ; x< props.number_of_milestones x++)
    // var numberDivided = Math.floor(numberDivided/)
    console.log(props.a , "length")
    var end = props.a -1;
    var interval = props.a;
    console.log(interval,"interval")
        if(interval == 1){
          return(
            <div className="col-sm-12">
                <div className="col-sm-10">
                    <span className="cp-circle">
                      <i className="fa fa-stop cp-finish-fa" aria-hidden="true"></i>
                    </span>
                    <span className="cp-connector-2"></span>
                </div>
                <div className="col-sm-2">
                      <span className=" cp-circle">
                        <i className="fa fa-play cp-start-fa" aria-hidden="true"></i>
                      </span>
                </div>
            </div>
        );

        }
        else{
              if(props.i === 0){
                    if(interval == 2){
                      return(
                        <div className="col-sm-6">
                            <div className="col-sm-5">
                                <span className="cp-circle">
                                  <i className="fa fa-stop cp-finish-fa" aria-hidden="true"></i>
                                </span>
                                <span className="cp-connector-2"></span>
                            </div>
                            <div className="col-sm-7">
                              <span className="cp-public-text"> تا {props.x} روز </span>
                              <span className=" cp-circle"></span>
                              <span className="cp-connector"></span>
                              <span className="cp-public-text"> تا صفحه {props.page}</span>

                            </div>
                        </div>

                      )
                    }
                    else if(interval == 3){
                      return(
                        <div className="col-sm-5">
                            <div className="col-sm-5">
                                <span className="cp-circle">
                                  <i className="fa fa-stop cp-finish-fa" aria-hidden="true"></i>
                                </span>
                                <span className="cp-connector"></span>
                            </div>
                            <div className="col-sm-7">
                              <span className="cp-public-text"> تا {props.x} روز </span>
                              <span className=" cp-circle"></span>
                              <span className="cp-connector"></span>
                              <span className="cp-public-text"> تا صفحه {props.page}</span>
                            </div>
                        </div>
                      )
                    }
                    else if(interval == 4){
                      return(
                        <div className="col-sm-4">
                            <div className="col-sm-5">
                                <span className="cp-circle">
                                  <i className="fa fa-stop cp-finish-fa" aria-hidden="true"></i>
                                </span>
                                <span className="cp-connector"></span>
                            </div>
                            <div className="col-sm-7">
                              <span className="cp-public-text"> تا {props.x} روز </span>
                              <span className=" cp-circle"></span>
                              <span className="cp-connector"></span>
                              <span className="cp-public-text"> تا صفحه {props.page}</span>
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
                        <div className="col-sm-10">
                            <div className="col-sm-7">
                              <span className="cp-public-text"> تا {props.x} روز </span>
                              <span className=" cp-circle"></span>
                              <span className="cp-connector-2"></span>
                              <span className="cp-public-text"> تا صفحه {props.page}</span>
                            </div>
                            <div className="col-sm-5">
                              <span className=" cp-circle">
                                <i className="fa fa-play cp-start-fa" aria-hidden="true"></i>
                              </span>
                            </div>
                         </div>
                      )
                    }
                    else if(interval == 3){
                      return(
                          <div className="col-sm-5">
                              <div className="col-sm-7">
                                <span className="cp-public-text"> تا {props.x} روز </span>
                                <span className=" cp-circle"></span>
                                <span className="cp-connector"></span>
                                <span className="cp-public-text"> تا صفحه {props.page}</span>
                              </div>
                              <div className="col-sm-5">
                                <span className=" cp-circle">
                                  <i className="fa fa-play cp-start-fa" aria-hidden="true"></i>
                                </span>
                              </div>
                           </div>
                      )
                    }
                    else if( interval == 4 ){
                      return(
                          <div className="col-sm-4">
                              <div className="col-sm-5">
                                <span className="cp-public-text"> تا {props.x} روز </span>
                                <span className=" cp-circle"></span>
                                <span className="cp-connector"></span>
                                <span className="cp-public-text"> تا صفحه {props.page}</span>
                              </div>
                              <div className="col-sm-7">
                                <span className=" cp-circle">
                                  <i className="fa fa-play cp-start-fa" aria-hidden="true"></i>
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
                          <div className="col-sm-3">
                            <span className="cp-public-text"> تا {props.x} روز </span>
                            <span className=" cp-circle"></span>
                            <span className="cp-connector-2"></span>
                            <span className="cp-public-text"> تا صفحه {props.page}</span>
                          </div>
                      )
                    }
                    else if(interval == 3){
                      return(
                          <div className="col-sm-2">
                            <span className="cp-public-text"> تا {props.x} روز </span>
                            <span className=" cp-circle"></span>
                            <span className="cp-connector"></span>
                            <span className="cp-public-text"> تا صفحه {props.page}</span>
                          </div>
                      )
                    }
                    else if(interval == 4){
                      return(
                        <div className="col-sm-2">
                          <span className="cp-public-text"> تا {props.x} روز </span>
                          <span className=" cp-circle"></span>
                          <span className="cp-connector"></span>
                          <span className="cp-public-text"> تا صفحه {props.page}</span>
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
                          <div className="col-sm-3">
                            <span className="cp-public-text"> تا {props.x} روز </span>
                            <span className=" cp-circle"></span>
                            <span className="cp-connector-2"></span>
                            <span className="cp-public-text"> تا صفحه {props.page}</span>
                          </div>
                      )
                    }
                    else if(interval == 3){
                      return(
                          <div className="col-sm-2">
                            <span className="cp-public-text"> تا {props.x} روز </span>
                            <span className=" cp-circle"></span>
                            <span className="cp-connector"></span>
                            <span className="cp-public-text"> تا صفحه {props.page}</span>
                          </div>
                      )
                    }
                    else if(interval == 4){
                      return(
                        <div className="col-sm-2">
                          <span className="cp-public-text"> تا {props.x} روز </span>
                          <span className=" cp-circle"></span>
                          <span className="cp-connector"></span>
                          <span className="cp-public-text"> تا صفحه {props.page}</span>
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

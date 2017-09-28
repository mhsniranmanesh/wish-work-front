import React from 'react';
import ReactDOM from 'react-dom';
import './DashboardButton.css';


class DashboardButton extends React.Component {
  constructor(props){
    super(props);
    this.state = { title : 'ایجاد پروژه'}
  }
  render(){
    return <button className="btn btn-primary btn-rec"> {this.state.title} </button>;
  }
}
module.exports= DashboardButton;

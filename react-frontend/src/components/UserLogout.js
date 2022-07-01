import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import ReqCard from './UserReqCardPendingApplied';
import Header from './Header';

class UserLogout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reqqs: []
    };
  }

  componentDidMount() {
    localStorage.removeItem("token");
    window.location.href = "https://mern-nav.herokuapp.com/";
    
      
  };
  

  render() {
      return(
          <></>
      )
}
}

export default UserLogout;
import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Link, useParams } from 'react-router-dom';

import Header from './Header';

class ViewProfessionalProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reqqs: []
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("professional-token");
    if(!token)
    {
      window.location.href = "https://mern-nav.herokuapp.com/login-as-professional";
    }
    const u = jwtDecode(token);
    console.log(u.id);
    
    axios
      .get('https://47a8-103-81-212-22.ngrok.io/api/professionals/view-profile/'+u.id,
      {
       headers: { 'ngrok-skip-browser-warning':'5'}
      }
      )
      .then(res => {
        this.setState({
          reqqs: res.data
         })
         
      })
      .catch(err =>{
        console.log('Error from Profile');
      })
      
  };
  

  render() {
    const reqqs = this.state.reqqs;
    //console.log("PrintBook: " + JSON.stringify(reqqs));
    

    return (
      <div>
<div className="dashboard-top-header">
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          
        <Link to='/'><img src="../img/logo.jpg"/></Link>
        </div>
        <div className="col-md-7">
      
        </div>
        <div className="col-md-3">
          
        </div>
      </div>
      </div>
      
      </div>
      <div className="container-fluid">
      <div className='row'>
        <Header />
        <div className='col-md-10 menu-right'>
      
        <div className="dashboard-right ">
    <div className="dashboard-cart">
        <h2 className="page-title">Profile</h2>
<div className="row">
  <div className="col-md-6 "><p><strong>Name:</strong> {reqqs.name}</p></div>
      <div className="col-md-6 "><p><strong>Email:</strong> {reqqs.email}</p></div>
      <div className="col-md-6 "><p><strong>Experience:</strong> {reqqs.experience} years</p></div>
      <div className="col-md-6 "><p><strong>Office Address:</strong> {reqqs.office_address}</p></div>
      <div className="col-md-6 "><p><strong>Radius to Cater:</strong> {reqqs.radius_to_cater}</p></div>
      <div className="col-md-6 "><p><strong>Registered Address:</strong> {reqqs.registered_address}</p></div>
      <div className="col-md-6 "><p><strong>Zipcode:</strong> {reqqs.zipcode}</p></div>
      <div className="col-md-6 "><p><strong>City:</strong> {reqqs.city}</p></div>
      <div className="col-md-6 "><p><strong>Standard Fees:</strong> {reqqs.standard_fees}</p></div>
  </div>
        
    </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      
    );
  }
}


export default ViewProfessionalProfile;
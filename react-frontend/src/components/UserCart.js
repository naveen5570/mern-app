import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';
import Header from './Header';
import jwtDecode from 'jwt-decode';
import Stripe from 'react-stripe-checkout';

class ProfessionalApplyRequestForm extends Component {
  
  constructor() {
    
    //console.log(id);
    
    super();
    this.state = {
      time_of_service:'',
      fees:'',
      request_applied:'',
      professional_id:'',
      application:[]
    };
    
  }

  componentDidMount() {
    const params = this.props.params;
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('https://1835-103-81-212-22.ngrok.io/api/applications/view-application/'+params.id)
      .then(res => {
        //console.log("Print-showapplicationDetails-API-response: " + JSON.stringify(res.data));
        this.setState({
          application: res.data
        })
      })
      .catch(err => {
        console.log("Error from viewAppDetails");
      })
  };

  

  



  

  render() {
    //const { id } = this.props;
    const { id } = this.props;
    const applications = this.state.application;
    console.log(applications);
    //console.log('test=>'+JSON.stringify(this.props));

    const handleToken = (totalAmount,token)=>{
        try{
          axios.post("https://c22c-103-81-212-68.ngrok.io/api/stripe/pay",{
            token: token.id,
            amount: totalAmount,
            req_id: applications.map((application) => (
              application.request_applied
            ))
          }).then(res => {
            //console.log("Print-showapplicationDetails-API-response: " + JSON.stringify(res.data));
            
            window.location.href = "https://mern-nav.herokuapp.com/hired-successfully"; 

          })
          .catch(err => {
            console.log("Error from viewAppDetails");
          });
    
        }catch(error){
          console.log(error);
        }
      }

    const tokenHandler = (token)=>{
        //alert('adadf');
        handleToken(100,token);
      }
    
    return (
<div>
      <div className="dashboard-top-header">
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          
        <Link to='/'><img src="https://mern-nav.herokuapp.com/img/logo.jpg"/></Link>
        </div>
        <div className="col-md-7">
      
        </div>
        <div className="col-md-3">
          
        </div>
      </div>
      </div>
      </div>
	  <div className='container-fluid'>
      <div className='row'>
      <div className="col-md-2 dash_menu">
        <div className="left_menu">
        <ul><li><a>Dashboard </a></li>
            <li><Link to='/create-request'>Create Request</Link></li>
            <li><Link to='/pending-requests'>Pending Requests</Link></li>
            <li className='active_dash'><Link to='/user-active-requests'>Active Requests</Link></li>
            
            <li><a>Closed Requests</a></li>
            <li><Link to='/request-applications-list'>Request Applications</Link></li>
            <li><Link to='/user-logout'>Logout</Link></li>
        </ul>
        </div>
        </div>
		<div className='col-md-10 menu-right'>
      <div className="dashboard-right ">
    <div className="dashboard-cart">
        <h2 className="page-title">Plumber</h2>
<div className="row"><div className="col-md-6 with_border_right"><h4>Pay Using</h4><p><Stripe  stripeKey="pk_test_51KqNoBEsO5lD4LSjMb0558uN5fHcBYw3ANIGpkRx25OOVgRdWffTxNlZTzsvV7PH4ikP18rTuZ8jPQoeeEv2r7oW00MOseB3Be" token={tokenHandler}  /></p></div><div className="col-md-6">
    <h4>Booking Summary</h4>
    <p className="cart-content">Service Type: {applications.map((application) => (
        <span>{application.appdetails.map((appdetail) => (<span>{appdetail.repair_explanation}</span>))}</span>
      ))}</p>
    <p className="cart-content">Estimated Service time: {applications.map((application) => (
        <span>{application.time_of_service} hrs</span>
      ))}</p>
    <p className="cart-content">Professional Name: {applications.map((application) => (
        <span>{application.professionaldetails.map((professionaldetail) => (<span>{professionaldetail.name}</span>))}</span>
      ))}</p>
    <p className="cart-content">Visitation Fee: {applications.map((application) => (
        <span>${application.fees}</span>
      ))}</p>
    <p className="cart-content">Total Service Amount: {applications.map((application) => (
        <span>${application.fees}</span>
      ))}</p>
    <p className="cart-content">Amount Payable: {applications.map((application) => (
        <span>${application.fees}</span>
      ))}</p>
    <p className="terms">By Proceeding you accept our T&C, privacy and cancellation policy</p>
    </div></div>
        
    </div>
      </div>
</div>
</div>
</div>
</div>

      


    );
  }

  
}

export default () => {
    const params = useParams();
    console.log(params);
  return (
      <ProfessionalApplyRequestForm params={params} />
  )
}

//export default ProfessionalApplyRequestForm;
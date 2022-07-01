import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';
import Header from './Header';
import Stripe from 'react-stripe-checkout';

class ViewApplication extends Component {
  
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
    const { id } = this.props;
    const applications = this.state.application;
    console.log(applications);
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
            <li><a>Pending Requests</a></li>
            <li><a >Active Requests</a></li>
            
            <li><a>Closed Requests</a></li>
            <li><Link to='/request-applications-list'>Request Applications</Link></li>
            <li><a>Logout</a></li>
        </ul>
        </div>
        </div>
      
		<div className='col-md-10 menu-right'>
      <div className="dashboard-right ">
    <div className="dashboard-cart">
        <h2 className="page-title">{applications.map((application) => (
        <span>{application.appdetails.map((appdetail) => (<span>{appdetail.repair_explanation}</span>))}</span>
      ))}</h2>
<div className="row">
  <div className="col-md-12 ">{applications.map((application) => (
        <span><strong>Estimated Time of Service:</strong> {application.time_of_service} hrs</span>
      ))}</div>
      <div className="col-md-12 ">{applications.map((application) => (
        <span><strong>Fees:</strong> ${application.fees}</span>
      ))}</div>
      <div className="col-md-12 ">{applications.map((application) => (
        <Link className="btn btn-info btn-right" to={'/hire/'+application._id}>Hire</Link>
      ))}</div>
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

export default () => {
    const params = useParams();
    //console.log(params);
  return (
      <ViewApplication params={params} />
  )
}

//export default ProfessionalApplyRequestForm;
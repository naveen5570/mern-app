import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Header from './Header';

class Professional extends Component {
  constructor() {
    super();
    this.state = {
      photo_id: '',
      registered_address: '',
      office_address: '',
      country: '',
      state_or_province: '',
      radius_to_cater: '',
      professional_card: '',
      status: '',
      name:'',
      
      description:'',
      city:'',
      zipcode:'',
      specialisation:'',
      experience:'',
      qualification:'',
      standard_fees:''
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
    
      
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    const token = localStorage.getItem("professional-token");
    const u = jwtDecode(token);
    e.preventDefault();
    
    const data = {
      photo_id: this.state.photo_id,
      registered_address: this.state.registered_address,
      office_address: this.state.office_address,
      country: this.state.country,
      state_or_province: this.state.state_or_province,
      radius_to_cater: this.state.radius_to_cater,
      professional_card: this.state.professional_card,
      status: this.state.status,
      name:this.state.name,
      
      description:this.state.description,
      city:this.state.city,
      zipcode:this.state.zipcode,
      specialisation:this.state.specialisation,
      experience:this.state.experience,
      qualification:this.state.qualification,
      standard_fees:this.state.standard_fees,
      user_id:u.id
      
    };

    axios
      .post('https://1835-103-81-212-22.ngrok.io/api/professionals/profile', data)
      .then(res => {
        this.setState({
          name:'',
          
          description:'',
          photo_id: '',
          registered_address: '',
          office_address: '',
          country: '',
          state_or_province: '',
          radius_to_cater: '',
          city:'',
          zipcode:'',
          specialisation:'',
          experience:'',
          qualification:'',
          fees:'',
          professional_card: '',
          status: ''
        });
        //alert("Profile updated");
        window.location.href = "https://mern-nav.herokuapp.com/profile-updated";
      })
      .catch(err => {
        //alert(err.data.msg);
        console.log("Error in professional-profile!");
      })
  };



  render() {
    /* const books = this.state.books;
    console.log("PrintBook: " + books);
    let bookList;

    if(!books) {
      bookList = "there is no book record!";
    } else {
      bookList = books.map((book, k) =>
        <BookCard book={book} key={k} />
      );
    }
*/
    return (

<div>
      <div className="dashboard-top-header">
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          
        <Link to='/'><img src="./img/logo.jpg"/></Link>
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
      
        <Header/>
		<div className='col-md-10 menu-right'>
      <div className="dashboard-right">
        <h1>Create Your Profile</h1>

        <form noValidate onSubmit={this.onSubmit} className="profile form" encType="multipart/form-data">
          <div className="card-box">
            <h4>Basic Information</h4>
            <div className="row">
              <div className="form-group col-md-6">
                <label className="form-label">What's Your Name</label>
                <input className="form-control" type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.onChange} />
              </div>
              <div className="form-group col-md-6">
                <label className="form-label">Upload your ID proof</label>
                <input className="form-control" type="file" name="photo_id" placeholder="Name" value={this.state.photo_id} onChange={this.onChange} />
              </div>
            </div>
            <div className="row">
              
              <div className="form-group col-md-12">
                <label className="form-label">Short description about yourself</label>
                <textarea className="form-control" name="description" placeholder="Type description here" value={this.state.description} onChange={this.onChange}></textarea>
              </div>
            </div>
          </div>
          <div className="card-box">
            <h4>Address</h4>

            <div className="row">
              <div className="col-md-12 form-group">
                <label className="form-label">Registered Address</label>
                <input className="form-control" type="text" name="registered_address" placeholder="Type Registered Address" value={this.state.registered_address} onChange={this.onChange} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <label className="form-label">Office Address</label>
                <input className="form-control" type="text" name="office_address" placeholder="Type Office Address" value={this.state.office_address} onChange={this.onChange} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <label className="form-label">Country<span>*</span></label>
                <select className="form-control" name="country" value={this.state.country} onChange={this.onChange} >
                  <option value="Canada">Canada</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label className="form-label">Province<span>*</span></label>
                <select className="form-control" name="state_or_province" value={this.state.state_or_province} onChange={this.onChange} >
                <option value="Alberta">Alberta</option>
	<option value="British Columbia">British Columbia</option>
	<option value="Manitoba">Manitoba</option>
	<option value="New Brunswick">New Brunswick</option>
	<option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
	<option value="Northwest Territories">Northwest Territories</option>
	<option value="Nova Scotia">Nova Scotia</option>
	<option value="Nunavut">Nunavut</option>
	<option value="Ontario">Ontario</option>
	<option value="Prince Edward Island">Prince Edward Island</option>
	<option value="Quebec">Quebec</option>
	<option value="Saskatchewan">Saskatchewan</option>
	<option value="Yukon">Yukon</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <label className="form-label">City<span>*</span></label>
                <input className="form-control" type="text" name="city" placeholder="Type Here" value={this.state.city} onChange={this.onChange} />
              </div>
              <div className="col-md-6 form-group">
                <label className="form-label">Postal Code<span>*</span></label>
                <input className="form-control" type="text" name="zipcode" placeholder="Type Here" value={this.state.zipcode} onChange={this.onChange} />
              </div>
            </div>
            
          </div>
          <div className="card-box">
            <h4>Professional Information</h4>

            <div className="row form-group">

              <label className="form-label col-md-12">Choose your specialisation<span>*</span></label>

              <div className="form-check col-md-3">
                <div className='check-box'>
                  <input type="checkbox" name="specialisation" className="form-check-input" value="Plumbing Services" /><label className="form-check-label" >Plumbing Services</label>
                </div>
              </div>
              <div className="form-check col-md-3">
                <div className='check-box'>
                  <input type="checkbox" name="specialisation" className="form-check-input" value="Carpenter Services" /><label className="form-check-label" >Carpenter Services</label>
                </div>
              </div>

              <div className="form-check col-md-3">
                <div className='check-box'>
                  <input type="checkbox" name="specialisation" className="form-check-input" value="Pest Control Services" /><label className="form-check-label" >Pest Control Services</label>
                </div>
              </div>
              <div className="form-check col-md-3">
                <div className='check-box'>
                  <input type="checkbox" name="specialisation" className="form-check-input" value="Roofing Services" /><label className="form-check-label" >Roofing Services</label>
                </div>
              </div>
              <div className="form-check col-md-3">
                <div className='check-box'>
                  <input type="checkbox" name="specialisation" className="form-check-input" value="Ac Repair Services" /><label className="form-check-label" >Ac Repair Services</label>
                </div>
              </div>
              <div className="form-check col-md-3">
                <div className='check-box'>
                  <input type="checkbox" name="specialisation" className="form-check-input" value="Electrician Services"/><label className="form-check-label" >Electrician Services</label>
                </div>
              </div>
              <div className="form-check col-md-3">
                <div className='check-box'>
                  <input type="checkbox" name="specialisation" className="form-check-input" value="Cleaning and Disinfection Services"/><label className="form-check-label" >Cleaning & Disinfection</label>
                </div>
              </div>
              <div className="form-check col-md-3">
                <div className='check-box'>
                  <input type="checkbox" name="specialisation" className="form-check-input" value="Electrical Appliance Repair" /><label className="form-check-label" >Electrical Appliance Repair</label>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-md-6 form-group">
                <label className="form-label">Experience<span>*</span></label>
                <select className="form-control" name="experience" value={this.state.experience} onChange={this.onChange} >
                  <option value="">Choose Experience (in years)</option>
                  <option value="5">5</option>
                  <option value="5-10">5-10</option>
                  <option value="10-15">10-15</option>
                  <option value="15-20">15-20</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label className="form-label">Qualification<span>*</span></label>
                <select className="form-control" name="qualification" value={this.state.qualification} onChange={this.onChange} >
                  <option value="">Qualification</option>
                  <option value="Post Graduate">Post Graduate</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <label className="form-label">Standard fees<span>*</span></label>
                <input className="form-control" type="text" name="standard_fees" placeholder="$0.00" value={this.state.standard_fees} onChange={this.onChange} />
              </div>
              <div className="form-group col-md-6">
                <label className="form-label">Upload your Professional card</label>
                <input className="form-control" type="file" name="professional_card" placeholder="Name" value={this.state.professional_card} onChange={this.onChange} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <label className="form-label">Please select radius which you can cater to<span>*</span></label>
                <input className="form-control" type="text" name="radius_to_cater" placeholder="Radius in kms" value={this.state.radius_to_cater} onChange={this.onChange} />
              </div>
              </div>
              <input type="hidden" name='status' value="1" />
              <input type="hidden" name='user_id' value={this.state.user_id} />
            <input className="form-control button-nav" name="submit" value="Update Profile" type="submit"  />
          </div>
        </form>

      </div>
</div>
</div>
</div>
</div>


    );
  }
}

export default Professional;
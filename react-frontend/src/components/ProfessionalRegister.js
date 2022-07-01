import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProfessionalRegister extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email:'',
      password:''
    };
  }



  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      email:this.state.email,
      password:this.state.password
    };

    axios
      .post('https://1835-103-81-212-22.ngrok.io/api/professionals',data)
      .then(res => {
        this.setState({
          name: '',
          email:'',
          password:''
        });
        //alert(res.data.msg);
        if(res.status==200)
        {
        window.location.href = "https://mern-nav.herokuapp.com/professional-phone-otp";
        }
        else
        {
          alert(res.data.msg);
        }
      })
      .catch(err => {
        alert(err.data.msg);
        console.log("Error in CreateBook!");
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
      <div className="top-header">
      <div className="container">
      <div className="row">
        <div className="col-md-2">
        <Link to='/'><img src="./img/logo.jpg"/></Link>
        </div>
        <div className="col-md-4  ">
      
        </div>
        <div className="col-md-6">
          <ul><li><Link to="/register-as-professional">Register As Professional</Link></li><li><Link to="/login">Sign In</Link></li><li><Link to="/" className='button-nav'>Sign Up</Link></li></ul>
        </div>
      </div>
      </div>
      </div>
      <div className='col-md-12 banner-header'><h1>Lorem Ipsum</h1></div>
      <div className="middle-section">
      
        <div className="middle">
        
        <div className="row">
          
          <div className="col-md-5 left_section">
            <div className="content-left">
<h3>Welcome Back!</h3>
<p>To keep connected with us please<br/>login with your personal info </p>
<Link to="/login-as-professional" className="button-nav">
                  Sign in
              </Link>
          </div></div>
          <div className="col-md-7 right_section">
          <div className="content-right">
          <h1>Create Your Service<br/>Professional Account</h1>
<div className="form-register"><p>or use your email for registration :</p>
<form noValidate onSubmit={this.onSubmit}>
<input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.onChange}/>
<input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
<input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
<input name="submit" value="Sign up" type="submit" className="button-nav"/>
</form>

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

export default ProfessionalRegister;
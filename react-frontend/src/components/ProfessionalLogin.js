import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UserLogin extends Component {
  
  constructor() {
    super();
    this.state = {
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
      email:this.state.email,
      password:this.state.password,
      
    };

    axios
      .post('https://1835-103-81-212-22.ngrok.io/api/professionals/login', data)
      .then(res => {
        this.setState({
          email:'',
          password:''
        });
        //alert(res.data.msg);
        //window.location.href='/';
        //setLoginUser(res.data.user);
        localStorage.setItem('professional-token', res.data.token);
        localStorage.setItem('name', res.data.name);
        
        if(res.status==200)
        {
          console.log(res.data.city);
        if(res.data.city!=undefined)
        {
        window.location.href = "https://mern-nav.herokuapp.com/request-list"; 
        }
        else
        {
          window.location.href = "https://mern-nav.herokuapp.com/professional-profile";   
        }
        }
        else
        {
          alert(res.data.msg); 
        }
      })
      .catch(err => {
        alert('Email/Password Mismatch');
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
          <div className="col-md-7 right_section login">
            
          <div className="content-right">
          <h3>Sign in</h3>
<div className="form-register"><p>or use your email account :</p>
<form noValidate onSubmit={this.onSubmit}>
<input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
<input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
<p><Link to="/forgot-password">Forgot your password</Link></p>
<input name="submit" value="Sign in" type="submit" className="button-nav"/>
</form>
</div>
            </div>
          </div>
          <div className="col-md-5 left_section login">
          <div className="content-left">
<h3>Hello, Friend!</h3>
<p>Enter your personal details<br/>and start journey with us </p>
<Link to="/register-as-professional" className="button-nav1">
                  Sign Up
              </Link>
          </div>
          </div>
        </div>
        </div>
      </div>
	  </div>
    );
  }
}

export default UserLogin;
import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      
      email:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      
      email:this.state.email
      
    };

    axios
      .post('https://1835-103-81-212-22.ngrok.io/api/users/forgot-password', data)
      .then(res => {
        this.setState({
          
          email:''
          
        });
        alert(res.data.msg);
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
          <img src="./img/logo.jpg"/>
        </div>
        <div className="col-md-4  ">
      
        </div>
        <div className="col-md-6">
          <ul><li><a>Register As Professional</a></li><li><a>Sign In</a></li><li><a className='button-nav'>Sign Up</a></li></ul>
        </div>
      </div>
      </div>
      </div>
      <div className='col-md-12 banner-header'><h1>Lorem Ipsum</h1></div>
      <div className="middle-section">
        <div className="middle">
        <div className="row">
          <div className="col-md-5 left_section">
            </div>
          <div className="col-md-7 right_section reset-password">
          <div className="content-right ">
          <h3>Reset your Password</h3>
<div className="form-register"><p>Request an email reset link</p>
<form noValidate onSubmit={this.onSubmit}>

<input type="email" name="email" placeholder="Email address" value={this.state.email} onChange={this.onChange}/>
<input name="submit" value="Send Link" type="submit" className="button-nav"/>
<p><Link to='/'>Not registered? Sign up</Link></p>
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

export default ForgotPassword;
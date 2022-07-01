import React, { Component } from 'react';
import '../App.css';
import '../script.js';
import axios, { Axios } from 'axios';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      phone:''
    };
  }



  
  

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
      <div className="col-md-2 dash_menu">
        <div className="left_menu">
        <ul><li><a>Dashboard </a></li>
            <li><Link to="/request-list">Open Requests</Link></li>
            <li><Link to="/applied-requests">Applied Requests</Link></li>
            <li><Link to="/professional-active-requests">Active Requests</Link></li>
            <li><Link to="/completed-requests">Completed Requests</Link></li>
            <li><a>My Ratings</a></li>
            <li><Link to="/view-professional-profile">My Profile</Link></li>
            <li><Link to="/professional-logout">Logout</Link></li>
        </ul>
        </div>
        
        </div>
        
        
    );
  }
}

export default Header;
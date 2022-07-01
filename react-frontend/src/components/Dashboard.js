import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get('https://1835-103-81-212-22.ngrok.io/api/users', {
        headers: {
         'x-auth-header':localStorage.getItem('token') 
        }
      })
      .then(res => {
        this.setState({
          users: res.data
        })
      })
      .catch(err =>{
        console.log('Error from users');
      })
  };


  render() {
    const users = this.state.users;
    console.log("PrintUser: " + users);
    let userList;

    if(!users) {
      userList = "there is no book record!";
    } else {
      userList = users;
    }

    return (
      <div>
      <div className="dashboard-top-header">
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          
          <img src="./img/logo.jpg"/>
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
            <li><a>Open Requests</a></li>
            <li><a>Applied Requests</a></li>
            <li><a>Completed Requests</a></li>
            <li><a>My Ratings</a></li>
            <li><a>My Profile</a></li>
            <li><a>Logout</a></li>
        </ul>
        </div>
        </div>
      <div className='col-md-10'>
      
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Users List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New User
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
          {
                  userList.map((user) => {
                    return (
                      <div>
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>
                      </div>
                    );
                  })
                } 
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

export default Dashboard;
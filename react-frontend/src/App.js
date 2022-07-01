import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import UserRegister from './components/UserRegister';
import UserLogin from './components/UserLogin';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import ProfessionalRegister from './components/ProfessionalRegister';
import ProfessionalLogin from './components/ProfessionalLogin';
import Professional from './components/Professional';
import Request from './components/Request';
import OtpPhone from './components/OtpPhone';
import OtpVerify from './components/OtpVerify';
import ThanksSignup from './components/ThanksSignup';
import RequestCreated from './components/RequestCreated';
import RequestList from './components/RequestList';
import ApplicationList from './components/RequestApplication';
import ProfileUpdated from './components/ProfileUpdated';
import ProfessionalOtpVerify from './components/ProfessionalOtpVerify';
import ProfessionalOtpPhone from './components/ProfessionalOtpPhone';
import ProfessionalApplyRequestForm from './components/ProfessionalApplyRequestForm';
import ViewApplication from './components/ViewApplication';
import StripeRegister from './components/StripeRegister';
import UserCart from './components/UserCart';
import AppliedRequest from './components/AppliedRequest';
import CompletedRequest from './components/CompletedRequest';
import ViewProfessionalProfile from './components/ViewProfessionalProfile';
import ViewRequest from './components/ViewRequest';
import ViewRequestUser from './components/ViewRequestUser';
import PendingRequests from './components/PendingRequests';
import RequestApplicationsList from './components/RequestApplicationsList';
import UserLogout from './components/UserLogout';
import ProfessionalLogout from './components/ProfessionalLogout';
import HiredSuccessfully from './components/HiredSuccessfully';
import ActiveRequests from './components/ActiveRequests';
import ProfessionalActiveRequests from './components/ProfessionalActiveRequests';
import UserViewProfessionalProfile from './components/UserViewProfessionalProfile';

function App() {
  
    return (
      <Router>
        <div className="app">
          
          <Routes>
          <Route path='/' element={<UserRegister/>} />
          <Route path='/login' element={<UserLogin/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/user-list' element={<Dashboard/>} />
          <Route exact path='/register-as-professional' element={<ProfessionalRegister/>} />
          <Route exact path='/login-as-professional' element={<ProfessionalLogin/>} />
          <Route exact path='/professional-profile' element={<Professional/>} />
          <Route exact path='/create-request' element={<Request/>} />
          <Route exact path='/phone-otp' element={<OtpPhone/>} />
          <Route exact path='/otp-verify' element={<OtpVerify/>} />
          <Route exact path='/professional-phone-otp' element={<ProfessionalOtpPhone/>} />
          <Route exact path='/professional-otp-verify' element={<ProfessionalOtpVerify/>} />
          <Route exact path='/thanks-signup' element={<ThanksSignup/>} />
          <Route exact path='/request-created' element={<RequestCreated/>} />
          <Route exact path='/profile-updated' element={<ProfileUpdated/>} />
          <Route exact path='/request-list' element={<RequestList/>} />
          <Route exact path='/application-list/:id' element={<ApplicationList/>} />
          <Route exact path='/view-application/:id' element={<ViewApplication/>} />
          <Route  path='/request-apply/:id' element={<ProfessionalApplyRequestForm/>} />
          <Route  path='/stripe-connect' element={<StripeRegister/>} />
          <Route path='/hire/:id' element={<UserCart/>} />
          <Route exact path='/applied-requests' element={<AppliedRequest/>} />
          <Route exact path='/completed-requests' element={<CompletedRequest/>} />
          <Route exact path='/view-professional-profile' element={<ViewProfessionalProfile/>} />
          <Route exact path='/view-professional/:id' element={<UserViewProfessionalProfile/>} />
          <Route exact path='/view-request/:id' element={<ViewRequest/>} />
          <Route exact path='/user-view-request/:id' element={<ViewRequestUser/>} />
          <Route exact path='/pending-requests' element={<PendingRequests/>} />
          <Route exact path='/request-applications-list' element={<RequestApplicationsList/>} />
          <Route exact path='/user-logout' element={<UserLogout/>} />
          <Route exact path='/professional-logout' element={<ProfessionalLogout/>} />
          <Route exact path='/hired-successfully' element={<HiredSuccessfully/>} />
          <Route exact path='/user-active-requests' element={<ActiveRequests/>} />
          <Route exact path='/professional-active-requests' element={<ProfessionalActiveRequests/>} />
          
          </Routes>
        </div>
      </Router>
    );
  }


export default App;
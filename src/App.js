import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import LogIn from './Components/LogIn/LogIn/LogIn';
import { useState } from 'react';
import { createContext } from 'react';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddService from './Components/AddService/AddService';
import AddReview from './Components/AddReview/AddReview';
import AddAdmin from './Components/AddAdmin/AddAdmin';
import Book from './Components/Book/Book';
import PrivateRoute from './Components/LogIn/PrivateRoute/PrivateRoute'
import BookingList from './Components/BookingList/BookingList';
import Bookings from './Components/Bookings/Bookings';
import AllBooking from './Components/AllBooking/AllBooking';
import Manage from './Components/Manage/Manage';
export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
   <UserContext.Provider value= {[loggedInUser, setLoggedInUser]}>
     <small className="text-secondary">Email: {loggedInUser.email}</small>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute  path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute  path="/addService">
          <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute  path="/addReview">
          <AddReview></AddReview>
        </PrivateRoute>
        <PrivateRoute  path="/addAdmin">
          <AddAdmin></AddAdmin>
        </PrivateRoute>
        <PrivateRoute path="/book/:_id">
          <Book></Book>
        </PrivateRoute>
        <PrivateRoute path="/bookinglist">
          <Bookings></Bookings>
        </PrivateRoute> 
        <PrivateRoute path="/allBooking">
          <AllBooking></AllBooking>
        </PrivateRoute>
        <PrivateRoute path="/manage">
          <Manage></Manage>
        </PrivateRoute>
        <Route  path="/login">
          <LogIn></LogIn>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;

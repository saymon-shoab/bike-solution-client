import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import './BookingList.css'
const BookingList = ({book}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(book)
    return (
        <div>
            <div className="col-md-3 ">
  
            </div>
            <div className="container-fluid col-md-8 box">
                <h5>Consumer Name: {loggedInUser.name}</h5>
                <h6>service name: {book?.name}</h6>
                <h5>Description:</h5> <small className="text-secondary">  {book?.description}</small>
            </div>
        </div> 
    );
};

export default BookingList;
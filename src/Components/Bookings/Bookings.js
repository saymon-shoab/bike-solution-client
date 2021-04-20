import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import BookingList from '../BookingList/BookingList';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const Bookings = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    const [bookings, setBookings] = useState([]);
    useEffect( () => {
        fetch('https://cryptic-lake-64320.herokuapp.com/bookings?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data=> setBookings(data))
    },[])
    return (
        <div >
            <div className="div">
                <Sidebar></Sidebar>
            </div>
            {
                bookings.map(book => <BookingList   book={book} ></BookingList> )
            }
        </div>
    );
};

export default Bookings;
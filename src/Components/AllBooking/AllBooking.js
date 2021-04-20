import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import AllBookingList from '../AllBookingLiast/AllBookingList';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AllBooking = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allBookings, setAllBookings] =useState([])
    useEffect(()=>{
        fetch('https://cryptic-lake-64320.herokuapp.com/allBookings')
        .then(res => res.json())
        .then(data=> setAllBookings(data));
    },[])
    return (
        <div>
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div>
                {    
                    allBookings.map(booking => <AllBookingList booking={booking}> </AllBookingList> )
                }
            </div>
        </div>
    );
};

export default AllBooking;
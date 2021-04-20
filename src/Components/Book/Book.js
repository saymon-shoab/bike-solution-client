import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './Book.css'
const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [booking, setBooking] = useState({});
    const {_id} = useParams();
    useEffect(()=>{
        fetch(`https://cryptic-lake-64320.herokuapp.com/service/${_id}`)
        .then(res => res.json())
        .then(data => setBooking(data))
    },[_id])



    const  handleBooking = () => {
        const newBooking = {
            ...loggedInUser,
            name: booking.name,
            price: booking.price,
            description: booking.description
        };
        fetch('https://cryptic-lake-64320.herokuapp.com/addBooking',{
            method: 'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(newBooking)
        })
        .then(res => res.json())
        .then(data=>{
            if(data){
                alert('booking success')
            }
        })
    }

   



    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-3 card">
                <h4>Book</h4>
                <h6>user name: {loggedInUser.name}</h6>
                <h5> service name: {booking?.name}</h5>
                
                <p>Our service Charge:${booking?.price}</p>
                
                 <button className="btn-danger" onClick={handleBooking}> booking</button>
            </div>
            <div className="col-md-4 ">
            <ProcessPayment></ProcessPayment>
            </div>
        </div>
    );
};

export default Book;
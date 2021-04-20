import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../image/banner.jpg'
const HeaderMain = () => {
    return (
        <main className="row mt-5">
            <div className="col-md-4 offset-md-1 m-5">
               <h1 className="text-brand">  WE CARE ABOUT <br/> YOUR MACHINE</h1>
               <small className="text-secondary">If you want to service your motor bike , then don,t west your time , click below the booking button. your happiness is our satisfaction</small><br/>
               <Link to=""><button className="btn-brand text-brand"> Booking NOW</button></Link>
            </div>
            <div className="col-md-6">
                <img src={banner} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;
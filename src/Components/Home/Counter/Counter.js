import React from 'react';
import { useSpring, animated } from 'react-spring'
const Counter = () => {

      
    return (
        <div className="container text-center">
            <h4> accountability</h4>
            <div className="row m-5">
                <div className="col-md-3 col-sm-6">
                   <p>Happy Customers </p>
                   <h4>250</h4>
                </div>
                <div className="col-md-3 col-sm-6">
                <p>bike wash </p>
                   <h4>500</h4>
                </div>
                <div className="col-md-3 col-sm-6">
                <p>regular service </p>
                   <h4>300</h4>
                </div>
                <div className="col-md-3 col-sm-6">
                <p>Master service </p>
                   <h4>120</h4>
                </div>
            </div>
        </div>
    );
};

export default Counter;

import React from 'react';
import reFoto from '../../../image/review.jpg'
const ReviewDetails = ({review}) => {
    return (
        <div className="col-md-4 col-sm-6  text-center">
            <img style={{width:'50px'}}  src={reFoto} alt=""/>
            <h3>{review.name}</h3>
            <h5>{review.service}</h5>
            <small className="text-secondary">{review.description}</small>

        </div>
    );
};

export default ReviewDetails;
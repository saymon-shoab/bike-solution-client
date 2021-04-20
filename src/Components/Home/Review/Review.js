import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Review = () => {
        
const [reviews, setReviews] = useState([])
useEffect( () => {
    fetch('https://cryptic-lake-64320.herokuapp.com/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
}, [])


    return (
        <section className="container m-5">
        <div className="text-center m-5">
          <h4 > Client Say About us</h4>
        </div>
         <div className="row">
          
             {
               reviews.map(review => <ReviewDetails  key={review._id} review={review} ></ReviewDetails>)  
             }
         </div>
      </section>
    );
};

export default Review;
import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddReview = () => {
    const [review , setReview] = useState({});
    const handleBlur = e =>{
        const  newReview = {...review}
        newReview[e.target.name]= e.target.value 
        setReview(newReview);
    }

      const handleSubmit = ()=>{
        const formData = new FormData()
       
        formData.append('name', review.name);
        formData.append('service', review.service);
        formData.append('description', review.description);
        
      
        fetch('https://cryptic-lake-64320.herokuapp.com/addReview', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
      }
     
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
                <h1 className="text-success">review our services</h1>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">

                        <input onBlur={handleBlur} type="Text" class="form-control" name="name" placeholder="Your Name" />

                    </div>
                    <div class="form-group">
                        
                        <input onBlur={handleBlur} type="text" class="form-control" name="service" placeholder="Company,s service" />
                    </div>
                    <div class="form-group">
                        
                    <textarea onBlur={handleBlur} name="description" className="form-control" id="" cols="15" rows="5" placeholder="Description *"></textarea>
                    </div>
                  
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;
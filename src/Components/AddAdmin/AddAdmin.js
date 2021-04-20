import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddAdmin = () => {
    const [admin, setAdmin] = useState({});
    const handleBlur = e =>{
        const  newAdmin = {...admin}
        newAdmin[e.target.name]= e.target.value 
        setAdmin(newAdmin);
    }
    
    const handleSubmit = ()=>{
        const formData = new FormData()
       
        formData.append('email', admin.email);
      
      
        fetch('https://cryptic-lake-64320.herokuapp.com/addAdmin', {
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
                <h1 className="text-success">Make A Admin</h1>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">

                        <input onBlur={handleBlur} type="text" class="form-control" name="email" placeholder="Your email" />

                    </div>
                    
                  
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;
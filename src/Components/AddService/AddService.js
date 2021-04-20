import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    const [info, setInfo]= useState({})
    const [file, setFile]= useState(null)
    const handleBlur = e =>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    
     const handleFileChange = (e) => {
         const newFile = e.target.files[0];
         setFile(newFile);
     }

      
     const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('description', info.description);
        formData.append('price', info.price);
      
        fetch('https://cryptic-lake-64320.herokuapp.com/addService', {
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
            <div className="col-md-7 ms-5">
                <h1>Add A Service</h1>
                <form onSubmit={handleSubmit}>
                   
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur}   type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Description</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Service Description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Price</label>
                        <input onBlur={handleBlur}  type="number" className="form-control" name="price" placeholder="Price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange}  type="file" className="form-control"  placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-brand">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;
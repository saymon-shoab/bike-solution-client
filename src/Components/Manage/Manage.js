import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import ManageProducts from '../ManageProducts/ManageProducts';

const Manage = () => {
    const [services, setServices] =useState([])
    useEffect(()=>{
        fetch('https://cryptic-lake-64320.herokuapp.com/services')
        .then(res => res.json())
        .then(data=> setServices(data))
    },[])
    return (
        
            <div className="row">
            {
                services.map(service=> <ManageProducts service={service}></ManageProducts>)
            }
            </div>
        
    );
};

export default Manage;
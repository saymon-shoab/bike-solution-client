import React from 'react';
import { useHistory } from 'react-router';
import './ServiceDetail.css'
const ServiceDetail = ({service}) => {
    const history = useHistory();
    const handleBook = (id) =>{
        history.push(`/book/${id}`);
    }
    

    return (
        <div className="col-md-4 col-sm-6 text-center animate">
            <h4>{service.name}</h4>
           { 
              service.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${service.image.img}`}/>
              :
            <img style={{width:'100px',height:'100px'}} src={`https://cryptic-lake-64320.herokuapp.com/${service.img}`} alt=""/>
           }
            <p>{service.description}</p>
            <p>${service.price}</p>
            <button className="btn-brand" onClick={() => handleBook(service._id)}>Book Now</button>
        </div>
    );
};

export default ServiceDetail;
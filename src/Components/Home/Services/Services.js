import React, { useEffect, useState } from 'react';
import wash from '../../../image/wash.jpg'
import regular from '../../../image/regular.jpg'
import master from '../../../image/master.jpg'
import ServiceDetail from '../ServiceDetail/ServiceDetail';


// const servicesData=[
//     {
//       name: 'bike wash',
//       price:200,
//       img:wash

//     },
//     {
//         name: 'regular Service',
//         price:400,
//         img:regular
//     },
//     {
//         name: 'Master service',
//         price:1500,
//         img:master
//     }, 
// ]




const Services = () => {
    
    
const [services, setServices] = useState([])
useEffect( () => {
    fetch('https://cryptic-lake-64320.herokuapp.com/services')
    .then(res => res.json())
    .then(data => setServices(data))
}, [])



    return (
        <section className="container m-5">
          <div className="text-center m-5">
            <h4 className="text-brand">Our services</h4>
            <small className="text-secondary">Your happiness is our satisfaction</small>
          </div>
           <div className="row">
               {
                   services.map(service=> <ServiceDetail  key={service._id} service={service}></ServiceDetail>)
               }
           </div>
        </section>
    );
};

export default Services;
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
    
      <footer >
        <div  className="container">
        <div className="row">
             <div className="col-md-3 col-sm-10 m-5 ">
                <p>H#00(0th Floor),road:#00,<br/>
                DOHS,Mohakhali,Dhaka,Bangladesh </p>
             </div>
             <div className="col md-4  ">
                 <ul>
                   <li>Links</li>
                   <li><a href="#"></a>Home </li>
                   <li><a href="#"></a>About </li>
                   <li><a href="#"></a>Review </li>
                   <li><a href="#"></a>Services </li>
                 </ul>
             </div>
             <div className="col md-4  ">
               <h5>About</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sed dicta possimus, quia minus adipisci expedita, vero eos dolorum excepturi consequatur pariatu.
                </p>
             </div>
           </div>
           <p className="text-center"> Copyright || Bike Solution || Saymon Shoab || 2021</p>
        </div>
       
      </footer>
      
    );
};

export default Footer;
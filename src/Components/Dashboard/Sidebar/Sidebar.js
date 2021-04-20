import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar,faList, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';



const Sidebar = () => {
      
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [ isAdmin, setIsAdmin]= useState(false);

    useEffect(()=>{
        fetch('https://cryptic-lake-64320.herokuapp.com/isAdmin',{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    },[])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
        <ul className="list-unstyled">
         { isAdmin && <div>
              <li>
                <Link to="/allBooking" className="text-white">
                    <FontAwesomeIcon icon={faList} /> <span>Order List</span>
                </Link>
            </li>
            <li>
                <Link to="/addService" className="text-white">
                    <FontAwesomeIcon icon={faCog} /> <span>Add Service</span>
                </Link>
            </li>
          
                <li>
                    <Link to="/addAdmin" className="text-white">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manage" className="text-white" >
                        <FontAwesomeIcon icon={faCog} /> <span>Manage Service</span>
                    </Link>
                </li>
            </div>}
           
                <li>
                    <Link to="/book/:id" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/bookinglist" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" className="text-white" >
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Review</span>
                    </Link>
                </li>
               
           
        </ul>
        <div>
            <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
        </div>
    </div>
    );
};

export default Sidebar;
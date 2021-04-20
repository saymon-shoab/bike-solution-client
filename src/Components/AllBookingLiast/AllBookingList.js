import React, { useContext } from 'react';
import { UserContext } from '../../App';

const AllBookingList = ({booking}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
             <table className=" table table-borderless">
            
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Service-Name</th>
                <th className="text-secondary" scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                
               
                        
                    <tr>
                        <td>{loggedInUser.name}</td>
                        <td>{booking.email}</td>
                        <td>{booking.name}</td>
                        <td>{booking.price}</td>
                    </tr>
                    
                
            </tbody>
        </table>
        </div>
    );
};

export default AllBookingList;
import React from 'react';
import reFoto from '../../image/delete.jpg'



const ManageProducts = ({service}) => {

    const deleteProduct = id => {
        console.log(id)
        fetch(`https://cryptic-lake-64320.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            console.log('delete successfully')
        })
    }
    return (
        <div className=" container-fluid ">
          
            <div className="col-md-12">
            <table className=" table table-borderless">
            
            <thead>
                <tr>
             
                <th className="text-secondary" scope="col">Service-Name</th>
                <th className="text-secondary" scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                
               
                        
                    <tr>
                     
                        <td>{service?.name}</td>
                        <td>{service.price}</td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={()=>deleteProduct(service._id)}> <img style={{width:'30px'}} src={reFoto} alt=""/> Delete </button>
                        </td>
                    </tr>
                
              </tbody>
            </table>
            </div>
       
        </div>
    );
};

export default ManageProducts;
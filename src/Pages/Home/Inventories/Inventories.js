import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'
const Inventories = () => {
    const navigate = useNavigate();
    const navigateToManageservice =() =>{
        navigate("/manageall");
    }
    const [inventoryes, setinventoryes] = useState([]);
    const limited = inventoryes.slice(0,6);

    useEffect( ()=>{
        fetch('https://nameless-ridge-09787.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setinventoryes(data));
    }, [])
    
    return (
        <div id="inventories" className='container mb-5'>
            <p className="top mt-5">Category</p>
            <h1 className='service '>We Offer Best Inventories</h1>
            <div className="services">
            {
                limited.map(inventory => <Inventory
                    key={inventory._id}
                    inventory={inventory}
                >
                </Inventory>)
            }
            <button onClick={() => navigateToManageservice()} className='btn btn-primary btn-pop posi'>Manage all services</button>
            </div>
        </div>
       
    );
};

export default Inventories;
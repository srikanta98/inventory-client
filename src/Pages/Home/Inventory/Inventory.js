import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Inventory = ({inventory}) => {
    const {_id,quantity, name, img,suppliar, description, price} = inventory;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/inventory/${id}`);
    }
    useEffect( ()=>{
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease',
        })
    });
    return (
        <div className='services-service bg mt-5' data-aos='fade-up' >
            <img className='w-50' src={img} alt="" />
            <h3>Name:{name}</h3>
            <p>Price:{price}</p>
            <p>Quantity:{quantity}</p>
            <p>Suppliar:{suppliar}</p>
            <p></p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary btn-pop'>Update</button>
        </div>
        
    );
};

export default Inventory;
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import Myitem from './Myitem';


const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
   
    const navigate = useNavigate();
            const url = `https://nameless-ridge-09787.herokuapp.com/order?email=${user.email}`;
            useEffect( () => {
        
               fetch(url)
               .then(res => res.json())
               .then(data => setOrders(data))
        
            }, [setOrders]);
        
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://nameless-ridge-09787.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
            })
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Your orders: {orders.length}</h2>
           
        </div>
    );
};

export default Order;
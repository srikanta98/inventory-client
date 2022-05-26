// import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useServiceDetail from '../../hooks/useServiceDetail';
import Inventories from '../Home/Inventories/Inventories';
import './Servicedetail.css'


const ServiceDetail = () => {
    const { register, handleSubmit } = useForm();
    const { inventoryId } = useParams();
    const [user] = useAuthState(auth);
//    const [item,setitem] = useState({});
   const url = `https://nameless-ridge-09787.herokuapp.com/inventory/${inventoryId}`
    const [inventoryes, setinventoryes] = useState({});
    // const { price} = inventoryes;
    useEffect( ()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setinventoryes(data));
    }, [url, inventoryes])

    // const handledeliver =() =>{
    //     const {quantity, ...rest} = inventoryes;
    //     const newQuantity = JSON.stringify(quantity -1);
    //     const newItemvalue = {quantity: `${newQuantity}`, ...rest}
    //     setinventoryes(newItemvalue);
    //     fetch(url, {
    //                     method: 'PUT',
    //                     headers: {
    //                         'Content-Type': 'application/json'
    //                     },
    //                     body: JSON.stringify({newItemvalue})
    //                 })
    //                 .then(res => res.json())
    //                 .then(data => setinventoryes(data));
    // }
    const handleRestock = (event) => {
        event.preventDefault();
        const value = parseInt(event.target.restock.value);
        const { quantity, ...rest} = inventoryes;
        const newQuantity = parseInt(quantity) + value;
        const newItemvalue = {quantity: `${newQuantity}`, ...rest};
        
        setinventoryes(newItemvalue);
      
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({newItemvalue})
        })
        .then(res => res.json())
        .then(data => setinventoryes(data));
        
    }
    
    // const handledeliver = (event) => {
    //     event.preventDefault();
    //     const valu = parseInt(event.target.restock.value);
    //     const { quantit, ...rest} = inventoryes;
    //     const newQuantit = parseInt(quantit) - valu;
    //     const newItemvalu = {quantity: `${newQuantit}`, ...rest};
        
    //     setinventoryes(newItemvalu);
      
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({newItemvalu})
    //     })
    //     .then(res => res.json())
    //     .then(data => setinventoryes(data));
        
    // }
  
    

    
    
    


// function removeOne(id){
   
//         let newQuantity = price - 1;
//         const newProduct = { ...inventoryes, price: newQuantity }
//         //copy all previous data if exist in product and setup new price 
//         setinventoryes(newProduct);
//         fetch(`https://nameless-ridge-09787.herokuapp.com/inventory/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newProduct)
//         })
//     }

const handlePlaceOrder = event =>{
    event.preventDefault();
    const order = {
        email:user.email,
        service: inventoryes.name,
        serviceId: inventoryId,
        address: event.target.address.value,
        phone: event.target.phone.value
    }
    axios.post('https://salty-plains-42346.herokuapp.com/order', order)
    .then(response =>{
        const {data} = response;
        if(data.insertedId){
            toast('Your order is booked!!!');
            event.target.reset();
        }
    })
}
    return (
        <div className='container flex hi'>
            
            <div className='services-service bg w-50  justify-content-center align-content-center hi'>
                 
            <img className='w-25' src={inventoryes.img} alt="" />
                 {/* <h2 className='justify-content-center align-content-center'>You are about to book: {inventoryes.name}</h2> */}
                 <h2> Price:{inventoryes.price}</h2>
                 <h2> Quantity:{inventoryes.quantity}</h2>
                
                
               <form onSubmit={handleRestock}>
                   <input className='' name='restock' style={{"border":"1px solid black"}}  type="text" />
                   <button type='submit' className='btn btn-primary'>Restock</button>
               </form>
               {/* <form onSubmit={handledeliver}>
                   <input className='' name='restock' style={{"border":"1px solid black"}}  type="text" />
                   <button type='submit' className='btn btn-primary'>Restock</button>
               </form> */}
               <form className='d-flex flex-column  container' onSubmit={handlePlaceOrder}>
                <input className='mb-2 text-center' placeholder="name" value={inventoryes.name} {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='description' {...register("service")} />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="address" value={user?.email} placeholder='user' autoComplete='off' required  readOnly/>
                <input className='w-100 mb-2' type="text" name="address" value={user?.displayName} placeholder='user' autoComplete='off' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required readOnly />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
                </form>
            </div>
            
        </div>
    );
};

export default ServiceDetail;
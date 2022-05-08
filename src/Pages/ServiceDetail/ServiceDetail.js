// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';
import './Servicedetail.css'


const ServiceDetail = () => {

    const { inventoryId } = useParams();
//    const [item,setitem] = useState({});
   const url = `https://nameless-ridge-09787.herokuapp.com/inventory/${inventoryId}`
    const [inventoryes, setinventoryes] = useState({});
    // const { price} = inventoryes;
    useEffect( ()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setinventoryes(data));
    }, [url, inventoryes])

    const handledeliver =() =>{
        const {quantity, ...rest} = inventoryes;
        const newQuantity = JSON.stringify(quantity -1);
        const newItemvalue = {quantity: `${newQuantity}`, ...rest}
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


    return (
        <div className='container flex'>
            
            <div className='services-service bg w-50  justify-content-center align-content-center'>
                 <img className='w-25' src={inventoryes.img} alt="" />
                 <h2 className='justify-content-center align-content-center'>You are about to book: {inventoryes.name}</h2>
                 <h2> Price:{inventoryes.price}</h2>
                 <h2> Quantity:{inventoryes.quantity}</h2>
                 <h2> Suppliar:{inventoryes.suppliar}</h2>
                
                
                <button onClick={handledeliver} className='btn btn-primary '>update</button>
               <form onSubmit={handleRestock}>
                   <input className='' name='restock' style={{"border":"1px solid black"}}  type="text" />
                   <button type='submit' className='btn btn-primary'>Restock</button>
               </form>
            </div>
            
        </div>
    );
};

export default ServiceDetail;
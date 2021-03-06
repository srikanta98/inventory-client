import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { Link, useParams } from 'react-router-dom';
// import useServiceDetail from '../../hooks/useServiceDetail';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';

const Addall = () => {
    
    // const { inventoryId } = useParams();
    // const [inventory] = useServiceDetail(inventoryId);
    // const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    useEffect( ()=>{
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease',
        })
    });
    // const order = {
    //     email:user.email,
    //     service: inventory.name,
    //     serviceId: inventoryId,
    //     // address: event.target.address.value,
    //     // phone: event.target.phone.value
    // }
    const onSubmit = data => {
        console.log(data);
       
        const url = `https://nameless-ridge-09787.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } );
        
       
    };
    return (
        <div data-aos='zoom-out'>
             <h2 className='service'>Please add a service</h2>
             {/* <Link to={`/checkout/${inventoryId}`}> */}
             <form className='d-flex flex-column  container' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='description' {...register("service")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Img' type="text" {...register("img")} />
                <input className='mb-2' placeholder='suppliar' type="text" {...register("suppliar")} />
                <input className='mb-2' placeholder='Quantity' type="text" {...register("quantity")} />
                <input type="submit" value="Add Service" />
            </form>
      
             {/* </Link> */}
              </div>
            
    );
};

export default Addall;
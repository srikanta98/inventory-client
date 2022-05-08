import React, { useEffect } from 'react';
import useServices from '../../hooks/useServices';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const ManageServices = () => {
    const [inventoryes, setinventoryes] = useServices();
    const navigate = useNavigate();
    const navigateToAddservice = () => {
        navigate("/addall");
    }

    const navigateToServiceDetail = id => {
        navigate(`/inventory/${id}`);
    }
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease',
        })
    });
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://nameless-ridge-09787.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventoryes.filter(service => service._id !== id);
                    setinventoryes(remaining);
                })
        }
    }
    return (
        <div id='services' className='container mx-auto' data-aos='zoom-out'>
            <h2 className='service mb-5'>Manage your inventories</h2>
            <div className="services">
                {
                    inventoryes.map(service => <div key={service._id}>

                        <div className='services-service bg  container'>
                            <img className='w-75' src={service.img} alt="" />
                            <h5>Name:{service.name}</h5>
                            <p>Quantity:{service.quantity}</p>
                            <p>Suppliar:{service.suppliar}</p>
                            <p>Price:{service.price}</p>
                            <div>
                                <button className='btn-pop mx-4 ' onClick={() => handleDelete(service._id)}>Delete items</button>
                                <button onClick={() => navigateToServiceDetail(service._id)} className='btn btn-primary btn-pop'>Update</button>
                            </div>
                        </div>


                    </div>)

                }
                <button onClick={() => navigateToAddservice()} className='btn btn-primary btn-pop posi'>Add New service</button>
            </div>
        </div>
    );
};

export default ManageServices;
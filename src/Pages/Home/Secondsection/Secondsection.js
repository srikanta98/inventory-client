import React, { useEffect } from 'react';
import './Secondsection.css'
import b1 from './../../../images/experts/gra-1.png'
import b2 from './../../../images/experts/real-gra-2.png'
import b3 from './../../../images/experts/real-gra3.png'
import b4 from './../../../images/experts/Gra4.png'
import b5 from './../../../images/experts/wordpress-ge6ad7eb9b_640.jpg'
import b6 from './../../../images/experts/laptop-g46148ae2e_640.jpg'
import b7 from './../../../images/experts/faq1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Secondsection = () => {
    useEffect( ()=>{
        AOS.init({
            offset: 100,
           
            easing: 'ease-in-shine',
        })
    });
    useEffect( ()=>{
        AOS.init({
            offset: 100,
           
            easing: 'ease-in-shine',
        })
    });
    return (
        <div id='inventory' className='container mt-5'>
            <section id="feature" className="my-4">

                <p className='topi' data-aos='zoom-out'>Best deal</p>
                <h1 className='service' data-aos='zoom-out'>Get the unlimited support by us</h1>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12 col-lg-5">
                            <div className="py-4" data-aos='fade-right'>
                                <img className="w-100 mb-5 mt-5" src={b5} alt="" />
                                <img className="w-100 mt-4" src={b7} alt="" />

                            </div>
                        </div>


                        <div className="col-md-12 col-lg-7 " data-aos='fade-left'>
                            <div className="row">
                                <div className="col-md-6 mt-5 texti ">
                                    <div className="d-flex  my-2 p-3 flex-column align-items-center">
                                        <img className='w-75' src={b1} alt="" />
                                        <h3 className="text-center my-3">Time management</h3>
                                        <p className="text-center">Save time in our inventory program because time is money</p>
                                    </div>
                                </div>



                                <div className="col-md-6 mt-5 texti  ">
                                    <div className="d-flex  p-3 mt-2 flex-column align-items-center">
                                        <img className='w-75' src={b2} alt="" />
                                        <h3 className="text-center my-3">Goal oriented</h3>
                                        <p className="text-center">Fix your goal and stay with us and enjoy the ride
                                            </p>
                                    </div>
                                </div>



                                <div className="col-md-6 my-3 mt-5 texti  mx">
                                    <div className="d-flex mt-4 p-3 flex-column align-items-center">
                                        <img className='w-75' src={b3} alt="" />
                                        <h3 className="text-center my-3">Unlimited Guideness</h3>
                                        <p className="text-center">Get to know us and enjoy the journey</p>
                                    </div>


                                </div>
                                <div className="col-md-6 my-3 mt-3 texti  ">
                                    <div className="d-flex  p-3 flex-column align-items-center">
                                        <img className='w-100' src={b4} alt="" />
                                        <h3 className="text-center my-3">Best inventory</h3>
                                        <p className="text-center">We have all in our inventory programs</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Secondsection;
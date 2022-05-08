import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect( ()=>{
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease',
        })
    });
    return (
        <div className='font'>
            <div className=" my-5 font">
                <h1 className='service'>Get to know us better</h1>
                <footer
                    className="text-center text-lg-start text-dark bg " data-aos='zoom-out'

                >

                    <section className="d-flex justify-content-between p-4 text-white sec2"> </section>
                    <section className="">
                        <div className="container text-center text-md-start mt-5">

                            <div className="row mt-3">

                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold font">Company name</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto hrtip"

                                    />
                                    <p className='font'>
                                       We will work along to get you in the most desired place.Hope you will enjoy the journey with us
                                    </p>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold">Visit</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto hrtip"

                                    />
                                    <p>
                                        <a href="#!" className="text-dark font">Lenovo</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark font">Dell</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark font">Asus</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark font">Macbook</a>
                                    </p>
                                </div>
                                

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold font">Useful links</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto hrtip"

                                    />
                                    <p>
                                        <a href="#!" className="text-dark font" >Your Account</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark font">Become an Affiliate</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark font">Shipping Rates</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark font">Help</a>
                                    </p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                    <h6 className="text-uppercase fw-bold font">Contact</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto hrtip"

                                    />
                                    <p><i className="fas fa-home mr-3 font"></i> New York, NY 10012, US</p>
                                    <p><i className="fas fa-envelope mr-3 font"></i> info@example.com</p>
                                    <p><i className="fas fa-phone mr-3 font"></i> + 01 234 567 88</p>
                                    <p><i className="fas fa-print mr-3 font"></i> + 01 234 567 89</p>
                                </div>

                            </div>

                        </div>
                    </section>



                    <div className="text-center p-3 dip">
                        <footer class="bg-dark py-3 text-center border-5 rounded mt-5">
                            <h1 class="text-white font">&copy; Your Website 2021.All rights reserved.</h1>
                        </footer>
                    </div>

                </footer>

            </div>

        </div>
    );
};
    
export default Footer;
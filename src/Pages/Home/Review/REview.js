import React, { useEffect } from 'react';
import './Review.css';

import b2 from './../../../images/experts/review1.jpg'
import b3 from './../../../images/experts/review-2.jpg'
import b4 from './../../../images/experts/review-3.jpg'
import b5 from './../../../images/experts/review-4.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const REview = () => {
    useEffect( ()=>{
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease',
        })
    });
    return (
        <div>
            <section id="testimonials">

                <div class="testimonial-heading">
               
                    <h1 data-aos='zoom-out'>Clients Says</h1>
                </div>

                <div class="testimonial-box-container" data-aos='zoom-out'>
                    <div class="testimonial-box">
                        <div class="box-top">
                            <div class="profile">
                                <div class="profile-img">
                                <img src={b5} alt=""/>
                                </div>
                                <div class="name-user">
                                    <strong>Touseeq Ijaz</strong>
                                    <span>@touseeqijazweb</span>
                                </div>
                            </div>
                        </div>

                        <div class="client-comment">
                            <p>When it comes to shopping for a new laptop, spring is one of the best times of the year to find a deal outside of Black Friday. With 2022 laptops just starting to roll out, you'll still see a lot of 2021 models while hunting for your next laptop .</p>
                        </div>
                    </div>

                    <div class="testimonial-box">

                        <div class="box-top">
                            <div class="profile">
                                <div class="profile-img">
                                    <img src={b2} alt=""/>
                                </div>
                                <div class="name-user">
                                    <strong>J.K Rowling</strong>
                                    <span>@jkrowling</span>
                                </div>
                            </div>
                        </div>
                        <div class="client-comment">
                            <p>If you want more laptop brands and options for a particular category, we also have specialized lists you can look at, including the best gaming laptops, best 15-inch laptops, best two-in-ones and best Chromebooks, as well as the best laptops for college students, designers and the best MacBook Pro alternatives. .</p>
                        </div>
                    </div>

                    <div class="testimonial-box">
                        <div class="box-top">
                            <div class="profile">

                                <div class="profile-img">
                                <img src={b3} alt=""/>
                                </div>

                                <div class="name-user">
                                    <strong>Harry Potter</strong>
                                    <span>@DanielRedclief</span>
                                </div>
                            </div>
                        </div>
                        <div class="client-comment">
                            <p>This is our go-to recommendation for those in search of a MacOS laptop for basic everyday use. The MacBook Air was updated in November 2020 with Apple's homegrown M1 processors, replacing Intel's CPUs.  The M1 delivers better performance and longer battery life.</p>
                        </div>
                    </div>

                    <div class="testimonial-box">

                        <div class="box-top">
                            <div class="profile">
                                <div class="profile-img">
                                <img src={b4} alt=""/>
                                </div>
                                <div class="name-user">
                                    <strong>Oliv</strong>
                                    <span>@Olivaadward</span>
                                </div>
                            </div>
                        </div>
                        <div class="client-comment">
                            <p>The Dell XPS 13 is a perennial favorite for its size, weight and performance and just overall good looks. In 2020, Dell made the laptop even smaller, while making the laptop screen larger and increasing performance for both CPU and graphics-intensive tasks. It's not a huge leap, but this Dell XPS is still the best in the category.</p>
                        </div>
                    </div>
                    <div class="testimonial-box">

                        <div class="box-top">
                            <div class="profile">
                                <div class="profile-img">
                                <img src={b4} alt=""/>
                                </div>
                                <div class="name-user">
                                    <strong>Oliv</strong>
                                    <span>@Olivaadward</span>
                                </div>
                            </div>
                        </div>
                        <div class="client-comment">
                            <p>Lenovo is one of the most premium laptop brands and their prices are slightly higher compared to other manufacturers. However, their laptops are ideal for all kinds of tasks and can be used by anyone including professional gamers, businessmen and college students..</p>
                        </div>
                    </div>
                    <div class="testimonial-box">

                        <div class="box-top">
                            <div class="profile">
                                <div class="profile-img">
                                <img src={b4} alt=""/>
                                </div>
                                <div class="name-user">
                                    <strong>Oliv</strong>
                                    <span>@Olivaadward</span>
                                </div>
                            </div>
                        </div>
                        <div class="client-comment">
                            <p>HP also known as Hewlett-Packard is one of the oldest electronics brands that is not as popular as it used to be. When it comes to desktops, they still provide the most reliable machines and are widely used by gamers and professionals.This leading laptop manufacturing companies make one of the best laptops for students and have annual revenue of around $53 billion.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default REview;
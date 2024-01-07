import React from 'react';
import './Hero.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Hero = () => {
    return (
        <section className={"hero"}>
            <div className="container">
                <Swiper navigation={false} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className="slide-container">
                            <div className="slide-content">
                                <h1 className="slide-title">
                                    It’s Time To
                                    Explore The World
                                </h1>
                                <button className="slide-button">
                                    Plan Your Trip
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-container">
                            <div className="slide-content">
                                <h1 className="slide-title">
                                    It’s Time To
                                    Explore The World
                                </h1>
                                <button className="slide-button">
                                    Plan Your Trip
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Hero;
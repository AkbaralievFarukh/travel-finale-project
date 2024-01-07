import React from 'react';
import './Destination.scss'
import Ukulele from '../../../assets/images/ukulele.png'
import Binocular from '../../../assets/images/binocular.png'
import Map from '../../../assets/images/map.png'
import Backpack from '../../../assets/images/backpack.png'

const Destination = () => {
    return (
        <section className={"destination"}>
            <div className="container">
                <div className={"destination__future"}>
                    <div className="row">
                        <div className={"col-3"}>
                            <div className={"destination__future__item"}>
                                <div className={"destination__future__item__img"}>
                                    <img src={Map} alt={"Map illustration"}/>
                                </div>
                                <div className={"destination__future__item__text"}>
                                    <h3>Choose Destination</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing setting
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={"col-3"}>
                            <div className={"destination__future__item"}>
                                <div className={"destination__future__item__img"}>
                                    <img src={Binocular} alt={"Map illustration"}/>
                                </div>
                                <div className={"destination__future__item__text"}>
                                    <h3>Explore The Place</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing setting
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={"col-3"}>
                            <div className={"destination__future__item"}>
                                <div className={"destination__future__item__img"}>
                                    <img src={Backpack} alt={"Map illustration"}/>
                                </div>
                                <div className={"destination__future__item__text"}>
                                    <h3>Start Your Journey</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing setting
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={"col-3"}>
                            <div className={"destination__future__item"}>
                                <div className={"destination__future__item__img"}>
                                    <img src={Ukulele} alt={"Map illustration"}/>
                                </div>
                                <div className={"destination__future__item__text"}>
                                    <h3>Let’s Enjoy</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing setting
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Destination;
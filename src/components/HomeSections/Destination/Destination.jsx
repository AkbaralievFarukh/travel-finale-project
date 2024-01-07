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
                                    <h3>Future</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod,
                                        quaerat, quasi, quibusdam, quidem, quod, quaerat.</p>
                                </div>
                            </div>
                        </div>
                        <div className={"col-3"}>
                            <div className={"destination__future__item"}>
                                <div className={"destination__future__item__img"}>
                                    <img src={Map} alt={"Map illustration"}/>
                                </div>
                                <div className={"destination__future__item__text"}>
                                    <h3>Future</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod,
                                        quaerat, quasi, quibusdam, quidem, quod, quaerat.</p>
                                </div>
                            </div>
                        </div>
                        <div className={"col-3"}>
                            <div className={"destination__future__item"}>
                                <div className={"destination__future__item__img"}>
                                    <img src={Map} alt={"Map illustration"}/>
                                </div>
                                <div className={"destination__future__item__text"}>
                                    <h3>Future</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod,
                                        quaerat, quasi, quibusdam, quidem, quod, quaerat.</p>
                                </div>
                            </div>
                        </div>
                        <div className={"col-3"}>
                            <div className={"destination__future__item"}>
                                <div className={"destination__future__item__img"}>
                                    <img src={Map} alt={"Map illustration"}/>
                                </div>
                                <div className={"destination__future__item__text"}>
                                    <h3>Future</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod,
                                        quaerat, quasi, quibusdam, quidem, quod, quaerat.</p>
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
import React from 'react';
import Header from "../../components/Header/Header.jsx";
import Hero from "../../components/HomeSections/Hero/Hero.jsx";

const Home = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Hero />
            </div>
        </>
    );
};

export default Home;
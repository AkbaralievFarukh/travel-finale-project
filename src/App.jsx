import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./view/Home/Home.jsx";
import Layout from "./components/Layout/Layout.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
        </Routes>
    );
};

export default App;
// import React from 'react';

import AppBar from "./AppBar";
import Footer from "./Footer";

const MasterLayout = (props) => {
    return (
        <div>
            <AppBar/>
            {props.children}
            <Footer/>
        </div>
    );
};

export default MasterLayout;
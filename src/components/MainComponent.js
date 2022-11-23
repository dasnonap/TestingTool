import React from "react";
import HeaderComponent from './HeaderComponent';
import FooterComponent from "./FooterComponent";

const MainComponent = () => {
    return (
        <div className="main">
            <HeaderComponent/>

            <FooterComponent/>
        </div>
    );
};

export default MainComponent;
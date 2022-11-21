import React from "react";
import HeaderComponent from './HeaderComponent';
import '../styles/reset.css';
import '../styles/base.css';
import '../styles/shell.css';

const MainComponent = () => {
    return (
        <div className="main">
            <HeaderComponent/>
        </div>
    );
};

export default MainComponent;
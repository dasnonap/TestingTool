import React from "react";
import Header from "../Sections/Header";
import Footer from '../Sections/Footer';
import Wrapper from "../UI/Wrapper";
import LoginSection from "../Sections/LoginSection";

const right_side_menu = [
    {   
        'title' : 'Home',
        'url'   : '/',
    },
];

const Login = (props) => {
    return (
        <Wrapper>
            <Header rightMenu={right_side_menu}/>

            <LoginSection />

            <Footer />
        </Wrapper>
    );
};

export default Login;
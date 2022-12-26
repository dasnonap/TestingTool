import React from "react";
import Header from "../Sections/Header";
import Footer from '../Sections/Footer';
import Wrapper from "../UI/Wrapper";
import RegisterSection from "../Sections/RegisterSection";

const right_side_menu = [
    {   
        'title' : 'Home',
        'url'   : '/',
    },
];

const Register = (props) => {
    return(
        <Wrapper>
            <Header rightMenu={right_side_menu}/>

            <RegisterSection />

            <Footer />
        </Wrapper>
    );
};

export default Register;
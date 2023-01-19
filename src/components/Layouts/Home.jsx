import React from "react";
import Header from "../Sections/Header";
import Footer from '../Sections/Footer';
import Wrapper from '../UI/Wrapper';
import Hero from "../Sections/Hero";
import Steps from "../Sections/Steps";

let left_side_menu = [
    {   
        'title' : 'Home',
        'url'   : '/',
    }
];

let right_side_menu = [
    {   
        'title' : 'Sign In',
        'url'   : 'signin',
    },
    {   
        'title' : 'Sign Up',
        'url'   : 'signup'
    }
];

let footer_menu_items = [
    {   
        'title' : 'Home',
        'url'   : '/',
    },
    {   
        'title' : 'Sign In',
        'url'   : 'signin',
    },
    {   
        'title' : 'Sign Up',
        'url'   : 'signup'
    }
];

const HomeLayout = props => {
    return (
        <Wrapper>
            <Header 
                leftMenu={left_side_menu} 
                rightMenu={right_side_menu}
            />
            <Hero />

            <Steps />

            <Footer
                footerMenu={footer_menu_items}
            />
        </Wrapper>
    );
};

export default HomeLayout;
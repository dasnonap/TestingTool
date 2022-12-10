import React from "react";
import Header from "../Sections/Header";
import Footer from '../Sections/Footer';
import Wrapper from '../UI/Wrapper';

let left_side_menu = [
    {   
        'title' : 'Home',
        'url'   : '#home',
    },
    {
        'title' : 'About',
        'url'   : '#about',
    }
];

let right_side_menu = [
    {   
        'title' : 'Sign In',
        'url'   : 'sign_in',
    },
    {   
        'title' : 'Sign Up',
        'url'   : 'sign_up'
    }
];

let footer_menu_items = [
    {   
        'title' : 'Home',
        'url'   : '#home',
    },
    {
        'title' : 'About',
        'url'   : '#about',
    },
    {   
        'title' : 'Sign In',
        'url'   : 'sign_in',
    },
    {   
        'title' : 'Sign Up',
        'url'   : 'sign_up'
    }
];

const HomeLayout = props => {
    return (
        <Wrapper>
            <Header 
                leftMenu={left_side_menu} 
                rightMenu={right_side_menu}
            />

            <Footer
                footerMenu={footer_menu_items}
            />
        </Wrapper>
    );
};

export default HomeLayout;
import React from "react";
import logo from '../../images/logo.png';
import Navigation from "./Navigation";
import Shell from '../UI/Shell';

const Footer = (props) => {
    return (
        <div className="footer">
            <Shell>
                <div className="footer__inner">
                    <div className="footer__cols">
                        <div className="footer__col">
                            <div className="footer__logo">
                                <a href="/" className="img">
                                    <img src={logo} alt="Main menu logo"></img>
                                </a>
                            </div>
                        </div>

                        <div className="footer__col">
                            <div className="footer__menu">
                                { props.footerMenu ? 
                                    <Navigation nav_items={props.footerMenu}/>                                
                                : ''}
                            </div>
                        </div>
                    </div>   
                    
                    <div className="footer__copyright">
                        Made by Ivan Mihov
                    </div>
                </div>
            </Shell>
        </div>
    );
};

export default Footer;
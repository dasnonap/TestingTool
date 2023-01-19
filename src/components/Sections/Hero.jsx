import React from "react";
import Shell from "../UI/Shell";
import hero_image from '../../images/hero-alt.png'
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="hero">
            <Shell>
                <div className="hero__inner">
                    <div className="hero__title">
                        <h1>
                            Free site testing tool
                        </h1>
                    </div>

                    <div className="hero__content">
                        <p>
                            With this tool you can test, preview and analyze your site's vulnerabilities and how you can fix them.
                        </p>

                        <p>
                            Just follow these quick 5 steps and start testing.
                        </p>
                    </div>

                    <div className="hero__actions">
                        <Link to="/signin" className="btn">Sign In</Link>
                        
                        <p>OR</p>

                        <Link to="/signup" className="btn">Create an Account</Link>
                    </div>
                </div>

                <div className="hero__background">
                    <img src={hero_image} alt="" />
                </div>
            </Shell>
        </section>

    );
};

export default Hero;
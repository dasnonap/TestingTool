import React from "react";
import Shell from "../UI/Shell";
import hero_image from '../../images/hero-alt.png'

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
                        <a href="#sign-in" className="btn">Sign In</a>
                        
                        <p>OR</p>

                        <a href="#sign-up" className="btn">Create an Account</a>
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
import React from "react";
import Shell from "../UI/Shell";

const Steps = () =>{
    return(
        <section className="steps">
            <Shell>
                <div className="steps__head">
                    <h2>
                        Start testing in just 5 easy steps
                    </h2>
                </div>

                <div className="steps__items">
                    <div className="steps__item">
                        <div className="step">
                            <div className="step__inner">
                                <div className="step__title">
                                    <h3>
                                        1. Create an Account
                                    </h3>
                                </div>

                                <div className="step__content">
                                    <p>
                                        Creating a free account is required before you start testing your site and server.
                                    </p>

                                    <p>
                                        The registration process is simple, fast and secure
                                    </p>

                                    <p>
                                        The service is completely free of charge and no payments are required for creating your account.
                                    </p>
                                </div>

                                <div className="step__actions">
                                    <a href="#sign-up" className="btn">
                                        Create an Account
                                    </a>
                                </div>
                            </div>

                            <aside className="step__image">
                                <img src="" alt="Image register " />
                            </aside>
                        </div>
                    </div>

                    <div className="steps__item">
                        <div className="step step--reversed">
                            <div className="step__inner">
                                <div className="step__title">
                                    <h3>
                                        2. Generate API Key
                                    </h3>
                                </div>

                                <div className="step__content">
                                    <p>
                                        After logging into the system. Navigate to the Keys section.
                                    </p>

                                    <p>
                                       Then after add your sites' URL and simply Generate a new API key.
                                    </p>
                                </div>
                            </div>

                            <aside className="step__image">
                                <img src="" alt="Image generate api key" />
                            </aside>
                        </div>
                    </div>

                    <div className="steps__item">
                        <div className="step">
                            <div className="step__inner">
                                <div className="step__title">
                                    <h3>
                                        3. Upload the file
                                    </h3>
                                </div>

                                <div className="step__content">
                                    <p>
                                        After generating the key, you will need to upload the provided file to your web server
                                    </p>

                                    <p>
                                       This step is required in order for the functionality to work
                                    </p>
                                </div>
                            </div>

                            <aside className="step__image">
                                <img src="" alt="Image upload api file" />
                            </aside>
                        </div>
                    </div>

                    <div className="steps__item">
                        <div className="step step--reverse">
                            <div className="step__inner">
                                <div className="step__title">
                                    <h3>
                                        4. Start the Test
                                    </h3>
                                </div>

                                <div className="step__content">
                                    <p>
                                       After uploading the file, you can begin testing!
                                    </p>

                                    <p>
                                       Navigate the tab Test, and choose which test would you like to be performed.
                                    </p>
                                </div>
                            </div>

                            <aside className="step__image">
                                <img src="" alt="Image start testing" />
                            </aside>
                        </div>
                    </div>

                    <div className="steps__item">
                        <div className="step">
                            <div className="step__inner">
                                <div className="step__title">
                                    <h3>
                                        5. Evaluate the test
                                    </h3>
                                </div>

                                <div className="step__content">
                                    <p>
                                       After the tests are complete, a new report will be created.
                                    </p>

                                    <p>
                                        In the report you will find all of the information regarding your tests
                                    </p>
                                </div>
                            </div>

                            <aside className="step__image">
                                <img src="" alt="Image evaluate tests" />
                            </aside>
                        </div>
                    </div>
                </div>
            </Shell>
        </section>
    );
};

export default Steps;
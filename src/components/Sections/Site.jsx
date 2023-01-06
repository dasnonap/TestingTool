import React from "react";  
import Button from "../UI/Button";

const Site = props => {
    // Handle open accordion click
    const openAccordion = (e) => {
        e.preventDefault();
    }

    return(
        <div className="site">
            <div className="site__head">
                <h3>
                    {/* get root item */}
                    { props.sitemap ? 
                    props.sitemap
                    : ''}
                </h3>

                <a href="" onClick={openAccordion}>
                    Learn more
                </a>
            </div>

            <div className="site__content">
                <div className="grid">
                    <div className="grid__row">
                        <div className="grid__cell">
                            <h4>
                                API token
                            </h4>

                            <p>
                                { props.api_token ? 
                                    props.api_token
                                :
                                    'No token saved.'
                                }
                            </p>
                        </div>

                        <div className="grid__cell">
                            <h4>
                                Protocol
                            </h4>

                            <p>
                                { props.protocol ?
                                    props.protocol
                                : 
                                    'No protocol detected.'
                                }
                            </p>
                        </div>
                    </div>

                    <div className="grid__row">
                        <div className="grid__cell">
                            <h4>
                                Server Info
                            </h4>

                            <p>
                                {props.server ?
                                    props.server
                                : 
                                    'No server info detected.'
                                }
                            </p>
                        </div>

                        <div className="grid__cell">
                            <Button>
                                Test again    
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Site;
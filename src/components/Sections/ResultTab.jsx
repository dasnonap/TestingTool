import React from "react";
import Button from "../UI/Button";

const handleOnViewMoreClick = (event) => {
    event.preventDefault();

    let button = event.target;
    button.closest( '.tab__content' ).classList.toggle("tab__content--expanded");

}

const ResultTab = props => {
    if( ! props.result )
        return;
    
    const test = props.result;
    const site = test.siteId;

    return (
        <div className="tab">
            <div className="tab__rows">
                <div className="tab__row">
                    <h2>
                        General site and server information
                    </h2>
                </div>

                <div className="tab__row">
                    <div className="tab__content">
                        <h3>Site Token</h3>  
                        
                        { site.api_token ?
                            <p>{site.api_token}</p>
                        : 'No API token generated' }
                    </div>

                    <div className="tab__content">
                        <h3>URL</h3>   
                        
                        { site.sitemap ?
                            <a 
                                href={site.sitemap} 
                                target="_blank"
                                rel="noreferrer"
                                >
                                    {site.sitemap}
                            </a>
                        : 'No url detected' }
                    </div>
                </div>

                <div className="tab__row">
                    <div className="tab__content">
                        <h3>Protocol</h3>  
                        
                        { site.protocol ?
                            <p>{site.protocol}</p>
                        : 'No protocol detected' }
                    </div>

                    <div className="tab__content">
                        <h3>Server</h3>  
                        
                        { site.server ?
                            <p>{site.server}</p>
                        : 'The server type could not be detected' }
                    </div>
                </div>
                
                <div className="tab__row">
                    <h2>
                        SQL Injection Results
                    </h2>
                </div>

                <div className="tab__row">
                    <div className="tab__content">
                        <div className="content__head">
                            <h3>Report</h3>

                            <Button 
                                onClick={handleOnViewMoreClick}
                                class='btn btn--alt'
                                >
                                Expand
                            </Button>
                        </div>
                                
                        <div className="content__inner content__inner--alt">
                            { test.result_report ?
                                <div dangerouslySetInnerHTML={{__html: test.result_report}} />
                            : 'No report data is created' }
                        </div>
                    </div>

                    
                    <div className="tab__content">
                        <div className="content__head">
                            <h3>Image</h3>

                            <Button
                                onClick={handleOnViewMoreClick}
                                class='btn btn--alt'
                                >
                                Expand
                            </Button>
                        </div>

                        <div className="content__inner">
                            {
                                test.result_images ? 
                                JSON.parse( test.result_images ).map( base_64_string => {
                                    let image_string = 'data:image/png;base64, ' + base_64_string;

                                    return (
                                        <img 
                                            src={image_string} 
                                            className="tab__image"
                                            key={Math.random().toString()}
                                        />
                                    );
                                })
                            : 'The image could not be created'
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultTab;
import React from "react";

const Tab = (props) => {
    if( ! props.site )
        return;
    
    const site = props.site;

    return (
        <div className={props.className || 'tab'}>
            <div className="tab__rows">
                <div className="tab__row">
                    <div className="tab__content">
                        <h3>Site Token</h3>
                        
                        { site.api_token ?
                            <p>{site.api_token}</p>
                        : '' }
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
                        : '' }
                    </div>
                </div>  

                <div className="tab__row">
                    <div className="tab__content">
                        <h3>Protocol</h3>
                        
                        { site.protocol ?
                            <p>{site.protocol}</p>
                        : '' }
                    </div>

                    <div className="tab__content">
                        <h3>Server</h3>
                        
                        { site.server ?
                            <p>{site.server}</p>
                        : '' }
                    </div>
                </div>
            </div>
            
            <div className="tab__actions">
                <a 
                    href="#" 
                    data-site={site.id} 
                    onClick={props.onButtonClickBegin}
                    className="btn"
                    >
                    Begin tests...
                </a>
            </div>
        </div>
    );
}

export default Tab;
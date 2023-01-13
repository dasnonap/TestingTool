import React from "react";
import Tab from "./Tab";

class SiteTabs extends React.Component{
    // constructor(...args) {  
    //     super(...args);
    // }

    // Handle start site testing
    handleSiteTesting = ( event ) => {
        console.log( event );
    }

    render(){
        return (
            <div className="tabs">
                <div className="tabs__items">
                    {console.log(this.props.sites)}
                    {this.props.sites.map( (site)=>{
                        console.log( site );
                        return(
                            <Tab
                                site={site}
                                onButtonClickBegin={this.handleSiteTesting.bind(this)}
                                key={Math.random().toString()}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default SiteTabs;
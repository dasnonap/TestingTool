import React from "react";
import Tab from "./Tab";
import Test from "../../models/Test";
import UserService from "../../services/user.service";
import { redirect } from "react-router-dom";

class SiteTabs extends React.Component{
    // constructor(...args) {  
    //     super(...args);
    // }

    // Handle start site testing
    handleSiteTesting = async ( event ) => {
        event.preventDefault();

        const $button = event.target,
            site_id = $button.dataset.site;

        if( site_id ){
            const test = new Test( site_id );

            try {
                UserService.createTest( test )
                    .then( response => {

                        redirect( '/dashboard/results' );
                    });

                
            } catch (error) {
                if( error.response.status == 400 )
                    redirect( '/dashboard' );
            }
        }
    }

    render(){
        return (
            <div className="tabs">
                <div className="tabs__items">
                    {console.log(this.props.sites)}
                    {this.props.sites.map( (site)=>{
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
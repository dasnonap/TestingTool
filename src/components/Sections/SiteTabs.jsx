import React from "react";
import Tab from "./Tab";
import Test from "../../models/Test";
import UserService from "../../services/user.service";
import { useNavigate } from "react-router-dom";

const SiteTabs = props => {
    const navigate = useNavigate();
    // Handle start site testing
    const handleSiteTesting = async ( event ) => {
        event.preventDefault();

        const $button = event.target,
            site_id = $button.dataset.site;
        document.body.classList.add( 'is-loading' )

        if( site_id ){
            const test = new Test( site_id );

            try {
                const response = await UserService.createTest( test )
                    
                if( response.data && response.data.success  ){
                    document.body.classList.remove('is-loading');
                    navigate( '/dashboard/results' );
                }
            } catch (error) {
                if( error.response.status == 400 ){
                    document.body.classList.remove('is-loading');
                    navigate( '/dashboard' );
                }
                    
            }
        }
    }

    return (
        <div className="tabs">
            <div className="tabs__items">
                {props.sites.map( (site)=>{
                    return(
                        <Tab
                            site={site}
                            onButtonClickBegin={handleSiteTesting}
                            key={Math.random().toString()}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default SiteTabs;
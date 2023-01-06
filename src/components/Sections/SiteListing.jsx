import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service";

const SiteListing = props => {
    const [userSites, setUserSites] = useState();

    useEffect(async () => {
        try {
            const response = await UserService.getUserSites();
            console.log( response );
            setUserSites(response.data.sites);
        } catch (error) {
            if( error.response.status == 400 )
                setUserSites();
        }
    }, [])
    
    console.log(userSites);
    return(
        <div className="sites-listing">
            <div className="listing__inner">
                
            </div>
        </div>
    );
};  

export default SiteListing;
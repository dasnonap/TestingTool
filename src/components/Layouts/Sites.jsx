import React from "react";
import SiteListing from "../Sections/SiteListing";

const Sites = (props) => {
    return (
        <div className="sites">
            <div className="sites__head">
                <h2> Your Connected Websites</h2>
            </div>

            <div className="sites__inner">
                <SiteListing />
            </div>
        </div>
    );
}

export default Sites;
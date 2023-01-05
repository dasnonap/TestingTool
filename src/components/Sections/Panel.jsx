import React from "react";
import Shell from "../UI/Shell";
import { Outlet, useLocation } from "react-router-dom";
import DashboardNavigation from "./DashboardNavigation";

const Panel = props => {
    let username = 'alo';
    return(
        <div className="panel">
            <Shell className="shell shell--lg">
                <div className="panel__inner">
                    <div className="panel__navigation">
                        { props.asideMenu ? 
                            <DashboardNavigation items={props.asideMenu}/>
                        : ''}
                    </div>

                    <div className="panel__content">
                        { useLocation().pathname == '/dashboard' ? 
                            <h2>
                                Welcome to your dashboard, {username}
                            </h2>
                        : ''}
                        <Outlet />
                    </div>
                </div>
            </Shell>
        </div>
    );
}

export default Panel;
import React from "react";  
import { Link, useLocation } from 'react-router-dom';

const DashboardNavigation = props => {
    let pathname = useLocation().pathname;

    return(
        <div className="dash-nav">
            <ul className="nav__items">
                { props.items.map( (item) => {
                    let className = 'nav__item';

                    if( pathname == item.url ){
                        className += ' nav__item--active';
                    }
                    return(
                        <li 
                            className={className} 
                            key={Math.random().toString()}>
                            <Link to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
                
            </ul>
        </div>
    );
};

export default DashboardNavigation;
import React from "react";
import { Link } from "react-router-dom";

const Navigation = ( props ) => {
    let nav_items = props.nav_items;

    if( ! nav_items.length ) {
        return;
    }

    return(
        <nav className="nav-menu">
            <ul className="nav">
                { nav_items.map(( item ) => {
                    return (
                        <li className="nav__item" key={ Math.random().toString() }>
                            <Link to={ item.url }>
                                { item.title }
                            </Link>
                        </li>    
                    )
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
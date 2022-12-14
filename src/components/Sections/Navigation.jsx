import React from "react";

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
                            <a href={ item.url }>
                                { item.title }
                            </a>
                        </li>    
                    )
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
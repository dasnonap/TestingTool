import React from "react";

const NavigationComponent = ( props ) => {
    let nav_items = props.nav_items;

    if( ! nav_items.length ) {
        return;
    }

    return(
        <nav className="nav-menu">
            <ul className="nav">
                { nav_items.map(( item ) => {
                    return (
                        <li className="nav__item" key={ item.id }>
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

export default NavigationComponent;
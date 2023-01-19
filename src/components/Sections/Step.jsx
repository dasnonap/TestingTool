import React from "react";
import { Link } from "react-router-dom";

const Step = props => {
    return (
        <div className={props.class || `step`}>
            <div className="step__inner">
                <div className="step__content">
                    { props.title ?
                        <div className="step__title">
                            <h3>
                            {props.title}
                            </h3>
                        </div>
                    : ''}

                    { props.content ? 
                        <div className="step__text">
                        { props.content.map( ( item ) =>{
                                return(
                                    <p key={Math.random().toString()}>
                                        {item}
                                    </p>
                                )
                        } ) }
                        </div>
                    : ''}

                    { props.button ? 
                        <div className="step__actions">
                            <Link to={props.button.link} className="btn">
                                {props.button.text}
                            </Link>
                        </div>
                    : ''}
                </div>
            </div>
            
            { props.image ? 
                <aside className="step__image">
                    <img src={props.image} alt={props.title} />
                </aside>
            : '' }
        </div>
    );
};

export default Step;
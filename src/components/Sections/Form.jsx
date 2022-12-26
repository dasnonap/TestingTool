import React from "react";
import FormField from "./FormField";

const Form = (props) => {
    if( ! props.fields ) return;

    return(
        <form    
            className={props.className || 'form'}
            action={props.action}
            method={props.method}
            onSubmit={props.onSubmit}
            >
            <div className="form__fields">
                { props.fields ? 
                    props.fields.map( ( item ) => {
                        return(
                            <div className="form__row" key={Math.random().toString()}>
                                <div className="form__field">
                                    <FormField 
                                        name={item.id}
                                        id={item.id}
                                        type={item.type}
                                        validation={item.validation}
                                        validationMessage={item.validationMessage}
                                        placeholder={item.placeholder}
                                    />
                                </div>
                            </div>
                        )
                    })
                : ''
                }
            </div>

            <div className="form__actions">
                <button type="submit">
                    { props.submitLabel ?
                        props.submitLabel
                    : '' }
                </button>
            </div>
        </form>
    );
};

export default Form;
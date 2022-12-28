import React from "react";

const FormField = (props) => {
    return (
        <input 
            id={props.id || ''}
            name={props.id || ''}
            type={ props.type || 'text' } 
            placeholder={props.placeholder || '' }
            data-validate={props.validation}
            data-message={props.validationMessage || '' }
            />
    );
}

export default FormField;
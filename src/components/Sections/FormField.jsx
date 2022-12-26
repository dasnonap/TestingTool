import React from "react";

const FormField = (props) => {
    return (
        <input 
            type={ props.type || 'text' } 
            placeholder={props.placeholder || '' }
            data-validate={props.validate || 'false'}
            data-message={props.validationMessage || '' }
            />
    );
}

export default FormField;
import React, { useState } from "react";
import Shell from "../UI/Shell";
import Form from "./Form";
import User from "../../models/User";

// Create new file for form fields creations
// Create with Context API in Varna
const formFields = [
    {   
        type : 'email',
        id: 'email',
        validate : true,
        validationMessage: 'Please enter a valid email.',
        placeholder: 'Email Address', // maybe label to do style fixes
    },
    {
        type : 'text',
        id: 'username',
        validate : true,
        validationMessage : 'Please enter a valid username',
        placeholder : 'Username',  
    },
    {
        type : 'password',
        id : 'password',
        validate : true,
        validationMessage: 'Please enter a valid password.',
        placeholder: 'Password',
    },
    {
        type : 'password',
        id : 'password2',
        validate : true,
        validationMessage: 'Please enter a valid password.',
        placeholder: 'Confirm Password',
    }
];

const RegisterSection = (props) =>{
    const [errorState, setErrorState] = useState('');

    // Handle form submmission
    const handleRegisterSubmit = (event) => {
        event.preventDefault();

        const $form = event.target,
              $inputs = $form.querySelectorAll('input[data-validate="true"]');
        let data = {};

        $inputs.forEach( async ( input, index ) => {
            let value = input.value;

            if ( ! value.length ){
                setErrorState( input.dataset.message );
            } else {
                data[input.id] = value; 
            }
        });

        if( data.password !== data.password2 ){
            setErrorState( 'The passwords does not match.' );
        } else {
            delete data.password2;
            const user = new User( data.username, data.password, data.email );
            console.log(user);
        }

        

       
    };

    return(
        <section className="register">
            <Shell>
                <div className="register__head">
                    <h1>
                        Create an Account
                    </h1>
                </div>

                <div className="register__inner">
                    {/* Used for displaying errors */}
                    { errorState ?
                        <div className="register__message">
                            <div className="error-message">
                                <p>
                                    {errorState}
                                </p>
                            </div>
                        </div>
                    : '' }

                    <Form 
                        className="form form--register"
                        method="POST"
                        action="?" 
                        onSubmit={handleRegisterSubmit}
                        fields={formFields}
                        submitLabel='Create an Account'
                    />
                </div>

                <div className="register__footer">
                    <p>Already have an account? Sign in <a href="/sign-in">here</a></p>
                </div>
            </Shell>
        </section>
    );
};

export default RegisterSection;
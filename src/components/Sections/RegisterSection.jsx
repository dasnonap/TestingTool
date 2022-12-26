import React from "react";
import Shell from "../UI/Shell";
import Form from "./Form";

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

    const handleRegisterSubmit = (event) => {
        // Handle form submmission
        event.preventDefault();
        
        console.log(event);
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
                    <div className="register__message">
                        <div className="message">
                            <p></p>
                        </div>
                    </div>

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
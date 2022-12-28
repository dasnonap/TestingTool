import React from "react";
import Shell from "../UI/Shell";
import Form from "./Form";

// NOTES:
// Create new file for form fields creations
// Create with Context API in Varna
const formFields = [
    {   
        type : 'email',
        id : 'email',
        validate : true,
        validationMessage: 'Please enter a valid email.',
        placeholder: 'Email Address', // maybe label to do style fixes
    },
    {
        type : 'password',
        id : 'password',
        validate : true,
        validationMessage: 'Please enter a valid password.',
        placeholder: 'Password',
    }
];

// Creates Login form component
const Login = (props) => {

    const handleLoginFormSubmit = (event) => {
        // Handle form submmission
        event.preventDefault();

        console.log(event);
    };

    return(
        <section className="login">
            <Shell>
                <div className="login__head">
                    <h1>
                        Sign In
                    </h1>
                </div>

                <div className="login__inner">

                    <div className="login__message">
                        <div className="error-message">
                            <p></p>
                        </div>
                    </div>

                    <Form 
                        className="form form--login"
                        method="POST"
                        action="?" 
                        onSubmit={handleLoginFormSubmit}
                        fields={formFields}
                        submitLabel='Sign In'
                    />
                </div>

                <div className="login__footer">
                    <p>You do not have an account? Sign up <a href="/sign-up">here</a></p>
                </div>
            </Shell>
        </section>
    );
}

export default Login;
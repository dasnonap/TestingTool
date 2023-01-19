import React, { useState } from "react";
import Shell from "../UI/Shell";
import Form from "./Form";
import User from "../../models/User";
import AuthService from "../../services/auth.service";
import { useNavigate, Link } from "react-router-dom";

// Create new file for form fields creations
const formFields = [
    {   
        type : 'email',
        id : 'email',
        validate : true,
        validationMessage: 'Please enter a valid email.',
        placeholder: 'Email Address',
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
    const [errorState, setErrorState] = useState('');
    const navigate = useNavigate();

    const handleLoginFormSubmit = async (event) => {
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
        
        const user = new User( null, data.password, data.email );

        // send request
        try {
            const response = await AuthService.login(user);

            if( response.data && response.data.token.length > 0 ){
                localStorage.setItem( 'user', response.data.token );
                navigate( '/dashboard' );
            }    
        } catch (error) {
            if( error.response.status == 400 )
                setErrorState( error.response.data.error );
        }
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
                        className="form form--login"
                        method="POST"
                        action="?" 
                        onSubmit={handleLoginFormSubmit}
                        fields={formFields}
                        submitLabel='Sign In'
                    />
                </div>

                <div className="login__footer">
                    <p>You do not have an account? Sign up <Link to="/signup">here</Link></p>
                </div>
            </Shell>
        </section>
    );
}

export default Login;
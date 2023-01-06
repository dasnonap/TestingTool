import axios from "axios";
import User from '../models/User';

// Auth Service class 
export default class AuthService {
    // API URL
    // To do set api url as an env variable
    static auth_url = 'http://localhost:3001/api/auth/';

    /**
     * Register user 
     *
     * @param {User} Instance of the new User added
     * @return {boolea} Returns the result of the operation
     */
    static register( user ) {
        if( ! user instanceof User ) return;
        
        if( 
            ! user.getEmail() || 
            ! user.getPassword() || 
            ! user.getUsername() 
        ) return;

        let config = {
            headers: {
               'Content-Type': 'application/json',
            } 
        }

        return axios.post( 
            this.auth_url + 'signup',
            {
                'user': user.createJsonObject()
            },
            config
        );
    }

     /**    
     * Login user 
     *
     * @param {User} Instance of the User logged in     
     * @return {booleam} Returns the 
     */
    static async login ( user ) {
        if( ! user instanceof User ) return;

        if( 
            ! user.getEmail() || 
            ! user.getPassword() 
        ) return;

        let config = {
            headers: {
               'Content-Type': 'application/json',
            } 
        }

        return axios.post( 
            this.auth_url + 'signin',
            {
                'user': user.createJsonObject()
            },
            config
        );
    }

    /**
     * Log out user 
     */
    static logout = () => {
        localStorage.removeItem("user");
    }

     /**
     * Validate User 
     */
     static validateUser = ( token ) => {
        if( ! token )
            return;
        return true; // to do backend
        let config = {
            headers: {
                'Content-Type': 'application/json',
            } 
        }

        return axios.post(
            this.auth_url + 'validate',
            {
                'token': token
            },
            config
        )
    }


    /**
     * Get current user
     */
    static getCurrentUser = () =>{
        return localStorage.getItem("user");
    }

    /**
     * Get logged users Access token 
     * 
     */
    static authHeader = () => {
        const user = this.getCurrentUser();

        if( ! user.length ) return;

        return {
            'x-access-token': user
        };
    }
}
import axios from "axios";
import User from '../models/User';

// Auth Service class 
class AuthService {
    // API URL
    // To do set api url as an env variable
    AUTH_URL  = 'http://localhost:3001/api/auth/';

    /**
     * Register user 
     *
     * @param {User} Instance of the new User added
     * @return {booleam} Returns the result of the operation
     */
    static register = user => {
        if( typeof user !== User ) return;

        if( ! user.email || ! user.password ) return; 
        
        return axios.post( AUTH_URL + 'signup', user );
    }

     /**
     * Login user 
     *
     * @param {User} Instance of the User logged in
     * @return {booleam} Returns the 
     */
    static login = user => {
        if( typeof user !== User ) return;

        if( ! user.email || ! user.password ) return;

        return axios
            .post( AUTH_URL + 'signin', user )
            .then( (response) => {
                if( response.data.accessToken ) 
                    localStorage.setItem( 'user', JSON.stringify( response.data ) );
                
                return response.data    
            });
    }

    /**
     * Log out user 
     */
    static logout = () => {
        localStorage.removeItem("user");
    }

    /**
     * Get current user
     */
    static getCurrentUser = () =>{
        return JSON.parse(localStorage.getItem("user"));
    }
}
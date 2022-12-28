import AuthService from './auth.service';
import axios from 'axios';

class UserService{
    // API URL
    // To do set api url as an env variable
    USER_URL = 'http://localhost:3001/api/user/';

    // Get user content
    static getUserContent = () => {
        return axios.get( USER_URL );
    }
}
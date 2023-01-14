import AuthService from './auth.service';
import axios from 'axios';

class UserService{
    // API URL
    // To do set api url as an env variable
    static user_url = 'http://localhost:3001/api/user/';

    // Get user content
    static getUserContent = () => {
        return axios.get( this.user_url );
    }

    // Get user sites
    static getUserSites = () => {
        
        let config = {
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded',      
                Authorization: `Bearer ${AuthService.getCurrentUser()}`,
            } 
        }
        
        return axios.post   (
            this.user_url + 'sites/overview',
            {},
            config
        )
    }

    // Add site
    static importSite = ( site ) => {
        if( ! site )
            return;

        let config = {
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${AuthService.getCurrentUser()}`,
            }
        };

        return axios.post(
            this.user_url + 'sites/add',
            {
                'site': site.createJsonObject()
            },
            config
        );
    }

    static createTest = ( test ) => {
        if( ! test )
            return;

        let config = {
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${AuthService.getCurrentUser()}`,
            }
        };
        
        return axios.post(
            this.user_url + 'tests/create',
            {
                'test': test.createJsonObject()
            },
            config
        );
    }
}

export default UserService;
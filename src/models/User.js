export default class User {
    id = 0;
    username = '';
    password = '';
    email = '';
    reset_token = '';

    constructor( username, password, email ){
        this.username = username;
        this.password = password;
        this.email = email;
    }

    setUsername = ( username ) => {
        this.username = username;
    }

    setPassword = ( password ) => {
        this.password = password;
    }

    setEmail = ( email ) => {
        this.email = email;
    }

    setResetToken = ( token ) => {
        this.reset_token = token;
    }

    getUsername = () => {
        return this.username;
    }

    getEmail = () => {
        return this.email;
    }  

    getPassword = () => {
        return this.password;
    }

    getResetToken = () => {
        return this.reset_token;
    }

    async createJsonObject () {
        return {
            username: this.username,
            password: this.password,
            email: this.email,
        }
    }
}
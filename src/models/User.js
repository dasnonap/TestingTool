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

    getPassword = () => {
        return this.password;
    }

    getEmail = () => {
        return this.email;
    }

    getResetToken = () => {
        return this.reset_token;
    }
}
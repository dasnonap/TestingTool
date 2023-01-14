import React from "react";  
import UserService from "../../services/user.service";
import { redirect } from "react-router-dom";
import ResultTabs from "./ResultTabs";

class ResultsListing extends React.Component{
    constructor(...args){
        super(...args);
        this.state = {data: null}
    }

    // Request user results info
    async getData(){
        const res = await UserService.getUserTestResults();

        return await res.data;
    }

    // Load user sites when component is mounted
    componentDidMount = () => {
        if( !this.state.data ){
            this
                .getData()
                .then( data => this.setState( { data } ) )
                .catch(err => {
                    if( err.response.status === 400 ){
                        localStorage.removeItem("user");
                        return redirect("/");
                    }
                } );
        }
    }

    // Render component
    render(){
        return (
            <div className="results-listing">
                {console.log( this.state.data) }
                {
                    this.state.data ?
                    
                        <ResultTabs
                            resultSites={this.state.data.tests}
                        />                    
                    : ''
                }
            </div>
        );
    }
}

export default ResultsListing;
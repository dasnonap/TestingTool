import React from "react";
import UserService from "../../services/user.service";

class SiteListing extends React.Component{
    async getData() {
        const res = await UserService.getUserSites();
        return await res.data;
    }
    constructor(...args) {  
        super(...args);
        this.state = {data: null};
    }
    componentDidMount() {
        if (!this.state.data) {

            this
                .getData()
                .then(data => this.setState({data}))
            .catch(err => { /*...handle the error...*/});
        }
    }
    render() {
        return (
             <div className="sites-listing">
                <div className="listing__inner">
                {
                    this.state.data ? 
                    <em>{this.state.data.test}</em> :
                    this.state.data
                }
                </div>
            </div>
        );
    }
}
export default SiteListing;
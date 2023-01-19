import React from "react";
import UserService from "../../services/user.service";
import { redirect } from "react-router-dom";
import Button from "../UI/Button";
import Wrapper from '../UI/Wrapper';
import Form from '../Sections/Form';
import Site from '../../models/Site';
import SiteTabs from '../Sections/SiteTabs';

class SiteListing extends React.Component{
    constructor(...args) {  
        super(...args);
        this.state = {data: null};
        this.state = {openPopup: null};
        this.state = {error: null};
    }

    // Request user site info
    async getData() {
        const res = await UserService.getUserSites();
        return await res.data;
    }

    // Load user sites when component is mounted
    componentDidMount() {
        if (!this.state.data) {
            this
                .getData()
                .then( data => this.setState( {data}  ) )
                .catch(err => {
                    if( err.response.status === 400 ){
                        localStorage.removeItem("user");
                        window.location.reload();
                    }
                } );
        }
    }
    
    //Open popup - site addition
    handleOpenPopup( event ) {
        event.preventDefault();
        this.setState({ openPopup: true});
    }  

    // Handle Add site form submit 
    async handleSitesFormSubmit(event) {
        event.preventDefault();
    
        const $form = event.target,
              $inputs = $form.querySelectorAll('input[data-validate="true"]');
        let data = {};

        $inputs.forEach( async ( input, index ) => {
            let value = input.value;

            if ( value.length ){
                data[input.id] = value; 
            }
        });

        if( data ){
            const site = new Site( data.url );

            try {
                const response = await UserService.importSite( site );

                if( response.data && response.data.success  ){
                    this    
                        .getData()
                        .then( data => this.setState( {data}  ) )
                }    
            } catch (error) {
                if( error.response.status == 400 )
                    this.setState( { error : error.response.data.error } )
            }
        }   
    }

    render() {
        const siteFormFields = [
            {   
                type : 'text',
                id: 'url',
                validate : true,
                validationMessage: 'Please enter a valid url',
                placeholder: 'URL Address',
            },
        ];
        return (
            <div className="sites-listing">
                {
                    this.state.data && this.state.data.sites ?

                    <div className="listing__inner">
                        <SiteTabs
                            sites={this.state.data.sites}
                        />
                    </div>
                    : ''
                }

                {
                    <Wrapper>
                        <div className="listing__notice">
                            <Button
                                className="btn"
                                onClick={this.handleOpenPopup.bind(this)}
                                >
                                Add site?
                            </Button>
                        </div>

                        {this.state.openPopup ? 
                            <div className="listing__form">
                                <h4>Add your site</h4>

                                { this.state.error ?
                                    <div className="error-message">
                                        <p>
                                            {this.state.error}
                                        </p>
                                    </div>
                                : '' }

                                <Form
                                    className="form form--site"
                                    method="POST"
                                    action="?"
                                    onSubmit={this.handleSitesFormSubmit.bind(this)}
                                    submitLabel='Add site'
                                    fields={siteFormFields}
                                />
                            </div>
                        : ''}
                    </Wrapper>
                }
            </div>
        );
    }
}
export default SiteListing;
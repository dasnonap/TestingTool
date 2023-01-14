class Site {
    id = 0;
    api_token = '';
    user_id = 0;
    sitemap = '';
    protocol = '';
    server = '';

    constructor( url ){
        this.sitemap = url;
    }

    // Set Sitemap
    setSitemap = ( url ) => {
        this.sitemap = url;
    }

    // Get Sitemap
    getSitemap = () => {
        return this.sitemap
    }

    // Create Json Object 
    createJsonObject = () => {
        return {
            sitemap: this.sitemap,
        }
    }
}

export default Site;
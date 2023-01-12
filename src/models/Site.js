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

    setSitemap = ( url ) => {
        this.sitemap = url;
    }

    getSitemap = () => {
        return this.sitemap
    }

    createJsonObject = () => {
        return {
            sitemap: this.sitemap,
        }
    }
}

export default Site;
class Test {
    id = 0;
    site_id = 0;
    url = '';
    type_id = 0;
    result_images = '';
    result_report = '';

    constructor( site_id ){
        this.site_id = site_id;
    }

    // Get url 
    getUrl = () => {
        return this.url;
    }

    // Get Type ID
    getType = () => {
        return this.type_id;
    }

    // Get Result image
    getImageResult = () => {
        return this.result_images;
    }

    // Get Result
    getResultReport = () => {
        return this.result_report;
    }

    // Set url
    setUrl = ( url ) => {
        this.url = url;
    }

    // Set test type
    setType = ( type ) => {
        this.type = type;
    }

    createJsonObject = () => {
        return {
            site_id: this.site_id,
        }
    }
}

export default Test;
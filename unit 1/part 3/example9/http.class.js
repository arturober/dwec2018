const SERVER = 'http://localhost:3000';

class Http {
    /**
     * Makes an AJAX call to the server
     * @param {string} method GET, POST, PUT, DELETE
     * @param {string} url Server's url
     * @param {{}} headers Header like 'Content-Type'
     * @param {string} body Data to send to the server
     * @returns {Promise<any>} Data received in JSON format
     */
    static async ajax(method, url, headers = {}, body = null) {
        // return fetch(url, {
        //     method: method, 
        //     headers: headers,
        //     body: body
        // })
        let resp = await fetch(url, {method, headers, body});
        if(resp.status >= 300) throw resp.statusText;
        return resp.json();
    }

    static get(url) {
        return Http.ajax('GET', url);
    }

    /**
     * @param {string} url 
     * @param {{}} data Data in JSON format 
     */
    static post(url, data) {
        return Http.ajax('POST', url, {
            'Content-Type':'application/json'
        }, JSON.stringify(data));
    }

    /**
     * @param {string} url 
     * @param {{}} data Data in JSON format 
     */
    static put(url, data) {
        return Http.ajax('PUT', url, {
            'Content-Type':'application/json'
        }, JSON.stringify(data));
    }
    
    static delete(url) {
        return Http.ajax('DELETE', url);
    }
}


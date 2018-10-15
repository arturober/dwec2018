function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {
            resolve({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        }, error => {
            switch (error.code) {
                case error.PERMISSION_DENIED: // User didn't allow the web page to retrieve location
                    reject("User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE: // Couldn't get the location
                    reject("Location information is unavailable.");
                    break;
                case error.TIMEOUT: // The maximum amount of time to get location information has passed
                    reject("The request to get user location timed out.");
                    break;
                default:
                    reject("An unknown error occurred.");
                    break;
            }
        });
    });
}

getLocation().then(coords => {
    console.log(coords);
}).catch(error => console.error(error));

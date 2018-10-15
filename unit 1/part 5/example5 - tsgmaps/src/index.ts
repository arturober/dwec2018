import {load, urlSettings} from 'google-maps-promise';

urlSettings.key = 'AIzaSyBRo2dAm9wYZ4bXK2eJupQkCSFWmRo5P38';

load().then(gmaps => {
    navigator.geolocation.getCurrentPosition(pos => {
        new gmaps.Map(document.getElementById('map'), {
            center: new gmaps.LatLng(pos.coords.latitude, pos.coords.longitude),
            zoom: 18
        });
    });
});

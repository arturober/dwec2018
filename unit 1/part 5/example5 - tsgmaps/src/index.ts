import { urlSettings } from 'google-maps-promise';
import {Geolocation} from './geolocation.class';
import { GMap } from './gmap.class';

urlSettings.key = 'AIzaSyAX2skeHPuTfAp3kDCq8orUcCFHqhPqXJg';
urlSettings.libraries = ['places'];

document.addEventListener('DOMContentLoaded', async e => {
    let coords = await Geolocation.getPosition();
    let divMap = <HTMLDivElement>document.getElementById('map');
    let gmap = new GMap(divMap, coords);
    await gmap.loadMap();
    gmap.createMarker(coords, 'blue');

    const map = gmap.getMap();
    
    gmap.createAutocomplete(<HTMLInputElement>document.getElementById('search'));
});

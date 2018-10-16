import { load, urlSettings } from 'google-maps-promise';

export class GMap {
    private map: google.maps.Map = null;

    constructor(private divMap: HTMLDivElement, private coords: Coordinates) { }

    async loadMap(): Promise<void> {
        await load();
        this.map = new google.maps.Map(this.divMap, {
            center: new google.maps.LatLng(this.coords.latitude, this.coords.longitude),
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    }

    getMap(): google.maps.Map {
        return this.map;
    }

    createMarker(coords: Coordinates, color = 'red') {
        var opts: google.maps.MarkerOptions = {
            position: new google.maps.LatLng(coords.latitude, coords.longitude),
            map: this.map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/' + color + '-dot.png'
        };

        var marker = new google.maps.Marker(opts);
    }

    createAutocomplete(input: HTMLInputElement) {
        let autocomplete = new google.maps.places.Autocomplete(input);

        autocomplete.addListener('place_changed', e => {
            let place = autocomplete.getPlace();
            if (!place.geometry) return;

            this.map.panTo(place.geometry.location);
            let coords = <Coordinates>{
                latitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng()
            };
            console.log(coords);
            this.createMarker(coords, 'red');
        });
    }
}
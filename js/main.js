import locService from './services/loc.service.js'
import mapService from './services/map.service.js'


locService.getLocs()
    .then(locs => console.log('locs', locs))

window.onload = () => {
    mapService.initMap()
        .then(() => {
            console.log('Resolved')
            mapService.addMarker({ lat: 32.0749831, lng: 34.9120554 });
        })
        .catch(err => {
            console.log('INIT MAP ERROR', err)
        });

    locService.getPosition()
        .then(pos => {
        })
        .catch(err => {
            console.log('err!!!', err);
        })
}

document.querySelector('.btn').addEventListener('click', (ev) => {
    console.log('Aha!', ev.target);
    mapService.panTo(35.6895, 139.6917);
})

document.querySelector('.btn-user-location').addEventListener('click', () => {
    locService.getPosition()
        .then(pos => {
            console.log('HERE :', pos.coords.latitude)
            mapService.panTo(pos.coords.latitude, pos.coords.longitude);
            mapService.addMarker({ lat: pos.coords.latitude, lng: pos.coords.longitude});
        })
        .catch(err => {
            console.log('error :', err);
        })
})

document.querySelector('.btn-location-input').addEventListener('click', () => {
    var userInput = document.querySelector('.location-input').value;
    locService.getUserInput(userInput)
        .then(data => {
            mapService.panTo(data);
            mapService.addMarker(data);
        })
})

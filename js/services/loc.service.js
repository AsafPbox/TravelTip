var locs = [{ lat: 11.22, lng: 22.11 }]

function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}


function getPosition() {
    console.log('Getting User Pos');

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}



function getUserInput(location){
    const API_KEY = 'AIzaSyC-JyCcisIl1gV-_mRY8vuN9FidPuHRx_c';
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${API_KEY}`)
        .then(respone => {
            if(respone.data) {
                return respone.data.results[0].geometry.location
            // console.log(respone.data.results[0].geometry.location);
            // mapService.panTo(respone.data.results[0].geometry.location.lat, respone.data.results[0].geometry.location.lng);
            }
        })
}


export default {
    getLocs: getLocs,
    getPosition: getPosition,
    getUserInput
}

// function getUserInput(location){
//     const API_KEY = 'AIzaSyC-JyCcisIl1gV-_mRY8vuN9FidPuHRx_c';
//     axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${API_KEY}`)
//         .then(respone => {
//             if(respone.data) {
//             // return respone.data.results[0].geometry.location;
//             console.log(respone.data.results[0].geometry.location);
//             mapService.panTo(respone.data.results[0].geometry.location.lat, respone.data.results[0].geometry.location.lng);
//             }
//         })
//         .catch(error => {
//             console.log('ERROR :', error);
//             return error;      
//         })
// }

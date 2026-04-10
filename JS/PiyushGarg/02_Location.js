// alert('ok');

const button = document.getElementById('get-location');

function gotLocation(position){
    console.log(position);
}

function failedToGet(){
    console.log('There was some issue');
}

// button.addEventListener('click', async () => {
//     const result = navigator.geolocation.getCurrentPosition(() => {}, () => {})
// })

button.addEventListener('click', async () => {
    const result = navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
});



// latitude and longitude
// coordinates

async function getData(lat, long) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=930971becfa941f882053344220412&q=${lat},${long}&aqi=yes`
    );
    return await promise.json();
}

async function gotLocation(position){
    const result = await getData(
        position.coords.latitude, 
        position.coords.longitude
    );
    console.log(result);
}

function failedToGet(){
    console.log('There was some issue');
}

button.addEventListener('click', async () => {
    const result = navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
});


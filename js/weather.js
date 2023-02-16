const API_KEY = "23edc589a64419d8ac9093e2b28a7825";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            weather.innerText = data.name;
            city.innerText = data.weather[0].main;
            
        });
}
function onGeoError() {
    alert("We can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
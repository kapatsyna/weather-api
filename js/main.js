function getWeather(id) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=6744674c321f6081b897d3b1c15538df`)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log(data);
            document.querySelector('.city-name').textContent = data.name;
            document.querySelector('.temp').innerHTML = 'Now it is: ' + Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        })
}
getWeather(618426);
let select = document.querySelector('select');
// select.style.border = '2px solid #42cbf5';
let options = document.querySelectorAll('option');
select.addEventListener("click", function () {
    if (this.value == 618426) {
        getWeather(618426);
    }
    if (this.value == 617638) {
        getWeather(617638);
    }
    if (this.value == 618405) {
        getWeather(618405);
    }
});
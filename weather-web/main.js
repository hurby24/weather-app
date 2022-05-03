const temp = document.querySelector('.temp');
const dateOutPut = document.querySelector('.date');
const condutionOutPut = document.querySelector('.condition');
const nameOutPut = document.querySelector('.name');
const icon = document.querySelector('.icon');
const form = document.getElementById('LocationInput');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');

let cityInput = "Baku";

 form.addEventListener('submit', (e) => {
     if(search.value.length == 0){
         alert("Please enter a city name");
     }

     else{
        cityInput = search.value;
         fetchWeatherData();
       search.value = "";
    }

    e.preventDefault();
});

function fetchWeatherData(){
    fetch(`https://api.weatherapi.com/v1/current.json?key=af48512c7e704da8b46135111220305&q=${cityInput}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        temp.innerHTML = data.current.temp_c + "&#176;C";
        condutionOutPut.innerHTML = data.current.condition.text;
        
        const datas = data.location.localtime;
        const y = parseInt(datas.substring(0,4));
        const m = parseInt(datas.substring(5,2));
        const d = parseInt(datas.substring(8,2));
        dateOutPut.innerHTML = datas.slice(0,10);
        nameOutPut.innerHTML = data.location.name;

        const iconID = data.current.condition.icon.substr("//cdn.weatherapi.com/weather/64x64/".length);

        icon.src = "./icons/" + iconID;

    })

}


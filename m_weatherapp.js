var button = document.querySelector('.sub_button');
var input_value = document.querySelector('.input_value');
var city_name = document.querySelector('.city-name');
var info = document.querySelector('.info');
var temperature = document.querySelector('.temperature');
var my_key = config.API_KEY;


button.addEventListener('click', function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+input_value.value+'&appid='+my_key)
    .then(response => response.json())
    .then(data => {
        var name_value = data['name'];
        var tmp_value = data['main']['temp'];
        var info_value = data['weather'][0]['description'];
        
        city_name.innerHTML = name_value;
        temperature.innerHTML = Math.trunc(tmp_value - 273.15) + ' C°';
        info.innerHTML = info_value;
    })

.catch(err => alert('Wrong city name!'))
})

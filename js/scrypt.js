var YOUR_ACCESS_KEY = "3594c2729bddbee4375ff1fddc463584"

function search(){
    fetch(`http://api.weatherstack.com/current?access_key=${YOUR_ACCESS_KEY}&query=${document.getElementById("search").value}`)
    .then((response) => response.json())
    .then(data =>
        {

            document.getElementById("data-container").className = "data-container"

            if(data.hasOwnProperty('error')){
                deleteAll();
                document.getElementById("city").innerHTML = data.error.code + " " + data.type + " ";
                document.getElementById("date").innerHTML = data.error.info;
                
            }else if(data.hasOwnProperty('request')) {
                document.getElementById("city").innerHTML = data.location.name + ', ' + data.location.country;
                document.getElementById("date").innerHTML = data.current.observation_time;
                document.getElementById("icon").src = data.current.weather_icons[0];
                document.getElementById("temp").innerHTML = data.current.temperature + "°C";
                document.getElementById("weather_descriptions").innerHTML = data.current.weather_descriptions[0];
                document.getElementById("wind-div").innerHTML =data.current.wind_speed + " kmph";
                document.getElementById("wind-dir-div").innerHTML =data.current.wind_dir;
                document.getElementById("precip-div").innerHTML =data.current.precip + " mm";
                document.getElementById("pressure-div").innerHTML =data.current.pressure + " mb";
                document.getElementById("uv-index-div").innerHTML =data.current.uv_index + " ";
                document.getElementById("humidity-div").innerHTML =data.current.humidity + "% ";
                document.getElementById("feelslike").innerHTML = "Feels Like: " + data.current.feelslike + "°C";

                document.getElementById("wind-label").innerHTML = "Wind:";
                document.getElementById("wind-dir-label").innerHTML = "Wind Direction:";
                document.getElementById("humidity-label").innerHTML = "Humidity:";
                document.getElementById("precip-label").innerHTML = "Precipitation:";
                document.getElementById("pressure-label").innerHTML = "Pressure:";
                document.getElementById("uv-label").innerHTML = "UV Index:";
            }
        }
    );
}

function deleteAll(){
    document.getElementById("city").innerHTML = "";
    document.getElementById("date").innerHTML = "";
    document.getElementById("icon").src = ""
    document.getElementById("temp").innerHTML = "";
    document.getElementById("weather_descriptions").innerHTML = "";
    document.getElementById("wind-div").innerHTML = "";
    document.getElementById("wind-dir-div").innerHTML = "";
    document.getElementById("precip-div").innerHTML = "";
    document.getElementById("pressure-div").innerHTML = "";
    document.getElementById("uv-index-div").innerHTML = "";
    document.getElementById("humidity-div").innerHTML = "";
    document.getElementById("feelslike").innerHTML = "";

    document.getElementById("wind-label").innerHTML = "";
    document.getElementById("wind-dir-label").innerHTML = "";
    document.getElementById("humidity-label").innerHTML = "";
    document.getElementById("precip-label").innerHTML = "";
    document.getElementById("pressure-label").innerHTML = "";
    document.getElementById("uv-label").innerHTML = "";

}
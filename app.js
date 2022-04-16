let weather={


    apiKey:"897d4121e12f473eb200d7517bfc6829",
    fetchWeather: function(city){

        fetch("https://api.weatherbit.io/v2.0/current?&city=" + city + "&key=897d4121e12f473eb200d7517bfc6829&include=minutely")
    
     .then((response)=>response.json())
     .then((data)=>this.displayWeather(data)) ;
    },

displayWeather: function(data){
     
        const name= data.data[0].city_name;
        const icon=data.data[0].weather.icon;
        const description=data.data[0].weather.description;
        const tempe=data.data[0].temp;
        const wind=parseInt(data.data[0].wind_spd);
        const aqi= data.data[0].aqi;


        console.log(name,icon,tempe,description);
        document.querySelector(".city").innerHTML="Weather in "+name;
        document.querySelector(".temp").innerHTML= tempe+` °C`;
        document.querySelector(".description").innerHTML= description;
        document.querySelector(".icon").src="https://www.weatherbit.io/static/img/icons/"+icon+".png";
        document.querySelector(".wind").innerHTML= `Wind Speed : `+wind+"m/s";
        document.querySelector(".aqi").innerHTML="AQI : "+aqi;
    
     document.querySelector(".weather").classList.remove("loading");

     document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";

},

search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
}


    
};

document.querySelector(".search button").addEventListener("click",function(){

    weather.search();

})


document.querySelector(".search-bar").addEventListener("keyup",function(event){

    if(event.key=="Enter")
    {
        weather.search();
    }
})


weather.fetchWeather("Chennai");
let weather = {
    apiKey: "f9acd8cfc8aee21c46d14ccda9c4985a",
    getWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid="+this.apiKey
        )
        .then ((response) => response.json())
        .then ((data) => this.showWeather(data))
      },showWeather: function (data) {
        const { name } = data;
        const { temp, temp_min, temp_max, humidity} = data.main;
        const { icon, description } = data.weather[0];
        console.log(name, temp, temp_min, temp_max, icon, description, humidity)
        document.querySelector(".city").innerText =  name;
        document.querySelector(".temp").innerText = "Current Temperature:" + Math.round(temp) + "°F";
        document.querySelector(".temp_max").innerText = "Temperature High:" + Math.round(temp_max) + "°F";
        document.querySelector(".temp_min").innerText = "Temperature Low:" + Math.round(temp_min) + "°F";
        document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
    },find: function () {
        this.getWeather(document.querySelector(".searchbar").value);
    }
};document.querySelector(".search button").addEventListener("click", function (){
    weather.find();
});document
  .querySelector(".searchbar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.find();
    }
  });


weather.getWeather()
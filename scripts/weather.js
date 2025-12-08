const api = "ba29631a8e51ca26cab2922ee31d4c4a";

const city = "Warsaw, IN, US";


async function checkWeather(){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=imperial`);
        const data = await response.json();

        document.getElementById("temp").innerText ="Current Temperature:" + " " + Math.round(data.main.temp) + " Degrees Farenheit";

    }
    catch (error){
        console.error("Error:", error);
        document.getElementById("temp").innerText = "Error";
    }
}
checkWeather();

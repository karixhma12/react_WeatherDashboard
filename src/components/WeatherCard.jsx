import usePrev from "../hooks/usePrev";
import useFetch from "../hooks/useFetch";

function WeatherCard({city}){
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    console.log("API KEY:" + apiKey);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const {data,loading,error} = useFetch(url);

    const prevTemp = usePrev(data?.main?.temp);

    if(loading){
        return <p> Loading... </p>
    }

    if(error){
        return <p> Error fetching weather! </p>
    }

    return(
        <div className="glass">
            <h2 className="weather-city"> {city} </h2>
            <p className="weather-temp"> Current Temperature : {data?.main?.temp}°C</p>
            <p className="weather-temp"> Previous Temperature : {prevTemp}°C </p>
            <p className="weather-desc"> Description : {data?.weather?.[0]?.description} </p>
        </div>
    )
   
}

export default WeatherCard;
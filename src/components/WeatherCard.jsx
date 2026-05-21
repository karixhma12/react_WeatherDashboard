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
        <div>
            <h2> {city} </h2>
            <p> Current Temperature : {data?.main?.temp}°C</p>
            <p> Previous Temperature : {prevTemp}°C </p>
            <p> Description : {data?.weather?.[0]?.description} </p>

        </div>
    )
   
}

export default WeatherCard;
import {useState} from "react";
import {useSetAtom} from "jotai";
import { favouriteCitiesAtom } from "./store/atoms";
import SearchBar from "./components/SearchBar";
import StatusBar from "./components/StatusBar";
import WeatherCard from "./components/WeatherCard";
import FavouriteCities from "./components/FavouriteCities";
import "./index.css";
import "./App.css";

function App(){
  const [city,setCity] = useState('London');
  console.log("city:", city);
  const setFavourites = useSetAtom(favouriteCitiesAtom);

  const addToFavourities = ()=>{
    setFavourites((prev)=>{
      if(prev.includes(city)){
        return prev;
      }
      else{
        return [...prev,city];
      }
    })
  }

  return(
    <div className="app">
      <h1 className="app-title">🌤 Weather Dashboard</h1>
      <SearchBar onSearch={setCity}/>
      <StatusBar/>
      {city && <WeatherCard city={city}/>}
      <button className="btn" onClick={addToFavourities}> Add To Favourites </button>
      <FavouriteCities onCityClick={setCity}/>
    </div>
  )
}

export default App;
import { useAtom } from 'jotai';
import { favouriteCitiesAtom } from "../store/atoms";

function FavouriteCities({onCityClick}){
    const [favourities,setFavourites] = useAtom(favouriteCitiesAtom);

    const removeCity = (cityToRemove)=>{
        setFavourites(favourities.filter(city=>(city!=cityToRemove)))
    }

    if(favourities.length===0){
        return(
            <p> No favourites yet! </p>
        )
    }

    return(
        <div className="glass">
            <h3 className="fav=title"> ⭐ Favourite Cities </h3>
            {favourities.map(city=>{
                return(
                    <div key={city} className="fav-item">
                        <span className="fav-city" onClick={()=>{onCityClick(city)}}> {city} </span>
                        <button className="fav-remove" onClick={()=>{removeCity(city)}}> Remove </button>
                    </div>
                )
            })

            }
        </div>
    )
}

export default FavouriteCities;
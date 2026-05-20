import {useRecoilState} from "recoil";
import { favouriteCitiesAtom } from "../store/atoms";

function FavouriteCities({onCityClick}){
    const [favourities,setFavourites] = useRecoilState(favouriteCitiesAtom);

    const removeCity = (cityToRemove)=>{
        setFavourites(favourities.filter(city=>(city!=cityToRemove)))
    }

    if(favourities.length===0){
        return(
            <p> No favourites yet! </p>
        )
    }

    return(
        <div>
            <h3> Favourite Cities </h3>
            {favourities.map(city=>{
                return(
                    <div key={city}>
                        <span onClick={()=>{onCityClick(city)}}> {city} </span>
                        <button onClick={()=>{removeCity(city)}}> Remove </button>
                    </div>
                )
            })

            }
        </div>
    )
}

export default FavouriteCities;
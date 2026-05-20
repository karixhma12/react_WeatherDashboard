import {useState,useEffect} from "react";
import useDebounce from "../hooks/useDebounce";


function SearchBar({onSearch}){

    const [inputValue,setInputValue] = useState('');
    const debouncedValue = useDebounce(inputValue,500);

    useEffect(()=>{
        onSearch(debouncedValue)
    },[debouncedValue])

    return(
        <input value={inputValue} onChange={e=>{setInputValue(e.target.value)}}></input>   
    )
}

export default SearchBar;
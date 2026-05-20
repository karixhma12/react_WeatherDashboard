import {useState,useEffect} from "react";

function useFetch(url){
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            try{
                const result = await fetch(url);
                const response = await result.json();
                setData(response);
            }
            catch(err){
                setError(err);
            }
            finally{
                setLoading(false);
            }
        };


        fetchData();
    },[url]);

    return {data,loading,error};
}

export default useFetch;
import useIsOnline from "../hooks/useIsOnline";


function StatusBar(){
    const isOnline = useIsOnline();
    return(
        <div>
            {isOnline ? <p>🟢online</p> : <p>🔴offline</p>}
        </div>  
    )
}

export default StatusBar;
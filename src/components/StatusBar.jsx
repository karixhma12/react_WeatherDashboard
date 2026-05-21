import useIsOnline from "../hooks/useIsOnline";


function StatusBar(){
    const isOnline = useIsOnline();
    return(
        <div className="status-bar">
            {isOnline ? <><span>🟢</span><span>Online</span></> : <><span>🔴</span><span>Offline</span></>}
        </div>  
    )
}

export default StatusBar;
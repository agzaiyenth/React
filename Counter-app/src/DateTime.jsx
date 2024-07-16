import React, {useState, useEffect} from "react";


function DateTime(){
    const [currentdate,setCurrentdate]=useState(new Date());

    useEffect(()=>{
        const inter=setInterval(()=>{
            setCurrentdate(new Date());
        },1000);

    return ()=> {
        clearInterval(inter);
    }
    
    },[]);

    function padding(number){
        return ( number < 10 ? "0" : "") + number;
    }
function formatTime(){
    let hours=currentdate.getHours();
    const mins=currentdate.getMinutes();
    const second=currentdate.getSeconds();
    const emri=hours>=12 ? "PM":"AM";
    hours=hours%12||12;


    return `${padding(hours)}:${padding(mins)}:${padding(second)} ${emri}`

}

    
    return( 
        <div>
            <h1>Time : {formatTime()}</h1>
        </div>
        

    );

}
export default DateTime;
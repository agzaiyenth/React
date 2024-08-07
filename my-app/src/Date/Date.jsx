import {useState, useEffect} from "react";


function Date(){
    const [currentdate,setCurrentdate]=useState(new Date());
    useEffect(()=>{
        const inter=setInterval(()=>{
            setCurrentdate(new Date());
        },1000);
    return ()=> {
        clearInterval(inter);
    }
    
    },[]
);

function formatTime(){
    let hours=currentdate.getHours();
    const mins=currentdate.getMinutes();
    const second=currentdate.getSeconds();
    const emri=hours>=12 ? "PM":"AM";
    hours=hours%12||12;
    return `${hours}:${mins}:${second} ${emri}`

}
    
    return( 

        <h1>Todays date is {formatTime}</h1>

    );

}
export default Date;
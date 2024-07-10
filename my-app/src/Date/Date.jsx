import {useState} from "react";


function Date(){
    const [currentdate,setCurrentdate]=useState(90);
    function updateDate(){
        setCurrentdate(910);

    }
    return( 
    <div>
        <p>Todays date is {currentdate}</p>
        <button type="button" onClick={updateDate}></button>
    </div>
    );

}
export default Date;
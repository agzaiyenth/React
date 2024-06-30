import { useState } from 'react'

function Counter(){

    let [value,setValue]=useState(0);

    let increase = ()=>{
        setValue(value+1)
    }
    let decrease = ()=>{
        setValue(value-1)
    }
    let reset =()=>{
        setValue(0)
    }

    return(
        <div className='counter'>
                <h1>{value}</h1>
                <div className="buttons">
                    <button type="button" onClick={increase}>Increase</button>
                    <button type="button" onClick={reset}>Reset</button>
                    <button type="button" onClick={decrease}>Decrease</button>
                </div>
        </div>
    );

}
export default Counter
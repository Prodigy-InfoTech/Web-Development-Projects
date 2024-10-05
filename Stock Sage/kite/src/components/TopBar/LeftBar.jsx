import { useEffect } from "react";
import { useState } from "react"
import "./LeftBar.css"
function getRandomNumber(min, max) {
    // Ensure min is less than max
    if (min > max) {
        throw new Error("Minimum value should be less than or equal to maximum value.");
    }

    // Generate a random number in the specified range
    const randomNum = Math.random() * (max - min + 1) + min;

    // Return the generated random number
    return randomNum;
}


export default function LeftBar() {

    const [niftyValue,setNiftyValue] = useState({
        value:Math.floor(getRandomNumber(21000,25000)),
        change:Math.floor(getRandomNumber(-100,100))
    });
    const [sensexValue, setSensexValue] = useState({
        value:Math.floor(getRandomNumber(21000,25000)),
        change:Math.floor(getRandomNumber(-100,100))
    });

    useEffect(()=>{
        setInterval(()=>{
            setNiftyValue({
                value:Math.floor(getRandomNumber(21000,25000)),
                change:Math.floor(getRandomNumber(-100,100))
            })
    
            setSensexValue({
                value:Math.floor(getRandomNumber(80000,85000)),
                change:Math.floor(getRandomNumber(-100,100))
            })
        },5000)
        
    },[])

    return (
        <div className="container">
            <div className="row d-flex mt-3">
                <div className="col-md-6">
                    <div className=  {niftyValue.change > 0 ? "nifty d-flex align-items-center justify-content-center green": niftyValue.change < 0 ? "nifty d-flex align-items-center justify-content-center red" : "nifty d-flex align-items-center justify-content-center"}>
                            <p className="me-2"> <b>Nifty 50</b> </p>
                            <p className="me-2">{niftyValue.value}</p>
                            <p>{niftyValue.change}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className=  {sensexValue.change > 0 ? "sensex d-flex align-items-center justify content center green": sensexValue.change < 0 ? "sensex d-flex align-items-center justify content center red" : "sensex d-flex align-items-center justify content center"}>
                        <p className="me-2"> <b>Sensex</b></p>
                        <p className="me-2">{sensexValue.value}</p>
                        <p>{sensexValue.change}</p>
                    </div>
                </div>
            </div>


        </div>
    )
}
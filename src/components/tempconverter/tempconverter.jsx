import { useState } from "react";
import { Input } from "../input/input";
import "./tempconverter.css";

const tempunit = {celsius:"celsius",fahrenheit:"fahrenheit"};

export function TemperatureConverter(){
    const [fahrenheit,setFahreheit] = useState(0);
    const [celsius,setCelsius] = useState(0);
    const[unit,setUnit] = useState(tempunit.celsius);

    function convertToFahrenheit(e){
        let value = e.target.value;
        setCelsius(value);
        setFahreheit((value * (9/5) + 32));
        setUnit(tempunit.celsius);
    }
    function convertToCelsius(e){
        let value = e.target.value;
        setFahreheit(value)
        setCelsius((value - 32) * 5/9);
        setUnit(tempunit.fahrenheit);
    }
    return(
        <div className="wrapper flex flex-col align-center">
            <header className="main-header">
                <h1>Temperature converter</h1>
            </header>
            <div className="container flex flex-col justify-center align-center">
                <div className="inputs-wrapper flex flex-col align-center justify-center">
                    <Input temp={celsius} convert={convertToFahrenheit} label="Degrees celsius"/>
                    <div className="equalsign">=</div>
                    <Input temp={fahrenheit} convert={convertToCelsius} label="Degrees fahrenheit" />
                </div>
                <div className="formula-wrapper flex align-center">
                    <div className="formula-title">Formula:</div>
                    <div className="formula">{(unit === tempunit.celsius) ? `(${celsius}\u00B0C x 9/5) + 32 = ${fahrenheit}\u00B0F`:`(${fahrenheit}\u00B0F - 32) x (5/9) = ${celsius}\u00B0C`}</div>
                </div>
            </div>
            
        </div>
    )
}
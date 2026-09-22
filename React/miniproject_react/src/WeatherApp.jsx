import { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
export default function WeatherApp()
{
    let [weatherInfo,setInfo]=useState(
    {
        city:'Bangalore',
        feelsLike:16.67,
        humidity:88,
        temp:16.65,
        tempMax:17.97,
        tempMin:14.93,
        weather:"few clouds"
    })
    
    let updateInfo=(newInfo)=>{
        setInfo(newInfo);
    }
    return(
        <div style={{textAlign:'center'}}>
            <h1>Weather app</h1>
            <SearchBox updateInfo={updateInfo}/>
           
            <br></br><br></br>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
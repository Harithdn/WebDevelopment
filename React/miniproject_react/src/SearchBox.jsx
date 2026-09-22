 import TextField from '@mui/material/TextField';
 import Button from '@mui/material/Button';
 import './SearchBox.css'
 import { useState } from 'react';
export default function SearchBox({updateInfo})
{
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL='https://api.openweathermap.org/data/2.5/weather';
    const API_KEY='793762d3e02de76a05233c7c0c812b34';

    let getWeatherInfo=async ()=>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description
        }
        return result;
    }

    

    let handleChange=(event)=>{
        setCity(event.target.value)
    }

    let handleSubmit= async(event)=>{
        try{
        event.preventDefault();
        let newInfo= await getWeatherInfo();
        updateInfo(newInfo);
        setCity("");
        }catch(err){
            setError(true);
        }
        
    }
    return(
        <div className='SearchBox'>
           
            <form onSubmit={handleSubmit}>
                <TextField
                 id="city"
                  label="City"
                   variant="outlined"
                    value={city}
                    onChange={handleChange} 
                     required/>
                <br></br>
                 <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{color:'red'}}>No such place exists in our api!</p>}
               
            </form>
        </div>
    )

}
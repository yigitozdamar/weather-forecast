import React, { useState } from 'react'
import axios from 'axios';

const key = process.env.REACT_APP_WEATHER_API_KEY

const WeatherContext = React.createContext()

function SelectedCity() {
    const [forecast, setForecast] = useState();
    return {
        forecast,
        async getData(city) {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`)
            setForecast(res.data)
        }
    }
}

export function WeatherProvider({children}){
    const value = SelectedCity()

    return(
        <WeatherContext.Provider value={value}>
            {children}
        </WeatherContext.Provider>
    )
}

export default function WeatherConsumer() {
    return React.useContext(WeatherContext);
}
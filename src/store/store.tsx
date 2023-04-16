import { configureStore } from "@reduxjs/toolkit";
import ApiWeatherReducer from '../slice/WeatherApiSlice'


export  const store = configureStore({
    reducer:{
        apiWeather:ApiWeatherReducer

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

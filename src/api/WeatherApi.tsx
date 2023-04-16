import axios from 'axios'
const _APIKEY="1cee92a515fc9bc6b5e4265c5c4d83ab"


export const getCityWeather:any = async(arg:string)=>{
    const {data} = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${arg}&appid=${_APIKEY}`)

    return  data
}
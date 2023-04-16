import React, { useEffect } from 'react';
import { useAppDispatch,useAppSelector } from '../../hooks/ReduxHooks';
import './WeatherContent.scss';
import { getCityWeather } from '../../api/WeatherApi';
import LoadingComponent from '../LoadingComponent';
import ErrorComponent from '../ErrorComponent';
import axios from 'axios'
import { updateState } from '../../slice/WeatherApiSlice';


const WeatherContentField = () => {
    const dispatch = useAppDispatch()
    const [weather,setWeather] = React.useState([])
    const data = useAppSelector(state=>state.apiWeather.list)
    const{loading,error} = useAppSelector(state=>state.apiWeather)
    const[isDay,setIsDay] = React.useState(false)

    const getHoursAndMinutes=(data:number)=>{
        const date = new Date(data * 1000);
        const hoursAndMinutes = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        return hoursAndMinutes
    }
 const getHours=(data:number)=>{
        const date = new Date(data * 1000);
        const hours = date.toLocaleTimeString([], {hour: '2-digit'})
        return hours
    }
    const time:number =Number(getHours(data.dt)) 

    
    useEffect(()=>{
        if(time<=20&&time>=6){
           setIsDay(true)
        }
        else{
            setIsDay(false)
        }
        getCityWeather('sochi')
        .then((res:any)=>dispatch(updateState(res)))
    },[])

//     let night="https://media.tenor.com/pzvqar0jarkAAAAM/night-starrynight.gif"
// let day=

if(loading){
    return <LoadingComponent/>
}



    return (
     <>
        {data.name?<div className='main '
        style={{
        
           backgroundImage:'none'
        }}
        >
         <h2 className=' text-slate-100  text-2xl center font-semibold mb-2'>Weather App</h2>
         <div>
                <p className=' text-left font-sans text-slate-100 text-lg font-semibold'>{data?.name} - {data?.sys.country}</p>
                <p className=' text-left font-sans text-slate-200  text-base font-semibold'> сейчас {getHoursAndMinutes(data.dt)}</p>
           </div>
           <div className='flex gap-3 mt-3'>
               <div><span  className=' text-left font-sans text-slate-100 text-2xl font-semibold' >{(data?.main.temp-273).toFixed(0)}° </span></div>
               <div><img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="" /></div>
               <div>
                <p className=' text-left font-sans text-slate-100  text-base font-semibold'>{data?.weather[0].main}</p>
                <p className=' text-left font-sans text-slate-200  text-base font-semibold'>feels like {(data?.main.feels_like-273).toFixed(0)}° </p>
               </div>
           </div>
           <div className='flex mt-3 gap-7'>
            <div className=' text-left font-sans text-slate-200  text-base font-semibold'>{data?.wind.speed.toFixed(2)} m/s</div>
            <div className=' text-left font-sans text-slate-200  text-base font-semibold'>{data?.main.humidity} %</div>
            <div className=' text-left font-sans text-slate-200  text-base font-semibold'>{data?.main.pressure*0.75} mm Hg</div>
           </div>
        
        
        </div>
        :
      <div className='main'>  <LoadingComponent/></div>
        }
        </>
    );
};

export default WeatherContentField;
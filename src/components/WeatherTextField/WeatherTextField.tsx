import React from 'react';
import {useQuery} from 'react-query'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getCityWeather } from '../../api/WeatherApi';
import { useAppDispatch,useAppSelector } from '../../hooks/ReduxHooks';
import { updateState,getError,getLoading } from '../../slice/WeatherApiSlice';
const WeatherTextField = () => {
const [city,setCity] =React.useState<string>('Sochi')
const dispatch = useAppDispatch()

const info = useAppSelector(state=>state.apiWeather.list)


const {data,isLoading,isError} = useQuery(['coins',city],()=>

    getCityWeather(city),
    {
        keepPreviousData:true
    })


    React.useEffect(()=>{
        dispatch(getError(isError))
        dispatch(getLoading(isLoading))
    },[isError,isLoading])
 
const onChangeWeatherState=()=>{
  if(data){
    dispatch(updateState(data))
  }
}


console.log(info)
    
    return (
        <div className='p-2 '>
       <div className='mb-8'><TextField className='p-2 ' color='error'  onChange={(e)=>{setCity(e.target.value)}}  id="outlined-basic" label="Сhoose a city" variant='standard' /></div>
       <Button 
       style={{background:"crimson",width:'100%'}}
       onClick={()=>{
        onChangeWeatherState()
       }} variant='contained' >Find</Button>
        </div>
    );
};

export default WeatherTextField;
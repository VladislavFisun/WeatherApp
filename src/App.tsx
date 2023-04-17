import React from 'react';
import { useAppSelector,useAppDispatch } from './hooks/ReduxHooks';
import { uploadColor } from './slice/WeatherApiSlice';
import './App.css';
import WeatherContainer from './components/WeatherContainer/WeatherContainer';

function App() {
const dispatch = useAppDispatch()

const [bg,setBg] = React.useState('')
const [btn,setBtn] = React.useState('')

  const data = useAppSelector(state=>state.apiWeather.list.dt)

  const getHours=(data:any)=>{
    const date:any = new Date(data * 1000); 
    const hours:any = date.getHours();
    return hours
}
const time:number =(getHours(data)) 


const getRightBg=(data:number)=>{
  if(6<=data&&data<=12 ){
    setBg('https://media.tenor.com/RRhijk6pHAoAAAAd/good-morning.gif')
    dispatch(uploadColor('warning'))
  }
  else if( 12<data&&data<18 ){
   setBg('https://media.tenor.com/RRhijk6pHAoAAAAd/good-morning.gif')
   dispatch(uploadColor('success'))
  }
  else if(18<=data&&data<=22 ){
   setBg('https://media.tenor.com/ViyozQ7BUtcAAAAM/anime-lofi.gif')
   dispatch(uploadColor('error'))
  }
  else if( 22<data&&data<6 ){
    setBg('https://media.tenor.com/3F5XmYhEARwAAAAd/chill-japan.gif')
    dispatch(uploadColor('secondary'))
  } 
  else{
      setBg('https://media.tenor.com/ViyozQ7BUtcAAAAM/anime-lofi.gif')
  }
   
  }
 

React.useEffect(()=>{
  getRightBg(time)

},[data])


  

  return (
    
<div style={{
    height:'100vh',
    backgroundImage:`url(${bg})`
  }}
  className='main flex items-center '

>
  <WeatherContainer/>
</div>
  );
}




export default App;

import React from 'react';

import './App.css';
import WeatherContainer from './components/WeatherContainer/WeatherContainer';

function App() {
  return (
<div style={{
    height:'100vh',
background:"url(https://media.tenor.com/ViyozQ7BUtcAAAAM/anime-lofi.gif)",
backgroundRepeat:'no-repeat',
backgroundSize:'cover',
backgroundPosition:'center',
}}
className='flex items-center '
>
  <WeatherContainer/>
</div>
  );
}

export default App;


import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import WeatherContentField from '../WeatherContentField/WeatherContentField';
import WeatherTextField from '../WeatherTextField/WeatherTextField';



const Item = styled(Paper)(({ theme }) => ({
    borderRadius:'10px',
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function WeatherContainer() {
  return (
  
 <>
    
      <Container maxWidth="md" >
<div className=' p-12  pt-20 pb-20  rounded-xl  backdrop-blur-sm bg-white/30 '>
        <Grid container spacing={8} alignItems='center'>
    <Grid item xs={4}>
   <WeatherTextField/>
    </Grid>
    <Grid item xs={8}>
      <div style={{height:'100%',display:'flex', flexDirection:'column',justifyContent:'center',background:'crimson',borderRadius:'12px'}}><WeatherContentField/></div>
    </Grid>
    
  </Grid>
</div>
      </Container>
 </>
   
  );
}
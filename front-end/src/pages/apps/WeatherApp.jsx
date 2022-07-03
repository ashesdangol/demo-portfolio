import React,{useState, useEffect} from "react";
import {axios} from "axios";
import {Paper, TextField, Fab, Avatar, Typography} from '@mui/material'
import ThermostatIcon from '@mui/icons-material/Thermostat';
// import { shadows } from '@mui/system';

function WeatherApp(){
  const [data, setData]=useState({
    cntryName:'',
    wtherMain:'',
    icon:'',
    iconUrl:'',
    temp:'',
    weatherDescription:''
  });

  const [dataReceived, setDataReceived]=useState(false);

  const [cityName, setCityName]=useState('');
  const [countryName, setCountryName]=useState('');
  const url ='/getWeather';
  const getWeatherData = async() =>{
    try{
      await axios.get("/getWeather").then((response)=>{
        setData(response.data)
       
      })
    }catch(err){
      setData("Could not find data")
    }
      
  }
  useEffect(()=>{
    getWeatherData();
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.post(url, {
        cityName : cityName,
        countryName : countryName
      }).then((response)=>{
        setData(response.data)
        setDataReceived(true);
      });
      // console.log(response.data)
    }catch(error){
      console.log(error.response)
    }

  }
  

  return(
    <Paper className="paper-style">
        <h1 className="text-center">Current Weather</h1>
       
        
        <form className="form-style-1">
          <TextField  value={cityName} label="City Name" onChange={(e)=>setCityName(e.target.value)} type="text" name="cityNameInput" className="paper-style__text-field"/>
          <TextField  label="Country Name"value={countryName} onChange={(e)=>setCountryName(e.target.value)}type="text" name="countryInput" className="paper-style__text-field"/>
          <Fab className="addButton" size="small" color="primary" aria-label="delete" onClick={handleSubmit}>
              <ThermostatIcon />
          </Fab>
       
        </form>

        {
          dataReceived ? 
          <Paper className="inner-paper-style weather-card">
          <h3 className="weather-card__heading"> <em>{data.cntryName}</em>
          <div className="weather-card__badge mb-10" >
            <Avatar color="info"alt="weather icon" src={data.iconUrl} sx={{ width: 40, height: 40, boxShadow: "10px 10px 10px lightblue", backgroundColor: "#03a9f4" }}/>
          </div>
              
            
          </h3>
          <Typography sx={{ textAlign:'center',boxShadow: "10px 10px 10px lightblue", backgroundColor: "#03a9f4", padding:'10px' }}>Weather condition :<em> {data.wtherMain}</em></Typography>
          <Typography sx={{ textAlign:'center',boxShadow: "10px 10px 10px lightblue", backgroundColor: "#03a9f4", padding:'10px'  }}>Weather condition :<em> {data.weatherDescription}</em></Typography>
          <Typography sx={{ textAlign:'center',boxShadow: "10px 10px 10px lightblue", backgroundColor: "#03a9f4", margin:'1rem auto', padding:'10px'}}>Weather Temparature :<em> {data.temp}</em></Typography>
        </Paper>:
          ''
        }
         
      </Paper>
  )
}
export default WeatherApp;
import React,{useState, useMemo} from "react";
import axios from "axios";
import {Paper, TextField, Fab, Avatar, Typography} from '@mui/material';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import countryList from 'react-select-country-list';
import Select from 'react-select'

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

  const options = useMemo(() => countryList().getData(), [])


  const url ='/api/getWeather';
  
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    await axios.post(url,{
        cityName : cityName,
        countryName : countryName
    }
    )
    .then(function(response){
      setData(response.data);
      setDataReceived(true);;
      
    })
    .catch(function(error){
      console.log(error)
    })
  
    
  }
  

  return(
    <Paper className="paper-style">
        <h1 className="text-center">Current Weather</h1>
       
        
        <form className="form-style-1">
          <TextField  value={cityName} label="City Name" onChange={(e)=>setCityName(e.target.value)} type="text" name="cityNameInput" className="paper-style__text-field"/>
          <Select className="w-[92%] my-5" label="Country Name" name="countryInput" options={options} value={countryName} onChange={countryName => setCountryName(countryName)}  />
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
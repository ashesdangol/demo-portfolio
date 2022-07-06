import React,{useState} from 'react';
import axios from "axios";
import { Fab} from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';


function RandomApi(){
 
    const [currency, setCurrency] = useState('');

    const [btc, setBtc] = useState({
        rate:'',
        symbol:''
    });

   
    const strToDecode = btc.symbol;
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(`<!doctype html><body>${strToDecode}`, 'text/html').body.textContent;


    const url ='/api/trackBtc';
  
    
    const handleChange = (event) => {
            setCurrency(event.target.value);
        };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(url,{
            currency : currency
        }
        )
        .then(function(response){
            console.log(response)
            setBtc(response.data)
            
          
        })
        .catch(function(error){
          console.log(error)
        })
      
        
      }

    return(
        <section className='flex flex-col items-center justify-center'>
            <h1 className='section__title mb-10'>Current BTC Price</h1>
            <div sx={{width: 300,height: 300}} className="my-10 crypto-card flex flex-col items-center justify-start gap-5 pt-6 shadow-2xl shadow-indigo-500/50  bg-gradient-to-r from-rose-100 to-teal-100 w-[249px] h-[249px] mdLg:w-[313px] mdLg:h-[313px]">
            <h3 className='crypto-card__Title'>Track Bitcoin price</h3>
            
            <Fab className="crypto-card__icon" size="large" color="warning" aria-label="delete" onClick={handleSubmit}>
                <CurrencyBitcoinIcon fontSize='large'/>
            </Fab>
            <h3 className='font-codePro'><span>{decodedString}</span> {btc.rate}</h3>
            <Box sx={{ minWidth: 120 }} className="crypto-card__select">
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">currency</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={currency}
                        label="Currency"
                        onChange={handleChange}
                    >
                        <MenuItem value={'USD'}>USD</MenuItem>
                        <MenuItem value={'EUR'}>EUR</MenuItem>
                        <MenuItem value={'GBP'}>GBP</MenuItem>
                    </Select>
                    <Fab className="addButton absolute bottom-5 left-32 animate-bounce hover:animate-spin" size="small" color="primary" aria-label="delete" onClick={handleSubmit} >
                        <CurrencyExchangeIcon />
                    </Fab>
                </FormControl>
            </Box>
       </div>
        </section>
       
    )
    
}

export default RandomApi;
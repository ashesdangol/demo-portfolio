const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const https = require("https");
const bodyParser = require('body-parser')
const port = process.env.PORT || 8000;
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

const whitelist = ['http://localhost:3000','http://localhost:8000', 'https://radiant-oasis-85045.herokuapp.com'];
const corsOptions = {
    origin: function (origin, callback){
        console.log("**Origin of request "+ origin)
        if(whitelist.indexOf(origin)!==-1 || !origin){
            console.log("Orgin acceptable")
            callback(null, true)
        }else{
            console.log("Origin Rejected")
            callback(new Error("Not allowed by CORS"))
        }
    }
}
app.use(helmet())
app.use(cors(corsOptions))
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

app.post('/getWeather', function (req, res){
   
    let city =req.body.cityName;
    let country = req.body.countryName;
    // console.log(city);
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.APIKEY}&units=metric`
    https.get(url, function(response){
        if(response.statusCode !== 200){
            const myweather= {
                icon:"icon not found",
                iconUrl:"Icon Url not  found",
                temp:"Temp Not Found",
                weatherDescription:"Description not found"
        
            }
            res.send(myweather)
        }else{
            response.on("data", function(data){
                const weatherData = JSON.parse(data)
                // console.log(weatherData);
                // get temp from object weatherdata
                const cntryName = weatherData.name
                const wtherMain = weatherData.weather[0].main
                const icon = weatherData.weather[0].icon
                const iconUrl ="http://openweathermap.org/img/wn/"+icon+"@2x.png"
                const temp = weatherData.main.temp
                const weatherDescription = weatherData.weather[0].description

               
                const myweather= {
                    cntryName:cntryName,
                    wtherMain:wtherMain,
                    icon:icon,
                    iconUrl:iconUrl,
                    temp:temp,
                    weatherDescription:weatherDescription
            
                }
                
                res.send(myweather);
            
            })
        }
       
        
    })
    

    // console.log(req.body)
    // res.send("Data received from you");
});

app.get('/getWeather', function (req, res) {
  
    let newCreatedObj = cbObject;
    let city;
    let country;
    
    function createObject(newObj,index){
        return {
            key:index,
            city:newObj.city,
            country:newObj.country
        }
       
    }
    
    const serverData=[{
        city:"sydney",
        country:"au"
    }]

    let userData =[{
        city :'',
        country:''
    }]

    function cbObject(){
        if(userData[0].city === "" || userData[0].country === "" ){
            return serverData.map(createObject)
        }else{
            return userData.map(createObject)
        }
    }
    
     city = newCreatedObj()[0].city;
     country = newCreatedObj()[0].country;

    // console.log(city);
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.APIKEY}&units=metric`
    https.get(url, function(response){
        if(response.statusCode !== 200){
            const myweather= {
                cntryName:"City Not Found",
                wtherMain:"No Weather Description",
                icon:"icon not found",
                iconUrl:"Icon Url not  found",
                temp:"Temp Not Found",
                weatherDescription:"Description not found"
        
            }
            res.send(myweather)
        }else{
            response.on("data", function(data){
                // data,  gets hexadecimal code 
                // console.log(data)
                // parse hexadecimal code  data into json
                // to convet it to string, JSON.stringify(weatherData) where weatherData is an object
            
                const weatherData = JSON.parse(data)
                // console.log(weatherData);
                // get temp from object weatherdata
                const cntryName = weatherData.name
                const wtherMain = weatherData.weather[0].main
                const icon = weatherData.weather[0].icon
                const iconUrl ="http://openweathermap.org/img/wn/"+icon+"@2x.png"
                const temp = weatherData.main.temp
                const weatherDescription = weatherData.weather[0].description
                // console.log(weatherDescription);
                // console.log(iconUrl);
               
                const myweather= {
                    cntryName:cntryName,
                    wtherMain:wtherMain,
                    icon:icon,
                    iconUrl:iconUrl,
                    temp:temp,
                    weatherDescription:weatherDescription
            
                }
                // res.write("<p>The Weather is currently " + weatherDescription+"</p>");
                // res.write("<h1>The Temparature in Sydney is "+ temp + " degree celcius</h1>");
                // res.write("<img src="+iconUrl+ ">");
                // res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
                res.send(myweather);
            
            })
        }
       
        
    })
    

});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
app.listen(port, ()=>{
    console.log(`server is listening on ${port}`);
})
const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const https = require("https");
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
const whitelist = ['http://localhost:3000','http://localhost:8000', 'https://ashes-portfolio.herokuapp.com'];
app.use(helmet())
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
};

app.use(cors(corsOptions));
app.get("/api/getWeather",(req,res)=>{
    res.send("This request does not exit");
})
app.post("/api/getWeather",(req,res)=>{
    let city = req.body.cityName;
    let country = req.body.countryName;
    const APIKEY = process.env.APIKEY
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKEY}&units=metric`

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

})

// THIS IS NECESSARY TO SERVE REACT IN THE BROWSER ON HEROKU
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'front-end/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'front-end/build', 'index.html'));
    });
}




app.listen(port, ()=>{
    console.log(`server is listening on ${port}`);
})
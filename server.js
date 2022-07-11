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
const axios = require('axios');
const session = require('express-session');

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
const whitelist = ['http://localhost:3000','http://localhost:8000', 'https://ashes-portfolio.herokuapp.com'];
const sessionConfig = {
    secret: 'MYSECRET',
    name: 'ashes-portfolio',
    resave: false,
    saveUninitialized: false,
    cookie : {
        sameSite: 'none',
         secure: true
    }
  };
  app.use(session(sessionConfig))
app.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "img-src": ["'self'", "https: data:"]
    }
  }))



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
    res.end();
})
app.post("/api/getWeather",(req,res)=>{
    let city = req.body.cityName;
    let country = req.body.countryName.value;
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
            res.send(myweather);
            res.end();
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
                res.end();
            
            })
        }
    })

})



// Btc Tracker

app.post("/api/trackBtc", (req,res)=>{
    let currency = req.body.currency;
    if (currency){
        const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        https.get(url, function(response){
            if(response.statusCode !== 200){
                const btcInfo= {
                    message:"error "+response.statusCode
            
                }
                res.send(btcInfo);
                res.end();
            }else{
                response.on("data", function(data){
                    const btcInfo=JSON.parse(data);
                    const currencyApi = btcInfo.bpi;
                    const keys = Object.keys(currencyApi);
                    // console.log(keys)

                    let cryptoData = {}
                    keys.forEach((key, index) => {
                        // console.log(`${key}: ${currencyApi[key]}`);
                        // console.log(currencyApi[key].code)
                        if (currencyApi[key].code===currency){
                            cryptoData = {
                                rate:currencyApi[key].rate,
                                symbol:currencyApi[key].symbol
                            }
                        }
                    });
                    res.send(cryptoData);
                    res.end();
                
                    // if(currencyApi.USD.code === currency){
                    //      const cryptoData = {
                    //         rate:currencyApi.USD.rate,
                    //         symbol :currencyApi.USD.symbol
                    //      }
                    //      res.send(cryptoData);
                        
                        
                    // }else if(currencyApi.EUR.code === currency){
                    //     const cryptoData={
                    //         rate:currencyApi.EUR.rate,
                    //         symbol :currencyApi.EUR.symbol
                            
                    //     }
                    //     res.send(cryptoData);
                        
                    
                    // }else if(currencyApi.GBP.code === currency){
                    //     const cryptoData={
                    //         rate:currencyApi.GBP.rate,
                    //         symbol :currencyApi.GBP.symbol
                    //     }
                    //     res.send(cryptoData);
                        
                    
                    // }
                    
                
                })
            }
        })
    }

})

app.get("/api/news",async (req,res)=>{
    const url = "https://techcrunch.com/wp-json/wp/v2/posts?per_page=50&context=embed";
    const receivedData = await axios.get(url);
    // const dd = rd.map()
    // console.log(rd.data[0].id)
    const receivedNews = receivedData.data.map((news)=>{
        return {
            title:news.title.rendered,
            excerpt:news.excerpt.rendered,
            imageUrl:news.jetpack_featured_media_url,
            thumbnailUrl:news.parsely.meta.image.url,
            postDate:news.date
        }

    })
    // res.cookie('cookieName', 'cookieValue', { sameSite: 'none', secure: true})
   res.send(receivedNews)
   res.end();
   
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
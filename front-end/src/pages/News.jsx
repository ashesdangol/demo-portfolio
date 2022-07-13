import React,{useState, useEffect} from 'react';
import axios from "axios";
import NewsCard from '../components/global-components/NewsCard';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';


function createCard(news){
    const dated = news.postDate;

    const strToDecode ={
        title:news.title,
        content:news.excerpt
    };
    
    const d = new Date(dated);
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const fullmonth= month[d.getMonth()];
    const day = d.getUTCDate();
    const year = d.getUTCFullYear();
    const parser = new DOMParser();
    const decodedTitle = parser.parseFromString(`<!doctype html><body>${strToDecode.title}`, 'text/html').body.textContent;
    const decodedContent = parser.parseFromString(`<!doctype html><body>${strToDecode.content}`, 'text/html').body.textContent;

    
    return(
        <NewsCard key={Math.floor(Math.random() * Date.now())} title={decodedTitle} image={news.imageUrl} subheader={ fullmonth + " " + day + " " + year } content={decodedContent}/>
    )
}
function News(){
    const [newsContents, setNewsContents] = useState([]);
    const [visible, setVisible] = useState(8);
    const [loading, setLoading] = useState(true);

    // const newsDataFunction = async () =>{
    //     try{
    //         await  axios.get("/api/news").then(function(response){
    //             setNewsContents(response.data)
    //             setLoading(false);
    //         });
          
    //     }
    //     catch(e){
    //         console.log(e)
    //     }
    // }
    // useEffect(()=>{
    //     newsDataFunction()
    // },[])

    useEffect(()=>{
        axios.get("/api/news").then(function(response){
            setNewsContents(response.data)
            setLoading(false);
        }).catch((error)=>{
            console.log(error)
        });
       
    },[])
    
    const loadMore = () =>{
        setVisible(visible + 4)
    }
    // console.log(rd)
    return(
    <section className='flex flex-col items-center justify-center gap-10'>
        <h1 className='section__title text-center w-full'>News From Tech Crunch </h1>
        <div className="flex justify-center flex-wrap gap-5 container">
            {/* <CircularProgress color="secondary" />
            {newsContents.slice(0,visible).map(createCard)} */}
            {loading ? <CircularProgress color="secondary" /> : newsContents.slice(0,visible).map(createCard)}
        </div>
       
        {visible < newsContents.length &&(
            <Button onClick={loadMore} variant="contained" size="large">Load More</Button>
            
        )}
       
    </section>);

}

export default News;
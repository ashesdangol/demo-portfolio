import React from 'react';
import CardImageHover from './global-components/CardImageHover';

function MyWork(props){
    return(
 
    <section className="about-me" id={props.id}>   
        <h2 className='section__title section__title--my-work'>My Work</h2>
        <p className='section__subtitle section__title--subtitle-my-work'>asdsdV</p>
        <div className="portfolio flex flex-wrap justify-center max-w-screen-lg mx-auto gap-2">
            {/* <a href="" className='portfolio__item'></a> */}
            <CardImageHover imgSrc="/assets/images/Rectangle3-1.png"  alt="work"/>
            <CardImageHover imgSrc="/assets/images/Rectangle3-1.png"  alt="work"/>
            <CardImageHover imgSrc="/assets/images/Rectangle3-1.png"  alt="work"/>
            <CardImageHover imgSrc="/assets/images/Rectangle3-1.png"  alt="work"/>
            <CardImageHover imgSrc="/assets/images/Rectangle3-1.png"  alt="work"/>
            <CardImageHover imgSrc="/assets/images/Rectangle3-1.png"  alt="work"/>
            <CardImageHover imgSrc="/assets/images/Rectangle3-1.png"  alt="work"/>
            {/* <img src="/assets/images/eduardo__2x.png" className='portfolio__img' alt="my portfolio" /> */}
            
        </div>
    </section>

    )
}
export default MyWork;
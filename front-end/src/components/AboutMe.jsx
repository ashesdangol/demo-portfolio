import React from 'react';
import CardImageVertical from './global-components/CardImageVertical';
import aboutMe from '../datas/aboutMe';

console.log(aboutMe.imgUrl);
function AboutMe(props){
    return(
 
    <section className="about-me" id={props.id}>
        <div className="about-me__title-wrapper">
            <h2 className='section__title about-me__title'>{aboutMe.title}</h2>
            
            <p className='section__subtitle section__subtitle--bgcolor about-me__subtitle shadow-2xl'>{aboutMe.subtitle}</p>

            <CardImageVertical imgSrc={aboutMe.imgUrl} className="about-me__img" alt="more about me" loading="lazy"/>
            
            <div className="about-me__body">
                <p>{aboutMe.content}</p>
                
            </div>
            
        </div>   
        
        
    </section>

    )
}
export default AboutMe;
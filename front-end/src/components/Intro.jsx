import React from 'react';
import CardImage from './global-components/CardImage';

function Intro(props){
    return(
 
    <section className="intro" id={props.id}>
        
            <div className="intro__title-wrapper">
                <h1 className='section__title intro__title'>Hi, I am <strong>Ashes Dangol</strong></h1>
                <p className='section__subtitle section__subtitle--bgcolor intro__subtitle'>FRONT-END DEV</p>
                <div className='intro__image'>
                    <CardImage className="laptop:hidden" imgSrc="/assets/images/eduardo.png" alt="my pic" />
                    <CardImage className="hidden laptop:block" imgSrc="/assets/images/eduardo__2x.png"  alt="my high quality pic"/>
                </div>
            </div>   
            
            
       
        
       
            
    </section>

    )
}
export default Intro;
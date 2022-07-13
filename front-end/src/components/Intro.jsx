import React from 'react';
import CardImage from './global-components/CardImage';
import profilePic from '../datas/profilepic';

function Intro(props){
    return(
 
    <section className="intro" id={props.id}>
        
            <div className="intro__title-wrapper">
                <h1 className='section__title intro__title'>{profilePic.message} <strong>{profilePic.name}</strong></h1>
                <p className='section__subtitle section__subtitle--bgcolor intro__subtitle shadow-2xl'>FRONT-END DEV</p>
                <div className='intro__image'>
                {/* smal pic */}
                    {/* <CardImage className="laptop:hidden" imgSrc={profilePic.lowImageUrl} alt="my pic" /> */}
                    {/* large pic */}
                    {/* <CardImage className="hidden laptop:block" imgSrc={profilePic.highImageUrl}  alt="my high quality pic"/> */}

                    <CardImage highImageUrl={profilePic.highImageUrl} mediumImageUrl={profilePic.mediumImageUrl} lowImageUrl={profilePic.lowImageUrl} alt="my profile pic"/>
                </div>
            </div>   
            
            
       
        
       
            
    </section>

    )
}
export default Intro;
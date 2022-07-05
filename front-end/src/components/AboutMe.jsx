import React from 'react';

function AboutMe(props){
    return(
 
    <section className="about-me" id={props.id}>   
        <h2 className='section__title section__title--about-me'>Who I am</h2>
        <p className='section__subtitle section__subtitle--bgcolor section__title--subtitle-about-me'>asdsdV</p>
        <div className="about-me__body">
            <p>sadsa</p>
            <p>sdasdsd</p>
            <img src="/assets/images/eduardo__2x.png" alt="more about me" />
        </div>
    </section>

    )
}
export default AboutMe;
import React from 'react';
import Banner from '../components/Banner';
import Intro from '../components/Intro';
import Services from '../components/Services';
import AboutMe from '../components/AboutMe';
import MyWork from '../components/MyWork';



function Home(){
    return( 
    <div>
        <Intro />
        <Services />
        <AboutMe />
        <MyWork />
        <Banner />
    </div>
    );
}

export default Home;
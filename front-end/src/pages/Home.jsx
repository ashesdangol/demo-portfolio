import React from 'react';
import Intro from '../components/Intro';
import Services from '../components/Services';
import AboutMe from '../components/AboutMe';
import MyWork from '../components/MyWork';
import RandomApi from './apps/RandomApi';



function Home(){
    return( 
    <div>
        <Intro />
        <Services />
        <AboutMe />
        <MyWork />
        <RandomApi />
        
    </div>
    );
}

export default Home;
import React from 'react';
import CardImageHover from './global-components/CardImageHover';
import work from '../datas/work';






function createCardImage(card){
    return(<CardImageHover 
    id={work.id}
    key={Math.floor(Math.random() * Date.now())}
    imgSrc={ "/assets/images/"+card.workImage}
    alt="work"
    loading="lazy"
    className="work"
    /> );
}


function MyWork(props){
    
    return(
 
    <section className="my-work" id={props.id}>   
        <h2 className='section__title my-work__title'>My Work</h2>
        <p className='section__subtitle my-work__subtitle'>A selection of my range of work</p>
        <div className="portfolio ">
        {work.map(createCardImage)}
            {/* <a href="" className='portfolio__item'></a> */}
            
            {/* <img src="/assets/images/eduardo__2x.png" className='portfolio__img' alt="my portfolio" /> */}
            
        </div>
    </section>

    )
}
export default MyWork;
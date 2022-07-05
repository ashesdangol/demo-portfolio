import React from 'react';
import CardText from './global-components/CardText';
import iDo from '../datas/iDo';

console.log(iDo);
function createCardText(whatido){
    return(
        <CardText 
        id={whatido.id}
        key={whatido.id}
        title={whatido.title}
        content={whatido.content}
    />
    );
    
}

function Services(props){
    return(
        <section className="services" id={props.id}>   
             <h2 className='secttion__title secttion__title--services'>What I do</h2>
             <div className="servicess">
                {iDo.map(createCardText)}
                <a href="#" className='btn'>See my work</a>
             </div>  
             
        </section>

    )
}
export default Services;
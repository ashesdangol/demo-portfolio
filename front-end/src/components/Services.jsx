import React from 'react';

function Services(props){
    return(
  
        <section className="services" id={props.id}>   
             <h2 className='secttion__title secttion__title--services'>What I do</h2>
             <div className="servicess">
                <div className="service">
                    <h3>UI Development</h3>
                    <p>sdsads</p>
                </div>

                <div className="service">
                    <h3>E-Commerce</h3>
                    <p>asdsad</p>
                </div>

                <div className="service">
                    <h3>WordPress</h3>
                    <p>asdads</p>
                </div>

                <a href="#" className='btn'>See my work</a>
             </div>  
             
        </section>

    )
}
export default Services;
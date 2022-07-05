import React from 'react';

function CardImageHover(props){
    return( 
    <div>
        <img  className={`hover:shadow-2xl hover:shadow-zinc-700 ${props.className} object-cover object-top max-w-screen-xsMobile max-w-[220px] sm:max-w-[240px]` } src={props.imgSrc} loading={props.loading} alt={props.alt} />     
    </div>
    );
}

export default CardImageHover;
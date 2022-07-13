import React from 'react';

function CardImageHover(props){
    return( 
    <div>
        <img  className={`shadow-2xl hover:scale-105 hover:shadow-blue-500/50 hover:ease-in ${props.className} object-cover object-top max-w-screen-xsMobile max-w-[220px] sm:max-w-[240px]` } srcSet={`${props.lowImageUrl} 570w, ${props.mediumImageUrl} 1200w,${props.highImageUrl} 1920w ` } loading={props.loading} alt={props.alt} />     
    </div>
    );
}

export default CardImageHover;
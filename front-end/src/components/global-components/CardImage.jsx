import React from 'react';

function CardImage(props){
    return( 
  
        <img  className={`shadow-2xl shadow-zinc-700 ${props.className} object-cover object-top w-[249px] h-[249px] mdLg:w-[313px] mdLg:h-[313px]` } srcSet={`${props.lowImageUrl} 570w, ${props.mediumImageUrl} 1200w,${props.highImageUrl} 1920w ` } loading={props.loading} alt={props.alt} />     

    );
}

export default CardImage;
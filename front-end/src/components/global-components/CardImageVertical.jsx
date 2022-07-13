import React from 'react';

function CardImageVertical(props){
    return( 
  
        <img  className={`shadow-2xl shadow-zinc-700 ${props.className} object-cover object-top w-[244px] h-[406px]` } srcSet={`${props.lowImageUrl} 570w, ${props.mediumImageUrl} 1200w,${props.highImageUrl} 1920w ` } loading={props.loading} alt={props.alt} />     

    );
}

export default CardImageVertical;
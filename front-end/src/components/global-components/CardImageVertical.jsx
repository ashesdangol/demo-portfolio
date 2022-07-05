import React from 'react';

function CardImageVertical(props){
    return( 
  
        <img  className={`shadow-2xl shadow-zinc-700 ${props.className} object-cover object-top w-[244px] h-[406px]` }src={props.imgSrc} loading={props.loading} alt={props.alt} />     

    );
}

export default CardImageVertical;
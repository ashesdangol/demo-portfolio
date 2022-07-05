import React from 'react';

function CardText(props){
    return( 
        <div className="service">
            <h3 className='text-white py-5'>{props.title}</h3>
            <p className='text-white pb-10'>{props.content}</p>
        </div>

    );
}

export default CardText;
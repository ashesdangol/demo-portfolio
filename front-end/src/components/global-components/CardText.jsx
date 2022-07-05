import React from 'react';

function CardText(props){
    return( 
        <div className="service">
            <h3>{props.heading}</h3>
            <p>{props.content}</p>
        </div>

    );
}

export default CardText;
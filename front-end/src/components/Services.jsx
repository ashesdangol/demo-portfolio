import React from 'react';
import CardText from './global-components/CardText';
import iDo from '../datas/iDo';
import Button from '@mui/material/Button';

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
// custom mui button style
const styles = {
    "&.MuiButton-contained": {
      color: "#333333",
      backgroundColor: '#16E0BD',
      borderColor: '#16E0BD',
      fontFamily:'Source Sans Pro',
      fontWeight:'bold',
      '&:hover':{
        color:"#333333",
      }
    }
  };

function Services(props){
    return(
        <section className="services" id={props.id} >   
             <h2 className='section__title services__title text-accent_dark'>What I do</h2>
             <div className="service__wrapper">
                {iDo.map(createCardText)}
               
             </div>
             <Button variant="contained" size='large' sx={styles}>See my work</Button> 
            
        </section>

    )
}
export default Services;
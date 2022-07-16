import React from 'react';
import CardText from './global-components/CardText';
import iDo from '../datas/iDo';
import Button from '@mui/material/Button';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

// console.log(iDo);
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
      backgroundColor: '#16E0BD',
      borderColor: '#16E0BD',
      textDecoration:"none"
    },
    "a":{
      color: "#333333",
      fontFamily:'Source Sans Pro',
      fontWeight:'bold',
      '&:hover':{
        color:"#fff",
      }
    }
  };
  function CustomLink({to,children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path:resolvedPath.pathname, end:true})
   
    return(
        <Button  className={isActive && "active"}>
            <Link to={to} {...props}>{children}</Link>
        </Button>
    )
}

function Services(props){
    return(
        <section className="services" id={props.id} >   
             <h2 className='section__title services__title text-accent_dark'>What I do</h2>
             <div className="service__wrapper">
                {iDo.map(createCardText)}
               
             </div>
             
             <Button variant="contained" size='large' sx={styles}>
              <CustomLink to="/contact">See my work</CustomLink>
             </Button> 
              
              
        </section>

    )
}
export default Services;
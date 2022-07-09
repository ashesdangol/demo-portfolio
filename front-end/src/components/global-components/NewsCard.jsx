import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';




function NewsCard(props){
    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                    component="img"
                    height="194"
                    image={props.image}
                    alt={props.alt}
            />
            <CardHeader
                title={props.title}
                subheader={props.subheader}
            />
            
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                {props.content}
                </Typography>
            </CardContent>
            
            </Card>
    );
}

export default NewsCard;
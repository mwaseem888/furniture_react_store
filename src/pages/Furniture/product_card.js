import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';

import {Link} from 'react-router-dom';


const useStyles = makeStyles({
    media: {
        height: 250,
        width: "100%"
    },
    content: {
        height: '180px'
    },
    countReviewHeading: {
        padding: '2px 0px 0px 5px'
    },
    button: {
        width: '100%'
    },
});

export function ProductCard(props) {
    const {id, image, title, description, price,rating, } = props.product
    const classes = useStyles();

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image} 
                />
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                       <Link to={`/detail/${id}`}> {title} </Link> 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <Typography container><Rating name="read-only" value={rating} readOnly />
                    </Typography>
                    <Typography variant="h6" component="h1">
                       Rs. {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
             <Button  fullWidth='true' startIcon={<FavoriteIcon />} size="small" color="primary">
                    add to fav
                </Button>
                <Button fullWidth='true' startIcon={<ShoppingCartIcon />} size="small" color="primary">
                    add to Cart
                </Button>
               
                
            </CardActions>
        </Card>
    );
}
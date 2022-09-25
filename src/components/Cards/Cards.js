import React from 'react';
import Cardsdata from '../Cardsdata';
import './Cards.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/CartReducer';

const Cards = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className='Card_Heading'>
        <strong>Order Now 😋😋</strong>
      </div>

      <div className='AllCards'>
        {Cardsdata.map((element) => {
          return (
            <>
              <div key={element.id} className='SubCard'>
                <Card sx={{ width: '350px', border: '1px solid #2c20ab' }}>
                  <CardMedia
                    component='img'
                    height='140'
                    image={element.imgdata}
                    alt={element.rname}
                  />
                  <CardContent>
                    <Typography variant='h5'>{element.rname}</Typography>
                    <Typography variant='p'>Price: {element.price}</Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center' }}>
                    <Button
                      variant='contained'
                      onClick={() => {
                        dispatch(addToCart(element));
                      }}
                    >
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cards;

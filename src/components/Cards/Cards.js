import React, { useEffect } from 'react';
import cardsData from '../Cardsdata';
import './Cards.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/CartReducer';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
  const navigate = useNavigate();
  const isLoginSuccess = useSelector((state) => state.isLogin.isLoginSuccess);

  useEffect(() => {
    !isLoginSuccess && navigate('/');
  }, [isLoginSuccess]);

  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div className='Card_Heading'>
        <strong>Order Now 😋😋</strong>
      </div>

      <div className='AllCards'>
        {cardsData.map((element) => {
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

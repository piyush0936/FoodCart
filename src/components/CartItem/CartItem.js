import React from 'react';
import './CartItem.css';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addOneItem,
  removeItem,
  removeOneItem,
} from '../../features/CartReducer';

const CartItem = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cartDetails = useSelector((state) =>
    state.initialCart.value.filter((item) => item.id == id)
  );

  return (
    <div className='Cart'>
      <div className='Cart_Heading'>
        <strong>Your Cart Details</strong>
      </div>

      <div className='SubCard'>
        <Card sx={{ width: '80%', border: '1px solid #2c20ab' }}>
          <CardMedia
            component='img'
            height='140'
            image={cartDetails[0]?.imgdata}
            alt={cartDetails[0]?.rname}
          />
          <CardContent>
            <div style={{ marginBottom: '18px' }}>
              <strong>Restaurant :</strong> {cartDetails[0]?.rname}
            </div>
            <div
              style={{
                display: 'grid',
                gap: '20px 40px',
                gridTemplateColumns: 'auto auto',
              }}
            >
              <div className='SubCardHeading'>
                <strong>Price :</strong> {cartDetails[0]?.price}
              </div>

              <div className='SubCardHeading'>
                <strong>Restaurant Rating : </strong> {cartDetails[0]?.rating}
              </div>

              <div className='SubCardHeading'>
                <strong>Dishes : </strong>
                {cartDetails[0]?.address}
              </div>

              <div className='SubCardHeading'>
                <strong>Order Review : </strong> {cartDetails[0]?.somedata}
              </div>

              <div className='SubCardHeading'>
                <strong>Total : </strong>
                {cartDetails[0]?.price * cartDetails[0]?.qnty}
              </div>

              <div
                className='SubCardHeading'
                onClick={() => dispatch(removeItem(cartDetails[0]?.id))}
              >
                <strong>Remove :</strong>
                <DeleteIcon className='DeleteIcon' />
              </div>
            </div>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button
              variant='contained'
              onClick={() => {
                dispatch(removeOneItem(cartDetails[0]?.id));
              }}
            >
              -
            </Button>
            <div className='Qnty'>{cartDetails[0]?.qnty}</div>
            <Button
              variant='contained'
              onClick={() => {
                dispatch(addOneItem(cartDetails[0]?.id));
              }}
            >
              +
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default CartItem;

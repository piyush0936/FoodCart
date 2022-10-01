import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.css';
import { removeItem } from '../../features/CartReducer';

const Cart = () => {
  const cartValue = useSelector((item) => item.initialCart.value);

  function totalAmount() {
    let total = 0;
    cartValue.forEach((item) => {
      total += item.price * item.qnty;
    });
    return total;
  }
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <table cellSpacing='8px'>
          <thead className='tableHeading'>
            <tr>
              <th>Photo</th>
              <th>Restaurant Name</th>
            </tr>
          </thead>
          <tbody>
            {cartValue.map((item) => {
              return (
                <>
                  <tr key={item.id}>
                    <td className='Pointer'>
                      <img
                        src={item.imgdata}
                        alt={item.rname}
                        width='80px'
                        height='60px'
                      />
                    </td>
                    <td
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <p>{item.rname}</p>
                      <p>Price: {item.price}</p>
                      <p>Quantity: {item.qnty}</p>
                    </td>
                    <td
                      className='Pointer'
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      <DeleteIcon sx={{ color: 'red' }} />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Total: ₹ {totalAmount()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Cart;

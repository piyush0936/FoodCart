import React from 'react';
import { useSelector } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import './Cart.css'

const Cart = () => {
  const cartValue = useSelector((item) => item.initialCart.value);
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
                  <tr>
                    <td>
                      <img src={item.imgdata} width='80px' height='60px' />
                    </td>
                    <div style={{ display: 'flex', flexDirection: 'column',alignItems:'center' }}>
                      <td>{item.rname}</td>
                      <td>Price: {item.price}</td>
                      <td>Quantity: {item.qnty}</td>
                    </div>
                    <td>
                      <ClearIcon />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Total :₹ 350</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Cart;

import React from 'react';
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const cartValue = useSelector((item) => item.initialCart.value);

  return (
    <>
      <div className='HeaderLeft'>
        <ul>
          <li>Add to Cart</li>
          <li>Home</li>
        </ul>
        <div className='HeaderMiddle'>FoodCart</div>
        <ul>
          <li>Profile</li>
          <li onClick={handleClick}>
            <Badge badgeContent={cartValue.length} color='primary'>
              <ShoppingCartIcon />
            </Badge>
          </li>
        </ul>
      </div>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div style={{ minWidth: '350px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0px 15px',
            }}
          >
            <div className='EmptyCartHeading'>
              {cartValue.length ? <Cart /> : <div>Your cart is Empty</div>}
            </div>
            <div
              className={cartValue.length ? 'CrossButton' : 'CrossButtonEmpty'}
              onClick={handleClose}
            >
              x
            </div>
          </div>
        </div>
      </Menu>
    </>
  );
};

export default Header;

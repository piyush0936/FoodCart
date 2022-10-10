import React, { useEffect, useState } from 'react';
import './UserAuth.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { isLogin } from '../../features/UserAuthReducer';
import { useNavigate } from 'react-router-dom';

const UserAuth = () => {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const isLoginSuccess = useSelector((state) => state.isLogin.isLoginSuccess);

  useEffect(() => {
    if (isLoginSuccess) {
      navigate('/cards');
    }
  }, [isLoginSuccess]);

  return (
    <div className='UserAuth'>
      <div className='InputForm'>
        <div className='UserAuthHeading'>Hungry?</div>
        <Card className='CardDetails'>
          <CardContent>
            <Typography variant='h6'>Enter UserID</Typography>
            <input
              type='text'
              value={userID}
              required
              onChange={(e) => setUserID(e.target.value)}
            />
            <Typography variant='h6'>Enter Password</Typography>
            <input
              type='text'
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            {/* <Button
              variant='contained'
              disabled={!userID.length || !password.length}
              onClick={() => {
                dispatch(isLogin({ userID, password }));
              }}
            >
              Submit
            </Button> */}
            <Button
              variant='contained'
              onClick={() => {
                setUserID('Piyush');
                setPassword('Piyush12345');
                setTimeout(() => {
                  dispatch(
                    isLogin({ userID: 'Piyush', password: 'Piyush12345' })
                  );
                }, 500);
              }}
            >
              Test Login
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default UserAuth;

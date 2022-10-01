import { Alert } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';

const userAuthSlice = createSlice({
  name: 'userAuthSlice',
  initialState: { isLoginSuccess: false },
  reducers: {
    isLogin: (state, action) => {
      if (
        action.payload.userID === 'Piyush' &&
        action.payload.password === 'Piyush12345'
      ) {
        state.isLoginSuccess = true;
      }
    },
    isLogout: (state) => {
      state.isLoginSuccess = false;
    },
  },
});

export const { isLogin, isLogout } = userAuthSlice.actions;
export default userAuthSlice.reducer;

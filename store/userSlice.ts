


import { RootState } from './index';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { IUserData } from '../types'
const initialState:IUserData  = {
    name: '',
    email: '',
    userType:'',
    isLoggedIn: false,
}

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    login: (state, action) => {
        const { payload } = action;
        const { userData } = payload;
        console.log(userData,payload);
        const newUserData ={
            name: userData?.name,
            email: userData?.email, 
            userType:userData?.userType,
            isLoggedIn:true
        }
        console.log(newUserData, userData);
        return newUserData;
    },
    logout: () => initialState,
  }
})


export const { login,logout } = userDataSlice.actions
export const selectIsLoggedIn = (state:RootState) => state.user.isLoggedIn;


export default userDataSlice.reducer
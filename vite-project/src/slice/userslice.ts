import  IUser  from './../interfaceD/IUser';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IUserSlice 
{
    data: IUser[],
    isRequest:boolean,
    error:any
}

const initialState : IUserSlice = {

  data: [],
  isRequest: false,
  error: {}
}

const user = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {

    
    userRequest : (state:IUserSlice
    )=>
    {
        state.isRequest = true;
    

    },
    registrationSuc : (state:IUserSlice,action: PayloadAction<IUser[]>)=>
    {
        state.isRequest = false;
        state.data = action.payload;
    },
    registrationFailed : (state:IUserSlice,  action: PayloadAction<any>
    )=>
    {
        state.isRequest = false;
        state.error = action.payload;
    }

  }
});

export const {userRequest,registrationSuc,registrationFailed} = user.actions

export default user.reducer
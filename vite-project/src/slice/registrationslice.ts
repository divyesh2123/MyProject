import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IRegistrationSlice
{
    data: IRegistration,
    isLoading:boolean,
    error:any
}

const initialState : IRegistrationSlice = 
{    
data:{
    confirmpass: "",
    email: "",
    firstname: "",
    lastname: "",
    password: ""
},
error: {},
isLoading: false
}

const registrationslice = createSlice({
  name: 'registrationslice',
  initialState,
  reducers: {

    registrationRequest : (state:IRegistrationSlice,  action: PayloadAction<IRegistration>
    )=>
    {
        state.isLoading = true;
        state.data = action.payload;

    },
    registrationSuc : (state:IRegistrationSlice)=>
    {
        state.isLoading = false;
    },
    registrationFailed : (state:IRegistrationSlice,  action: PayloadAction<any>
    )=>
    {
        state.isLoading = false;
        state.data = action.payload;
    }

  }
});

export const {registrationRequest,registrationSuc,registrationFailed} = registrationslice.actions

export default registrationslice.reducer
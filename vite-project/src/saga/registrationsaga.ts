import { call, takeEvery } from 'redux-saga/effects'
import { registrationRequest } from '../slice/registrationslice'
import registrationData from '../service/registration'
import { PayloadAction } from '@reduxjs/toolkit'
import {  toast } from 'react-toastify';
import IRegistration from '../interfaceD/IRegistration';


 function* watcherRegistration( action: PayloadAction<IRegistration>)
{
    try
    {
        const data =yield call(registrationData,action.payload)
        console.log(data);

        localStorage.setItem("token",data?.data?.token);
        if(data.status !=200 || data.status !=201)
        {
            toast("error");
        }
    }
    catch(error)
    { toast("error");

    }

}

 export function* registrationaync()
{
    yield takeEvery(registrationRequest,watcherRegistration)
}
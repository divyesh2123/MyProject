import { call, takeEvery } from 'redux-saga/effects'
import { registrationRequest } from '../slice/registrationslice'
import registrationData from '../service/registration'
import { PayloadAction } from '@reduxjs/toolkit'



 function* watcherRegistration( action: PayloadAction<IRegistration>)
{
    try
    {
        const data =yield call(registrationData,action.payload)

    }
    catch(error)
    {

    }

}

 export function* registrationaync()
{
    yield takeEvery(registrationRequest,watcherRegistration)
}
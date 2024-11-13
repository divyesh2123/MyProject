import {all} from 'redux-saga/effects';
import { registrationaync } from './registrationsaga';

function* rootSaga()
{
    yield all([registrationaync()])
}

export default rootSaga;
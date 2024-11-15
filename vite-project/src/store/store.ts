import { configureStore } from "@reduxjs/toolkit";
import registrationslice from '../slice/registrationslice'
import userslice  from '../slice/userslice'
import createSagaMiddleWear  from 'redux-saga';
import rootSaga from "../saga/rootSaga";


const middleware=  createSagaMiddleWear();
const store= configureStore({
    reducer : {
        registration: registrationslice,
        user:userslice
    
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(middleware),
})

middleware.run(rootSaga);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
import { configureStore } from '@reduxjs/toolkit';
import welcomeUserReducer from '../reducers/welcomeUserSlice'
import registerReducer from '../reducers/RegisterSlice'
import loginReducer from '../reducers/LoginSlice'
import sesionReducer from '../reducers/SesionSlice'

export const store = configureStore({
  reducer: {
    welcomeUser: welcomeUserReducer,
    register: registerReducer,
    login: loginReducer,
    sesion: sesionReducer
  },
});

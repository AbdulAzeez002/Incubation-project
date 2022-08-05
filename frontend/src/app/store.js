import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import incubationReducer from '../features/incubatiton/incubationSlice'
import companyReducer from '../features/company/companySlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    incub:incubationReducer,
    companies:companyReducer,
   
  },
});

import {configureStore} from '@reduxjs/toolkit';
import auth from '../store/authSlice';
import authService from '../appwrite/auth';
const store = configureStore({
    reducer : {
        auth : authService
    }
});

export default store;
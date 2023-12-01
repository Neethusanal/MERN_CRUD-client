
import { configureStore } from '@reduxjs/toolkit';
import userReducer from'./UserSlice'


const reducer = {
   user: userReducer,
  
};

const store = configureStore({
  reducer,
  // Add middleware, enhancers, etc. as needed
});

export default store;

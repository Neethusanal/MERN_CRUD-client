// userReducer.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userDetails: []
    // id:'',
    // first_name:'',
    // last_name:'',
    // email:'',
    // gender:'',
    // avatar:'',
    // domain:'',
    // available:'',
    // deleted:''

  },
  reducers: {

    setUserDetails: (state, action) => {
      state.userDetails = action.payload; // Assuming payload is an array of user details
    },
    // setUserDetails: (state, action) => {
    //   state.id = action.payload.id;
    //   state.first_name=action.payload.first_name;
    //   state.last_name=action.payload.last_name;
    //   state.email=action.payload.email;
    //   state.gender=action.payload.gender;
    //   state.avatar=action.payload.avatar;
    //   state.available=action.payload.available
    //   state.deleted=action.payload.deleted

    // },
    removeDeletedUser: (state, action) => {
      
      state.userDetails = state.userDetails.filter(user => user.id !== action.payload);
    },
  },
});

export const { setUserDetails,removeDeletedUser } = userSlice.actions;


export default userSlice.reducer;

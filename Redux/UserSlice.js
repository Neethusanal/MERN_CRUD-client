// userReducer.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userDetails: null,
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.id = action.payload.id;
      state.first_name=action.payload.first_name;
      state.last_name=action.payload.last_name;
      state.email=action.payload.email;
      state.gender=action.payload.gender;
      state.avatar=action.payload.avatar;
      state.available=action.payload.available

    },
  },
});

export const { setUserDetails } = userSlice.actions;
export const selectUserDetails = (state) => state.user.userDetails;

export default userSlice.reducer;

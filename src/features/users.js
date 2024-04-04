import { createSlice } from '@reduxjs/toolkit';
import { UsersData } from '../FakeData';

export const userSlice = createSlice({
  name: 'users',
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUserName: (state, action) => {
      state.value
        .filter((user) => {
          return user.id === action.payload.id;
        })
        .map((user) => {
          return (user.username = action.payload.username);
        });
    },
  },
});

export const { addUser, deleteUser, updateUserName } = userSlice.actions;
export default userSlice.reducer;

// likedSlice.js
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const likedSlice = createSlice({
  name: 'liked',
  initialState: [],
  reducers: {
    changeLike: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      //@ts-ignore
      const index = state.indexOf(id);

      if (index === -1) {
        // ID not found, add it to the state
        //@ts-ignore
        state.push(id);
      } else {
        // ID found, remove it from the state
        state.splice(index, 1);
      }
    },
  },
});

export const {changeLike} = likedSlice.actions;
export default likedSlice.reducer;

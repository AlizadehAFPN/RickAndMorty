import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Character} from '../../Interface';

// Define the initial state

interface initialState {
  listData: Character[];
}

const initialState: initialState = {
  listData: [],
};

// Creating Redux slice
const searchSlice = createSlice({
  name: 'search', // Slice name
  initialState, // Use the defined initialState
  reducers: {
    updateListData: (
      state: initialState,
      action: PayloadAction<Character[]>,
    ) => {
      state.listData = action.payload;
    },
    updateLikedData: (state: initialState, action: PayloadAction<number>) => {
      state.listData = state?.listData?.map(item => {
        if (item?.id === action.payload) {
          return {...item, isLiked: !item?.isLiked}; // Toggle isLiked property
        }
        return item; // Return the item unchanged if it's not the one to update
      });
    },
  },
});

// Export action creators and reducer
export const {updateListData, updateLikedData} = searchSlice.actions;

export default searchSlice.reducer; // Export the reducer as the default export

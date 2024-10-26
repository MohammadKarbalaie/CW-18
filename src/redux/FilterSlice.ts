import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  sort: 'asc' | 'desc';
  rating: number;
  fastDelivery: boolean;
}

const initialState: FilterState = {
  sort: 'asc',
  rating: 0,
  fastDelivery: false,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<'asc' | 'desc'>) {
      state.sort = action.payload;
    },
    setRating(state, action: PayloadAction<number>) {
      const rating = action.payload;
      if (rating >= 1 && rating <= 5) {
        state.rating = rating;
      }
    },
    setFastDelivery(state) { 
      state.fastDelivery = !state.fastDelivery;
    },
    clearFilters() {
      return initialState;
    },
  },
});

export const { setSort, setRating, setFastDelivery, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;

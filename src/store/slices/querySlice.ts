import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store.ts';

const querySlice = createSlice({
  name: 'query',
  initialState: '',
  reducers: {
    addQuery: (_, action: PayloadAction<string>) => action.payload,
  },
});

export const selectQuery = (state: RootState) => state.query;
export const { addQuery } = querySlice.actions;
export default querySlice.reducer;

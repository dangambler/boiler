import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../features/blogRedux';

const store = configureStore({
  reducer: {
    blogs: blogReducer,
  },
});

export default store;
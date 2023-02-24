
// app/features/blogSlice.js
import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    addAllBlogs: (state, action) => {
      return action.payload;
    },
    addBlog: (state, action) => {
      state.concat(action.payload);
    },
    deleteBlog: (state, action) => {
      return state.filter(blog => blog.id !== action.payload.id);
    },
    updateBlog: (state, action) => {
      const index = state.findIndex(blog => blog.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const {
  addAllBlogs,
  addBlog,
  deleteBlog,
  updateBlog,
} = blogSlice.actions;

export default blogSlice.reducer;





// const blogListReducer = (state = [], action) => {
//     switch(action.type) {
//         case 'UPDATEBLOG':
//             return state.concat(action.payload);
//         case 'REMOVE_DELETED':
//             return state.filter(blog => blog.id === action.payload.id);
//         case 'GET_ALL_FROM_DB':
//             return state.concat(action.payload);
//         default:
//             return state;
//     }
// }

// export const updateBlogCountAfterCreate = ( addedBlog ) => {
//     return {
//         type: 'UPDATEBLOG',
//         payload: addedBlog
//     }
// }

// export const updateBlogCountAfterDelete = (deletedBlog) => {
//     return {
//         type: 'REMOVE_DELETED',
//         payload: deletedBlog
//     }
// }

// export const addAllBlogsToStore = ( blogsFromDatabase ) => {
//     return {
//         type: 'GET_ALL_FROM_DB',
//         payload: blogsFromDatabase
//     }
// }
// export default blogListReducer;
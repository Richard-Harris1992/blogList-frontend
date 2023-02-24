import React, { useState, useEffect, useRef } from 'react';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import Blog from './components/Blog';
import LoginForm from './components/LoginForm';
import LogoutButton from './components/LogoutButton';
import CreateBlog from './components/CreateBlog';
import Notification from './components/Notification';
import Toggleable from './components/Toggleable';
import {  addAllBlogs, addBlog, deleteBlog, updateBlog, addLike } from './features/blogRedux';
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const blogs = useSelector(state => state.blogs);
  const [notification, setNotification] = useState(null);
  const [className, setClassName] = useState(null);



  useEffect(() => {
     blogService
      .getAll()
      .then(blogItems => dispatch(addAllBlogs(blogItems)));
  }, [dispatch]);

  useEffect(() => {
    const loggedInBlogAppUserJSON = window.localStorage.getItem('loggedInBlogAppUser');
    if (loggedInBlogAppUserJSON) {
      const user = JSON.parse(loggedInBlogAppUserJSON);
      setUser(user);
    }
  }, []);

  const handleLogout = () => {
    window.localStorage.clear();
    setUser(null);
  };
  const loginFormRef = useRef();
  const blogFormRef = useRef();

  const likeButtonClick = async (id, blogObj) => {
    try {
      const likedBlog = await blogService
        .update(id, blogObj);
      dispatch(addLike(likedBlog));
      setNotification(`You liked this blog`);
      setClassName('notification-success');
    } catch (error) {
      setNotification(error.toString());
      setClassName('notification-error');
    } finally {
      setTimeout(() => setNotification(null), 3000);
      console.log('hi')
    }
  };

  const handleDelete = async (id) => {
    try {
      const deletedBlog = await blogService
        .deleteBlog(id);
      dispatch(deleteBlog(deletedBlog));
      setNotification('You deleted this blog');
      setClassName('notification-success');
    } catch (error) {
      setNotification('There was an issue deleting this blog, make sure you\'re the one who added it');
      setClassName('notification-error');
    } finally {
      setTimeout(() => setNotification(null), 3000);
    }
  };
  
  const handleSubmit = async ( userObj ) => {
    try{
      loginFormRef.current.toggleVisibility();
      const response = await loginService
        .login(userObj);
      window.localStorage.setItem('loggedInBlogAppUser', JSON.stringify(response)); 
      blogService.setToken(response.token);
      setUser(response); 
      setNotification(`Log in was successful`);
      setClassName('notification-success');
    } catch(error) {
      setNotification('Wrong username or password');
      setClassName('notification-error');
    } finally {
      setTimeout(() => setNotification(null), 3000);
    }
  }
  

  const createFormSubmit = async (blogObj) => {
    try {
      blogFormRef.current.toggleVisibility();
      const createBlog =  await blogService
        .create(blogObj);
      dispatch(addBlog(createBlog));
      setNotification("New blog has been created");
      setClassName('notification-success');
    } catch (error) {
      setNotification('Blog creation failed');
      setClassName('notification-error');
    } finally {
      setTimeout(() => setNotification(null), 3000);
    }
  };

  return (
    <div>
      <Notification notification={notification} className={className} />

      {user ? <h2>Welcome back {user.name}</h2> : <h2>Welcome to the Blog Digest!</h2>}

      {user === null && (
        <Toggleable view="Login" hide="Close" ref={loginFormRef}>
          <LoginForm formSubmit={handleSubmit} />
        </Toggleable>
      )}

      {user !== null && <LogoutButton handleLogout={handleLogout} />
      }


      <h2>Blogs</h2>
      {
        blogs && blogs.map(blog => <Blog key={blog.id} blog={blog} like={likeButtonClick} deleteBlog={handleDelete} />)
      }

      {
        user !== null &&
        <Toggleable view='New Blog' hide='Close' ref={blogFormRef}>
          <CreateBlog newBlog={createFormSubmit} />
        </Toggleable>
      }

    </div>
  )
}

export default App



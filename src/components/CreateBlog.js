import { useState } from 'react';
import { useDispatch } from 'react-redux';
import blogService from '../services/blogs'
import { addBlog } from '../features/blogRedux';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const dispatch = useDispatch();

  const createFormSubmit = async (e) => {
    console.log(e)
    e.preventDefault();
    try {
      // blogFormRef.current.toggleVisibility();
      const createBlog =  await blogService
        .create({title,author,url});
      dispatch(addBlog(createBlog));
      // setNotification("New blog has been created");
      // setClassName('notification-success');
    } catch (error) {
      console.log(error)
      // setNotification('Blog creation failed');
      // setClassName('notification-error');
    } finally {
      // setTimeout(() => setNotification(null), 3000);
      setAuthor('');
      setTitle('');
      setUrl('');
    }
  };
 
 
 
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  }
  
  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  }
  
  const onUrlChange = (e) => {
    setUrl(e.target.value);
  }

  
  
    
  return(
      <div>
        <h3>Create a new blog</h3>
        <form onSubmit={createFormSubmit}>
          <label htmlFor="title"> Title: </label>
          <input id="title" value={title} onChange={onTitleChange} /> <br />
        
          <label htmlFor="author"> Author: </label>
          <input id="author" value={author} onChange={onAuthorChange} /> <br />
        
          <label htmlFor="url"> URL: </label>
          <input id="url" value={url} onChange={onUrlChange} /> <br />

          <button>Create</button>
        </form>
      </div>
    );
}

export default CreateBlog;
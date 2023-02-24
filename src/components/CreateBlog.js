import { useState } from 'react';

const CreateBlog = ({ newBlog }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  }
  
  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  }
  
  const onUrlChange = (e) => {
    setUrl(e.target.value);
  }

  const addBlog = async (e) => {
    e.preventDefault();
    newBlog({title, author, url});
    setAuthor('');
    setTitle('');
    setUrl('');
  }
  
    
  return(
      <div>
        <h3>Create a new blog</h3>
        <form onSubmit={addBlog}>
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
import Toggleable from "./Toggleable"
import BlogBody from "./BlogBody";


const Blog = ({ blog, like, deleteBlog }) => {
  
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  return(
  <div style={blogStyle}>
    <ul>
      Title: {blog.title}<br/>
      Author: {blog.author}<br/>

      <Toggleable view='View' hide='Hide'>
        <BlogBody blog={blog} addLike={like} deleteBlog={deleteBlog} />
      </Toggleable>
    </ul>
  </div> 
  );
  }

export default Blog
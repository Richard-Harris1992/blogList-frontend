import Toggleable from "./Toggleable"
import BlogBody from "./BlogBody";
import { Link } from "react-router-dom";

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
      Title: <Link to={`/blogs/${blog.id}`} >{blog.title}</Link><br/>
      Author: {blog.author}<br/>

      <Toggleable view='View' hide='Hide'>
        <BlogBody blog={blog} addLike={like} deleteBlog={deleteBlog} />
      </Toggleable>
    </ul>
  </div> 
  );
  }

export default Blog
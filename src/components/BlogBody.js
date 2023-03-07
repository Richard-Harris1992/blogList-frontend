


const BlogBody = ({ blog, addLike, deleteBlog }) => {
    
    const clickLike = (e) => {
        e.preventDefault();
        const updateObj = {
            title: blog.title,
            author: blog.author,
            url: blog.url,
            likes: blog.likes + 1,
            id: blog.id
        }
        
        addLike(blog.id, updateObj);
    }

    const removeBlog = (e) => {
        e.preventDefault();
        deleteBlog(blog.id);
    }

    return (
        <>
            URL: {blog.url} <br />
            Likes: {blog.likes} <button onClick={clickLike}>Like</button> <br />
            {blog.user && 'Added By: ' + blog.user.name}
            <button onClick={removeBlog}>Delete Blog</button>
        </>
    );
}

export default BlogBody;
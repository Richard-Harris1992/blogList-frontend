


const BlogBody = ({ blog, addLike, deleteBlog }) => {

    const clickLike = (e) => {
        e.preventDefault();
        blog.likes++;
        addLike(blog.id, blog);
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
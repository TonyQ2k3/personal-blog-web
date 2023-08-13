import '../styles/index.css';

export default function BlogList ({ blogs, title, handleDelete }) {
    if (blogs.length === 0) {
        return (
            <div className='empty-wrapper'>
                <img src="https://firebasestorage.googleapis.com/v0/b/qblog-26b0a.appspot.com/o/empty_screen.jpg?alt=media&token=2e1b2d33-dfb5-4e9e-bd56-18d9cebd15ca" />
                <button className='create-button'>Create new blog</button>
            </div>
        );
    }
    else
    return (
        <div className="list-wrapper">
            <h2>{title}</h2>
            <div className='blogs-container'>
                {blogs.map(blog => (
                    //Blog post item
                    <div className="blog-post" key={blog.id}>
                        <div className="header-wrapper">
                            <h3 className="blog-title">{blog.title}</h3>
                            <button onClick={() => handleDelete(blog.id)}>Delete</button>
                        </div>
                        <p style={{fontSize: 14,}}>by <strong>{blog.author}</strong></p> 
                        <p className="blog-body">{blog.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

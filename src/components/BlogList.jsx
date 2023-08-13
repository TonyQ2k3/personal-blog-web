import '../styles/index.css';

export default function BlogList ({ blogs, title, handleDelete }) {
    return (
        <div className="list-wrapper">
            <h2>{title}</h2>
            <div className='blogs-container'>
                {blogs.map(blog => (
                    //Blog post item
                    <div className="blog-post">
                        <div className="header-wrapper">
                            <h3 className="blog-title">{blog.title}</h3>
                            <button onClick={() => handleDelete(blog.id)}>Delete</button>
                        </div>
                        <p style={{fontSize: 14,}}>by <h4 className="blog-author">{blog.author}</h4></p> 
                        <p className="blog-body">{blog.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

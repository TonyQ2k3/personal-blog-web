import { useState } from 'react';
import '../styles/index.css';
import BlogList from '../components/BlogList';

export default function Home() {
    const [blogs, setBlogs] = useState([
        { id: 1, author: 'John Doe', title: 'Why I love my dogs', body: 'A blog is a website or page that is a part of a larger website. Typically, it features articles written in a conversational style with accompanying pictures or videos.'},
        { id: 2, author: 'Jane Doe', title: 'Today I hired 2 detectives to follow each other', body: 'Blogging has gained immense popularity due to its enjoyable and adaptable nature, allowing for self-expression and social connections. In addition, it serves as a platform for enhancing writing skills and promoting businesses.'},
        { id: 3, author: 'Jane Doe', title: 'Today I hired 2 detectives to follow each other', body: 'Blogging has gained immense popularity due to its enjoyable and adaptable nature, allowing for self-expression and social connections. In addition, it serves as a platform for enhancing writing skills and promoting businesses.'},
        { id: 4, author: 'Jane Doe', title: 'Today I hired 2 detectives to follow each other', body: 'Blogging has gained immense popularity due to its enjoyable and adaptable nature, allowing for self-expression and social connections. In addition, it serves as a platform for enhancing writing skills and promoting businesses.'},
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList title='All blogs' blogs={blogs} handleDelete={handleDelete} />
            <BlogList title="Jane Doe's blogs" blogs={blogs.filter((blog) => blog.author === "Jane Doe")} handleDelete={handleDelete} />
        </div>
    )
}
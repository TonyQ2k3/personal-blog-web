import { useState, useEffect } from 'react';
import '../styles/index.css';
import BlogList from '../components/BlogList';
import { collection, getDocs, db } from '../firebase/firebase';

export default function Home() {
    // blog : doc.id, author, title, body
    const [blogs, setBlogs] = useState([]);
    const [IDs, setIDs] = useState([]);

    const getBlogs = async() => {
        const queryBlogs = await getDocs(collection(db, "blogs"));
        queryBlogs.forEach((doc) => {
            if (IDs.indexOf(doc.id) == -1) {
                setIDs(old => [...old, doc.id]);
                setBlogs(old => [...old, {
                    id: doc.id, 
                    author: doc.data().author,
                    title: doc.data().title,
                    body: doc.data().body,
                }]);
            }
        });
    }

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        getBlogs();
    }, [blogs]);

    return (
        <div className="home">
            <BlogList title='All blogs' blogs={blogs} handleDelete={handleDelete} />
        </div>
    )
}
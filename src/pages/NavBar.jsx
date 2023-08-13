import '../styles/index.css';

export default function NavBar() {
    return (
        <nav className="navbar">
            <h1>QBlog.com</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
    )
}
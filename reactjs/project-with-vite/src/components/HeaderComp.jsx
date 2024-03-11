import { Link, NavLink } from "react-router-dom";

export default function HeaderComp() {
    return (
        <>
            <h1>Header Component</h1>

            <p>
            <a href="/">Home</a> |
            <a href="/about">About</a> | 
            <a href="/contact">Contact</a> |
            <a href="/blog">Blog</a>
            </p>

            {/* <p>
            <Link to="/">Home</Link> | 
            <Link to="/about">About</Link> |
            <Link to="/contact">Contact</Link> |
            <Link to="/blog">Blog</Link> |
            </p>

            <p>
            <NavLink to="/">Home</NavLink> | 
            <NavLink to="/about">About</NavLink> |
            <NavLink to="/contact">Contact</NavLink> |
            <NavLink to="/blog">Blog</NavLink> |
            </p> */}
        </>
    )
}
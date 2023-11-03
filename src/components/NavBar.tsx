import '../css/NavBar.css';
import { Link } from "react-router-dom"

function NavBar() {
    return (
    <div className="App">
        <header className="App-header">
            <nav className="navbar">

                <Link to='/resumewebsite' className="logo">Welcome</Link>

                <ul className="navMenu">
                <li>
                    <Link to='/resumewebsite' className="navLink">Home</Link>
                </li>
                <li>
                    <Link to='/resumewebsite/projects' className="navLink">Projects</Link>
                </li>
                <li>
                    <a href='/resumewebsite/spotify' className="navLink">Spotify Project</a>
                </li>
                <li>
                    <a href='/resumewebsite/extracirriculars' className="navLink">Extracirriculars</a>
                </li>
                </ul>
            </nav>
        </header>
    </div>
    );
}

export default NavBar;
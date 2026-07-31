import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../styles/Navbar.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <div className="nav-container row">
                <div className="col-sm-3 logo">
                   Sachin
                </div>
                <div className="col-sm-4 nav-spacer">
                </div>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                <div className={`col-sm-5 link-container ${menuOpen ? 'open' : ''}`}>
                    <Link to="/" className='link-tag' onClick={closeMenu}>Home</Link>
                    <Link to="/About" className='link-tag' onClick={closeMenu}>About</Link>
                    <Link to="/Contact" className='link-tag' onClick={closeMenu}>Contact</Link>
                    <Link to="/Certificate" className='link-tag' onClick={closeMenu}>Certificate</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar

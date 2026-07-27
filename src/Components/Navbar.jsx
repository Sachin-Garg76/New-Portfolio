import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="nav-container row">
                <div className="col-sm-3 logo">
                   Sachin
                </div>
                <div className="col-sm-4 ">
                </div>
                <div className="col-sm-5 link-container">
                    <Link to="/" className='link-tag' >Home</Link>
                    <Link to="/About" className='link-tag' >About</Link>
                    <Link to="/Contact" className='link-tag' >Contact</Link>
                    
                    <Link to="/Certificate" className='link-tag' >Certificate</Link>

                </div>
            </div>
        </>
    )
}

export default Navbar

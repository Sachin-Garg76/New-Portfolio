import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="nav-container row">
                <div className="col-sm-3 logo">
                    <Link to="/" className='link-tag' >Sachin</Link>
                </div>
                <div className="col-sm-5 ">
                </div>
                <div className="col-sm-4 link-container">
                    <Link to="/About" className='link-tag' >About</Link>
                    <Link to="/Certificate" className='link-tag' >Certificate</Link>
                    <Link to="/Contact" className='link-tag' >Contact</Link>

                </div>
            </div>
        </>
    )
}

export default Navbar

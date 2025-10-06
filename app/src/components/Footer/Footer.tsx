import logo from '../../assets/images/logo.png'
import "../Footer/Footer.css"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <footer>
            <div className="logo">
                <NavLink to="/">
                    <img src={logo} alt="Logo" />
                </NavLink>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, asperiores.
                </p>
                <div className="icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={24} className="text-blue-600" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={24} className="text-blue-400" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} className="text-pink-500" />
                    </a>
                </div>
            </div>

            <div className="categories">
                <h3>Categories</h3>
                <NavLink to="/road-bikes">Road Bikes</NavLink>
                <NavLink to="/mountain-bikes">Mountain Bikes</NavLink>
                <NavLink to="/hybrid-bikes">Hybrid Bikes</NavLink>
                <NavLink to="/cyclocross-bikes">Cyclocross Bikes</NavLink>
            </div>

            <div className="overviews">
                <h3>Overviews</h3>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </footer>
    )
}

export default Footer

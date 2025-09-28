import logo from '../../assets/images/logo.png'
import "../Footer/Footer.css"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <footer>
            <div className="logo">
                <img src={logo} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, asperiores.</p>
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
                <a href="">Road Bikes</a>
                <a href="">Mountain Bikes</a>
                <a href="">Hybryd Bikes</a>
                <a href="">Cycloros Bikes</a>

            </div>
            <div className="overviews">
                <h3>Overviews</h3>
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
        </footer>
    )
}

export default Footer

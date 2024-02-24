import '../../assets/CSS/Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer style={footerStyle}>
        <div className="footerContainer">
            <div className='socialIcons'>
                <a href=''><i><FaFacebook /></i></a>
                <a href=''><i><FaInstagram /></i></a>
                <a href=''><i><FaTwitter /></i></a>
                <a href=''><i><FaGooglePlusG /></i></a>
                <a href=''><i><FaYoutube /></i></a>
            </div>
            {/* <div className='footerNav'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Our Team</a></li>
                </ul>
            </div> */}
        </div>
            <div className='footerBtm'>
                <p>Copyright &copy;2024; <span className='name'>Knights</span></p>
            </div>
      </footer>
    </div>
  )
}
const footerStyle = {
  backgroundColor: '#007791',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  // position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
};

export default Footer

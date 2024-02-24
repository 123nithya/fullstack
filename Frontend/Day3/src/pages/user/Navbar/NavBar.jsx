import '../../../assets/CSS/NavBar.css'
// import SearchBar from '../SearchBar';
import NavOne from './NavOne';
import NavTwo from './NavTwo';

const NavBar = () => {
  return (
      <nav className="navbar" >
            <NavOne />
            <div className="navbar-links">
                
                <NavTwo />
            </div>
        </nav>
  )
}

export default NavBar;

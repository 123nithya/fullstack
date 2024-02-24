import PropTypes from 'prop-types'
import NavBar from './Navbar/NavBar'
import Footer from './Footer'
import "../../assets/CSS/User.css"
const UserLayout = ({ children }) => {
  return (
    <div className="user_container">
      <header style={{position:'fixed', width:'100vw'}}>
        <NavBar />
        {/* <h1>shhsshh</h1> */}
      </header>
      <main style={{overflow:'auto', marginTop:'6.5%',scrollbarWidth: "none" /* For Firefox */,
          "-ms-overflow-style": "none" /* For IE and Edge */,
          "::-webkit-scrollbar": {
            display: "none" /* For Chrome, Safari, and Opera */,
          },}}> 
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

UserLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default UserLayout

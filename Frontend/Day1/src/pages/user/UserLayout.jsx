import PropTypes from 'prop-types'
import NavBar from './NavBar'
import Footer from './Footer'

const UserLayout = ({ children }) => {
  return (
    <div className="">
      <header>
        <NavBar />
      </header>
      <main>
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

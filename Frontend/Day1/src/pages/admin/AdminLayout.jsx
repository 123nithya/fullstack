import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
const AdminLayout = ({ children }) => {
  return (
    <div className="admin_container">
        <aside>
            <Sidebar />
        </aside>
        <main>
            {children}
        </main>
        <footer>

        </footer>
    </div>
  )
}

AdminLayout.propTypes = {
    children:PropTypes.node.isRequired
}

export default AdminLayout
